(function (window) {
  'use strict';

  function Model () {
    if (!localStorage['scavenger-hunt']) {
      localStorage['scavenger-hunt'] = "[false, false, false, false, false]";
      //TODO supply codes at start
    }
  }

  Model.prototype.getAllStamps = function (callback) {
    callback(JSON.parse(localStorage['scavenger-hunt']));
  };

  Model.prototype.saveStamp = function (stampCode, callback) {
    var success = true;
    var stamps = JSON.parse(localStorage['scavenger-hunt']);
    if (stampCode === '1111') {
      stamps[0] = true;
    } else if (stampCode === '3434') {
      stamps[1] = true;
    } else if (stampCode === '5452') {
      stamps[2] = true;
    } else if (stampCode === '0022') {
      stamps[3] = true;
    } else if (stampCode === '7887') {
      stamps[4] = true;
    } else if (stampCode === '8888') {
      stamps[5] = true;
    } else {
      success = false;
    }
    localStorage['scavenger-hunt'] = JSON.stringify(stamps);
    callback(success, stamps);
  };

  window.app = window.app || {};
  window.app.Model = Model;
})(window);
