'use strict';

(function() {

  var scaleElement = document.querySelector('.upload-resize-controls');
  var pictureElement = document.querySelector('.filter-image-preview');

  var adjustScale = function(scale) {
    pictureElement.style.transform = 'scale(' + scale / 100 + ')';
  };

  var initializeScale = function(scaleElement, adjustScale) {
    var scaleField = scaleElement.querySelector('[type="text"]');

    var DEFAULT_SCALE_VALUE = 50;
    var MAX_SCALE_VALUE = 100;
    var MIN_SCALE_VALUE = 0;
    var STEP_SCALE_VALUE = 25;

    adjustScale(DEFAULT_SCALE_VALUE);

    scaleElement.addEventListener('click', function(event) {
      if (event.target.innerHTML === '+' && parseInt(scaleField.value) < MAX_SCALE_VALUE) {
        scaleField.value = parseInt(scaleField.value) + STEP_SCALE_VALUE + '%';
        adjustScale(parseInt(scaleField.value));
      } else if (event.target.innerHTML === '–' && parseInt(scaleField.value) > MIN_SCALE_VALUE) {
        scaleField.value = parseInt(scaleField.value) - STEP_SCALE_VALUE + '%';
        adjustScale(parseInt(scaleField.value));
      }
    })
  };

  initializeScale(scaleElement, adjustScale);

})();
