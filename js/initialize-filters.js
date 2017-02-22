'use strict';

// модуль initializeFilters отвечает за применение фильтров к изображению:
// выбор фильтра и отмену предыдущего, применение фильтра к изображению

(function() {

  window.initializeFilters = function(uploadFilterControls, applyFilter) {
    var ENTER_KEY_KODE = 13;

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

})();
