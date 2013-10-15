function Statistic () {
  this.dependencies = [];
}

Statistic.prototype = {
  storeDependency: function (fileName) {
    if (this.dependencies.indexOf(fileName) == -1) {
      this.dependencies.push(fileName);
    }
  },

  storeDependencies: function (dependencies) {
    for (var i = 0; i < dependencies.length; i++) {
      this.storeDependency(dependencies[i]);
    }
  },

  getDependencies: function () {
    return this.dependencies;
  }
};