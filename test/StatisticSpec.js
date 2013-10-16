describe('Statistic', function () {

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
    it('should work with empty array', function () {
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
    it('should store one dependency ONLY once', function () {
      var stats = new Statistic;
      var dependencies = ['test1'];
      stats.storeModuleUrls(dependencies);
      stats.storeModuleUrls(dependencies);
      expect(stats.getModuleUrls())
        .toEqual(dependencies);
    });
    it('should store each dependency ONLY once', function () {
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

