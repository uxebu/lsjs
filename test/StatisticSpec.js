
function Statistic (){
  this.dependencies = [];
}

Statistic.prototype = {
  storeDependency: function(fileName){
    if(this.dependencies.indexOf(fileName) == -1) {
      this.dependencies.push(fileName);
    }
  },

  getDependencies : function(){
    return this.dependencies;
  }
};

describe('Statistic', function(){
  describe('storeDependency()', function(){
    it('should store dependency main.js',function(){
      var stats = new Statistic;
      stats.storeDependency('main.js');
      expect(stats.getDependencies())
          .toEqual(['main.js']);
    });

    it('should store two dependencies',function(){
      var stats = new Statistic;
      stats.storeDependency('main.js');
      stats.storeDependency('test1.js');
      expect(stats.getDependencies())
          .toEqual(['main.js', 'test1.js']);
    });
    it('should store a dependency once',function(){
      var stats = new Statistic;
      stats.storeDependency('main.js');
      stats.storeDependency('main.js');
      expect(stats.getDependencies())
          .toEqual(['main.js']);
    });
    it('should store every dependency once',function(){
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



  describe('getDependencies()', function(){

  });

});