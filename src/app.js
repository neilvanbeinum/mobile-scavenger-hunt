(function () {
  'use strict';

  function ScavengerHunt() {
    this.model = new app.Model();
    this.view = new app.View();
    this.controller = new app.Controller(this.model, this.view);
  }

  var scavengerHunt = new ScavengerHunt();

  scavengerHunt.controller.showAllStamps();
})();
