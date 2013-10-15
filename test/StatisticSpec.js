function Statistic (){

}

Statistic.prototype = {
  storeDependency: function(){

  },
  getDependencies : function(){
    return ['main.js'];
  }
}

describe('Statistic', function(){
  describe('storeDependency()', function(){
    it('should store dependency main.js',function(){
      var stats = new Statistic;
      stats.storeDependency('main.js');
      expect(stats.getDependencies())
          .toEqual(['main.js']);
    })
  });

  describe('getDependencies()', function(){

  });

});