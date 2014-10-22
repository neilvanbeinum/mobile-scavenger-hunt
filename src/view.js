(function (window) {
  'use strict';

  function View () {
    this.$code = document.querySelector('#code');
    this.$stampsList = document.querySelector('.stamps');
  }

  View.prototype.bind = function (viewCmd, handler) {
    if (viewCmd === 'codeEntered') {
      this.$code.addEventListener('change', function() {
        handler(code.value);
      });
    }
  };

  View.prototype.renderInvalidCode = function () {
    console.log('invalid');
  };

  View.prototype.renderValidCode = function () {
    console.log('valid');
  };

  View.prototype.renderStamps = function (stamps) {
    var i;
    for (i = 0; i < this.$stampsList.children.length; i += 1) {
      this.$stampsList.children[i].children[0].checked = stamps[i].completed;
    }

    //TODO: Find next stamp and display clue and show found location

    console.log(stamps);
  };

  window.app = window.app || {};
  window.app.View = View;
})(window);
