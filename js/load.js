'use strict';

(function () {
  window.load = function(url, onLoad) {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        onLoad(xhr.response);
      }
    }

    xhr.responseType = 'json';
    xhr.send();
  };
})();
