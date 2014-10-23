(function (window) {
  'use strict';

  function Model () {
    if (!localStorage['scavenger-hunt']) {
      var stamps = [
        {
          code: 1111,
          completed : false,
          clue: 'Machine for making tasty caffeinated beverages.'
        },
        {
          code: 3434,
          completed : false,
          clue: 'Anagram of INEPTRR'
        },
        {
          code: 5452,
          completed : false,
          clue: 'Where the jackets hang out'
        },
        {
          code: 2525,
          completed : false,
          clue: 'Inferno!'
        },
        {
          code: 7887,
          completed : false,
          clue: "I need a pen"
        }
      ];
      localStorage['scavenger-hunt'] = JSON.stringify(stamps);
    }
  }

  Model.prototype.getAllStamps = function (callback) {
    callback(JSON.parse(localStorage['scavenger-hunt']));
  };

  Model.prototype.saveStamp = function (stampCode, callback) {
    var i = 0,
        stampToFind,
        code = parseInt(stampCode),
        success = false,
        stamps = JSON.parse(localStorage['scavenger-hunt']);

    while(i < stamps.length && stamps[i].completed) {
      i += 1;
    }

    if (i === stamps.length) {
      return;
    }

    stampToFind = stamps[i];
    if (stampToFind.code === code) {
      stampToFind.completed = true;
      success = true;
    }

    localStorage['scavenger-hunt'] = JSON.stringify(stamps);
    callback(success, stamps);
  };

  window.app = window.app || {};
  window.app.Model = Model;
})(window);
