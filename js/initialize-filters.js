'use strict';

// модуль initializeFilters отвечает за применение фильтров к изображению:
// выбор фильтра и отмену предыдущего, применение фильтра к изображению

window.initializeFilters = (function() {

  return function(uploadFilterControls, applyFilter, saturateControl) {
    var uploadFilterLevel = uploadFilterControls.querySelector('.upload-filter-level');
    var separate = uploadFilterLevel.style.filter;

    var ENTER_KEY_KODE = 13;

    uploadFilterControls.addEventListener('change', function(event) {
      var filterName = event.target.value;

      if (filterName !== 'none') {
        uploadFilterLevel.classList.remove('hidden');
        saturateControl(separate)
      } else {
        uploadFilterLevel.classList.add('hidden');
        saturateControl(separate)
      }

      applyFilter(filterName);
    });

    uploadFilterControls.addEventListener('keydown', function(event) {
      if (event.keyCode === ENTER_KEY_KODE) {
        var filterName = event.target.getAttribute('for').replace('upload-filter-', '');
        applyFilter(filterName);
      }
    });

    // работа с ползунком насыщенности изображения

    var filterLevelLine      = uploadFilterControls.querySelector('.upload-filter-level-line');
    var filterLevelPin       = uploadFilterControls.querySelector('.upload-filter-level-pin');
    var filterLevelValue     = uploadFilterControls.querySelector('.upload-filter-level-val');

    filterLevelPin.addEventListener('mousedown', function(event) {
      event.preventDefault();
      var startPointX = event.clientX;

      var MAX_FILTER_VALUE = parseInt(filterLevelLine.offsetWidth, 10);
      var MIN_FILTER_VALUE = 0;

      function pixelInPercent(pixel) {
        return Math.ceil(parseInt(pixel, 10) * 100 / MAX_FILTER_VALUE) + '%';
      }

      var onMouseMove = function(moveEvent) {
        moveEvent.preventDefault();

        var shiftX = startPointX - moveEvent.clientX;

        filterLevelPin.style.left    = (filterLevelPin.offsetLeft - shiftX) + 'px';
        filterLevelValue.style.width = filterLevelPin.style.left;

        startPointX = moveEvent.clientX;

        if (parseInt(filterLevelPin.style.left, 10) <= MIN_FILTER_VALUE) {
          filterLevelPin.style.left = MIN_FILTER_VALUE + 'px';
          document.removeEventListener('mousemove', onMouseMove);
        }

        if (parseInt(filterLevelPin.style.left, 10) >= MAX_FILTER_VALUE) {
          filterLevelPin.style.left = MAX_FILTER_VALUE + 'px';
          document.removeEventListener('mousemove', onMouseMove);
        }

        saturateControl(pixelInPercent(filterLevelValue.style.width));
        separate = saturateControl(pixelInPercent(filterLevelValue.style.width));
      }

      var onMouseUp = function(upEvent) {
        upEvent.preventDefault();

        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      }

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    })
  };

})();
