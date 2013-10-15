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