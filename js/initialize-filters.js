'use strict';

// модуль initializeFilters отвечает за применение фильтров к изображению:
// выбор фильтра и отмену предыдущего, применение фильтра к изображению

(function() {

  var filterImagePreview = document.querySelector('.filter-image-preview');
  var uploadFilterControls = document.querySelector('.upload-filter-controls');
  var ENTER_KEY_KODE = 13;

  // вешаем обработчик на контейнер фильтров
  // который срабатывает при использовании клавиатуры

  uploadFilterControls.addEventListener('keydown', function(event) {
    var idInput = event.target.getAttribute('for');     // определяем #ID используемого фильтра
    var input = document.querySelector('#' + idInput);  // находим используемый input

    // проверяем была ли нажата клавиша Enter
    // при этом каждый раз удаляем предыдущий фильтр с изображения
    // и добавляем новый фильтр

    if (event.keyCode === ENTER_KEY_KODE) {
      input.setAttribute('checked', 'checked');
      filterImagePreview.removeAttribute('class');
      filterImagePreview.classList.add('filter-' + input.value);
    }
  });

  // вешаем обработчик на контейнер фильтров
  // который слушает клики пользователя
  // при этом каждый раз удаляем предыдущий фильтр с изображения
  // и добавляем новый фильтр

  uploadFilterControls.addEventListener('click', function(event) {
    filterImagePreview.removeAttribute('class');
    filterImagePreview.classList.add('filter-' + event.target.value);
  });

})();
