describe('Statistic', function () {
  describe('_storeModuleUrl()', function () {
    it('should store dependency main.js', function () {
      var stats = new Statistic;
      stats._storeModuleUrl('main.js');
      expect(stats.getModuleUrls())
        .toEqual(['main.js']);
    });
    it('should store two dependencies', function () {
      var stats = new Statistic;
      stats._storeModuleUrl('main.js');
      stats._storeModuleUrl('test1.js');
      expect(stats.getModuleUrls())
        .toEqual(['main.js', 'test1.js']);
    });
    it('should store a dependency once', function () {
      var stats = new Statistic;
      stats._storeModuleUrl('main.js');
      stats._storeModuleUrl('main.js');
      expect(stats.getModuleUrls())
        .toEqual(['main.js']);
    });
    it('should store every dependency once', function () {
      var stats = new Statistic;
      stats._storeModuleUrl('test.js');
      stats._storeModuleUrl('main.js');
      stats._storeModuleUrl('test.js');
      stats._storeModuleUrl('main.js');
      stats._storeModuleUrl('test2.js');
      stats._storeModuleUrl('test2.js');
      expect(stats.getModuleUrls())
        .toContainEachOnce(['main.js', 'test.js', 'test2.js']);
    });
  });

  describe('storeModuleUrls()', function () {
    it('should store one dependency', function () {
      var stats = new Statistic;
      var dependencies = ['main.js'];
      stats.storeModuleUrls(dependencies);
      expect(stats.getModuleUrls())
        .toEqual(dependencies);
    });
    it('should store multiple dependencies', function () {
      var stats = new Statistic;
      var dependencies = ['main.js', 'test.js'];
      stats.storeModuleUrls(dependencies);
      expect(stats.getModuleUrls())
        .toEqual(dependencies);
    });
    it('should store no depenydenc', function () {
      var stats = new Statistic;
      var dependencies = [];
      stats.storeModuleUrls(dependencies);
      expect(stats.getModuleUrls())
        .toEqual(dependencies);
    });
    it('should store many dependencies', function () {
      var stats = new Statistic;
      var dependencies = ['test1', 'test2', 'test3', 'test4', 'test5'];
      stats.storeModuleUrls(dependencies);
      expect(stats.getModuleUrls())
        .toEqual(dependencies);
    });
    it('should check if dependency already exists', function () {
      var stats = new Statistic;
      var dependencies = ['test1', 'test2', 'test3', 'test4', 'test5'];
      stats.storeModuleUrls(dependencies);
      stats.storeModuleUrls(dependencies);
      expect(stats.getModuleUrls())
        .toEqual(dependencies);
    });
  });

  describe('getModuleUrls()', function () {
    it('should return all dependencies', function () {
      var stats = new Statistic;
      var dependencies = ['test1', 'test2', 'test3', 'test4', 'test5'];
      stats.storeModuleUrls(dependencies);
      expect(dependencies).
        toEqual(stats.getModuleUrls());
    });
  });
});

