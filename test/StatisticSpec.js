describe('Statistic', function () {

  describe('storeModuleUrls()', function () {
    it('should store one module URL', function () {
      var stats = new Statistic;
      var moduleUrls = ['main.js'];
      stats.storeModuleUrls(moduleUrls);
      expect(stats.getModuleUrls())
        .toEqual(moduleUrls);
    });
    it('should store multiple module URLs', function () {
      var stats = new Statistic;
      var moduleUrls = ['main.js', 'test.js'];
      stats.storeModuleUrls(moduleUrls);
      expect(stats.getModuleUrls())
        .toEqual(moduleUrls);
    });
    it('should work with empty array', function () {
      var stats = new Statistic;
      var moduleUrls = [];
      stats.storeModuleUrls(moduleUrls);
      expect(stats.getModuleUrls())
        .toEqual(moduleUrls);
    });
    it('should store many module URLs', function () {
      var stats = new Statistic;
      var moduleUrls = ['test1', 'test2', 'test3', 'test4', 'test5'];
      stats.storeModuleUrls(moduleUrls);
      expect(stats.getModuleUrls())
        .toEqual(moduleUrls);
    });
    it('should store one module URL ONLY once', function () {
      var stats = new Statistic;
      var moduleUrls = ['test1'];
      stats.storeModuleUrls(moduleUrls);
      stats.storeModuleUrls(moduleUrls);
      expect(stats.getModuleUrls())
        .toEqual(moduleUrls);
    });
    it('should store each module URL ONLY once', function () {
      var stats = new Statistic;
      var moduleUrls = ['test1', 'test2', 'test3', 'test4', 'test5'];
      stats.storeModuleUrls(moduleUrls);
      stats.storeModuleUrls(moduleUrls);
      expect(stats.getModuleUrls())
        .toEqual(moduleUrls);
    });
  });

  describe('getModuleUrls()', function () {
    it('should return all module URLs', function () {
      var stats = new Statistic;
      var moduleUrls = ['test1', 'test2', 'test3', 'test4', 'test5'];
      stats.storeModuleUrls(moduleUrls);
      expect(moduleUrls).
        toEqual(stats.getModuleUrls());
    });
  });
});

