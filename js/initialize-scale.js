'use strict';

(function() {

  var initializeScale = function(element, step, defaultValue) {

    var scaleField = element.querySelector('.upload-resize-controls-value');            // поле отображающее текущее значение масштаба
    var upScaleField = element.querySelector('.upload-resize-controls-button-inc');     // кнопка отвечающая за увеличение масштаба изображения
    var downScaleField = element.querySelector('.upload-resize-controls-button-dec');   // кнопка отвечающая за уменьшение масштаба изображения
    var imagePreview = document.querySelector('.filter-image-preview');                 // изображение к которому применяется масштабирование

    var MAX_SCALE_VALUE = 100;  // максимальное значение масштаба изображения
    var MIN_SCALE_VALUE = 0;    // минимальное значение масштаба изображения

    // установим масштаб изображения в начаьное положение согласно defaultValue
    imagePreview.style.transform = 'scale('+ defaultValue / 100 +')';

    // навесим обработчи клика на кнопку увеличения масштаба
    // и изменяем масштаб согласно установленным значениям

    upScaleField.addEventListener('click', function() {
      if (parseInt(scaleField.value) >= MAX_SCALE_VALUE) {
        scaleField.value = MAX_SCALE_VALUE + '%';
      } else {
        scaleField.value = parseInt(scaleField.value) + step + '%';
      }
    });

    // навесим обработчи клика на кнопку уменьшения масштаба
    // и изменяем масштаб согласно установленным значениям

    downScaleField.addEventListener('click', function() {
      if (parseInt(scaleField.value) <= MIN_SCALE_VALUE) {
        scaleField.value = MIN_SCALE_VALUE + '%';
      } else {
        scaleField.value = parseInt(scaleField.value) - step + '%';
      }
    });

    // ф-я addScaleClass() изменяет масштаб изображения в зависимости
    // от установленных значений масштаба

    function addScaleClass() {
      imagePreview.style.transform = 'scale(' + parseInt(scaleField.value) / 100 + ')';
    }

    upScaleField.addEventListener('click', addScaleClass);
    downScaleField.addEventListener('click', addScaleClass);
  }

  var scaleControls = document.querySelector('.upload-resize-controls');
  var STEP_SCALE_VALUE = 25;        // шаг изменения масштаба изображения
  var DEFAULT_SCALE_VALUE = 50;     // значение масштаба изображения по умолчанию

  initializeScale(scaleControls, STEP_SCALE_VALUE, DEFAULT_SCALE_VALUE);

})();
