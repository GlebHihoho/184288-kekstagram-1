'use strict';

// модуль initializeFilters отвечает за применение фильтров к изображению:
// выбор фильтра и отмену предыдущего, применение фильтра к изображению

(function() {

  var pictureElement       = document.querySelector('.filter-image-preview');
  var uploadFilterControls = document.querySelector('.upload-filter-controls');

  var ENTER_KEY_KODE = 13;

  var applyFilter = function(event) {
    pictureElement.removeAttribute('class');
    pictureElement.classList.add('filter-' + event);
  };

  var initializeFilters = function(uploadFilterControls, applyFilter) {
    uploadFilterControls.addEventListener('change', function(event) {
      var filterName = event.target.value;
      applyFilter(filterName);
    });

    uploadFilterControls.addEventListener('keydown', function(event) {
      if (event.keyCode === ENTER_KEY_KODE) {
        var filterName = event.target.getAttribute('for').replace('upload-filter-', '');
        applyFilter(filterName);
      }
    });
  };

  initializeFilters(uploadFilterControls, applyFilter);

})();
