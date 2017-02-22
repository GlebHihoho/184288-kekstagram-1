'use strict';

window.initializeScale = (function() {

  return function(scaleElement, adjustScale) {
    var scaleField = scaleElement.querySelector('[type="text"]');

    var DEFAULT_SCALE_VALUE = 50;
    var MAX_SCALE_VALUE     = 100;
    var MIN_SCALE_VALUE     = 25;
    var STEP_SCALE_VALUE    = 25;

    adjustScale(DEFAULT_SCALE_VALUE);

    scaleElement.addEventListener('click', function(event) {
      if (event.target.innerHTML === '+' && parseInt(scaleField.value, 10) < MAX_SCALE_VALUE) {
        scaleField.value = parseInt(scaleField.value, 10) + STEP_SCALE_VALUE + '%';
        adjustScale(parseInt(scaleField.value, 10));
      } else if (event.target.innerHTML === '–' && parseInt(scaleField.value, 10) > MIN_SCALE_VALUE) {
        scaleField.value = parseInt(scaleField.value, 10) - STEP_SCALE_VALUE + '%';
        adjustScale(parseInt(scaleField.value, 10));
      }
    })
  };

})();
