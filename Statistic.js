function Statistic () {
  this.dependencies = [];
}

Statistic.prototype = {
  _storeModuleUrl: function (fileName) {
    if (this.dependencies.indexOf(fileName) == -1) {
      this.dependencies.push(fileName);
    }
  },

  storeModuleUrls: function (dependencies) {
    for (var i = 0; i < dependencies.length; i++) {
      this._storeModuleUrl(dependencies[i]);
    }
  },

  getModuleUrls: function () {
    return this.dependencies;
  }
};
