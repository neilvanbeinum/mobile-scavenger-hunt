(function (window) {
  'use strict';

  function Model () {
    if (!localStorage['scavenger-hunt']) {
      var stamps = [
        {
          code: 1111,
          completed : false,
          clue: 'Machine for making tasty caffeinated beverages. By which I mean coffee.',
        },
        {
          code: 3434,
          completed : false,
          clue: 'Anagram of INEPTRR',
        },
        {
          code: 5452,
          completed : false,
          clue: 'Desk with a view',
        },
        {
          code: 2525,
          completed : false,
          clue: 'Inferno!',
        },
        {
          code: 7887,
          completed : false,
          clue: "The location where Pat puts...It's the post box. Go to the post box.",
        }
      ];
      localStorage['scavenger-hunt'] = JSON.stringify(stamps);
    }
  }

  Model.prototype.getAllStamps = function (callback) {
    callback(JSON.parse(localStorage['scavenger-hunt']));
  };

  Model.prototype.saveStamp = function (stampCode, callback) {
    var i,
        currentStamp,
        success = false,
        stamps = JSON.parse(localStorage['scavenger-hunt']);

    for (i = 0; i < stamps.length; i += 1) {
      currentStamp = stamps[i];
      if (currentStamp.code === stampCode) {
        currentStamp.completed = true;
        success = true;
      }
    }

    localStorage['scavenger-hunt'] = JSON.stringify(stamps);
    callback(success, stamps);
  };

  window.app = window.app || {};
  window.app.Model = Model;
})(window);
