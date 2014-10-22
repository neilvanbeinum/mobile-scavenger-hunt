(function (window) {
  'use strict';

  function Controller(model, view) {
    var that = this;
    that.model = model;
    that.view = view;

    this.view.bind('codeEntered', function(code) {
      that.submitStampCode(code);
    });
  }

  Controller.prototype.submitStampCode = function (stampCode) {
    var that = this;
    this.model.saveStamp(stampCode, function (success, stamps) {
      if (success) {
        that.view.renderStamps(stamps);
        that.view.renderValidCode();
      }
      else {
        that.view.renderInvalidCode();
      }
    });
  };

  Controller.prototype.showAllStamps = function () {
    var that = this;
    this.model.getAllStamps(function(stamps){
      that.view.renderStamps(stamps);
    });
  };

  window.app = window.app || {};
  window.app.Controller = Controller;
})(window);
