describe('Statistic', function () {
  describe('storeDependency()', function () {
    it('should store dependency main.js', function () {
      var stats = new Statistic;
      stats.storeDependency('main.js');
      expect(stats.getDependencies())
          .toEqual(['main.js']);
    });
    it('should store two dependencies', function () {
      var stats = new Statistic;
      stats.storeDependency('main.js');
      stats.storeDependency('test1.js');
      expect(stats.getDependencies())
          .toEqual(['main.js', 'test1.js']);
    });
    it('should store a dependency once', function () {
      var stats = new Statistic;
      stats.storeDependency('main.js');
      stats.storeDependency('main.js');
      expect(stats.getDependencies())
          .toEqual(['main.js']);
    });
    it('should store every dependency once', function () {
      var stats = new Statistic;
      stats.storeDependency('test.js');
      stats.storeDependency('main.js');
      stats.storeDependency('test.js');
      stats.storeDependency('main.js');
      stats.storeDependency('test2.js');
      stats.storeDependency('test2.js');
      expect(stats.getDependencies())
          .toContainEachOnce(['main.js', 'test.js', 'test2.js']);
    });
  });

  describe('storeDependencies()', function () {
    it('should store one dependency', function() {
      var stats = new Statistic;
      var dependencies = ['main.js'];
      stats.storeDependencies(dependencies);
      expect(stats.getDependencies())
        .toEqual(dependencies);
    });
    it('should store multiple dependencies', function() {
      var stats = new Statistic;
      var dependencies = ['main.js', 'test.js'];
      stats.storeDependencies(dependencies);
      expect(stats.getDependencies())
        .toEqual(dependencies);
    });
    it('should store no depenydenc', function() {
      var stats = new Statistic;
      var dependencies = [];
      stats.storeDependencies(dependencies);
      expect(stats.getDependencies())
        .toEqual(dependencies);
    });
    it('should store many dependencies', function() {
      var stats = new Statistic;
      var dependencies = ['test1', 'test2', 'test3', 'test4', 'test5'];
      stats.storeDependencies(dependencies);
      expect(stats.getDependencies())
        .toEqual(dependencies);
    });
    it('should check if dependency already exists', function() {
      var stats = new Statistic;
      var dependencies = ['test1', 'test2', 'test3', 'test4', 'test5'];
      stats.storeDependencies(dependencies);
      stats.storeDependencies(dependencies);
      expect(stats.getDependencies())
        .toEqual(dependencies);
    });
  });
});

