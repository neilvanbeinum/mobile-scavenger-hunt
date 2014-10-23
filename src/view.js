(function (window) {
  'use strict';

  function View () {
    this.$clue = document.querySelector('.clue');
    this.$code = document.querySelector('#code');
    this.$codeResponse = document.querySelector('.code-response');
    this.$winResponse = document.querySelector('.win-response');
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
    this.$codeResponse.innerText = "Code does't match the clue! Try again.";
    this.$code.value = '';
  };

  View.prototype.renderValidCode = function () {
    this.$codeResponse.innerText = 'You found the code!';
    this.$code.value = '';
  };

  View.prototype.renderStamps = function (stamps) {
    var nextStampIndex = 0,
        stampListItem;

    while(nextStampIndex < stamps.length && stamps[nextStampIndex].completed) {
      stampListItem = this.$stampsList.children[nextStampIndex];
      stampListItem.children[0].checked = true;
      stampListItem.children[1].style.display = 'inline';
      nextStampIndex += 1;
    }

    if(nextStampIndex >= stamps.length) {
      this.$winResponse.innerText = 'You win the scavenger hunt!';
    }
    else {
      this.$clue.innerText = stamps[nextStampIndex].clue;
    }
  };

  window.app = window.app || {};
  window.app.View = View;
})(window);
