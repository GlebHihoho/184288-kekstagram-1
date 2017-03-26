'use strict';

(function() {

  var templateElement   = document.querySelector('#picture-template');
  var elementToClone    = templateElement.content.querySelector('.picture');
  var picturesContainer = document.querySelector('.pictures');
  var filters           = document.querySelector('.filters');
  var filtersInput      = filters.querySelectorAll('input');

  var ENTER_KEY_KODE = 13;
  var URL            = '//up.htmlacademy.ru/assets/js_intensive/jsonp/pictures.js';

  window.load(URL, function(onLoad) {
    var pictures = onLoad;
    filters.classList.remove('hidden');
    picturesContainer.addEventListener('click', function(evt) {
      if (evt.target.src) {
        window.showGallery(evt);
      }
    });

    picturesContainer.addEventListener('keydown', function(evt) {
      if (evt.target.src && evt.keyCode === ENTER_KEY_KODE) {
        window.showGallery(evt);
      }
    });

    // ф-я compareRandom() возвращает случайное число
    // используется для сортировки элементов массива в случайном порядке

    function compareRandom() {
      return Math.random() - 0.5;
    }

    // ф-я compareIncrease(a, b) используется для сортировки элементов массива
    // в порядке возрастания комментариев

    function compareIncrease(a, b) {
      if (a.comments.length < b.comments.length) {
        return 1;
      } else if (a.comments.length > b.comments.length) {
        return -1;
      } else {
        return 0;
      }
    }

    function eventFilter(evt) {
      if (evt.target.value === 'popular') {
        picturesContainer.innerHTML = '';
        renderPictures(pictures);
      } else if (evt.target.value === 'new') {
        var randomArray = pictures.slice().sort(compareRandom).slice(0, 10);
        picturesContainer.innerHTML = '';
        renderPictures(randomArray);
      } else {
        picturesContainer.innerHTML = '';
        var sortCommentArray = pictures.slice().sort(compareIncrease);
        renderPictures(sortCommentArray);
      }
    }

    for (var i = 0; i < filtersInput.length; i++) {
      filtersInput[i].addEventListener('change', function(evt) {
        eventFilter(evt);
      })
    }

    renderPictures(pictures);
  });

  function renderPictures(pictures) {
    pictures.forEach(function(picture) {
      getPictureElement(picture, picturesContainer);
    })
  }

  var getPictureElement = function(data, container) {
    var element = elementToClone.cloneNode(true);

    element.removeAttribute('href');
    element.querySelector('img').setAttribute('tabindex', '4');
    element.querySelector('img').src                       = data.url;
    element.querySelector('.picture-likes').textContent    = data.likes;
    element.querySelector('.picture-comments').textContent = data.comments.length;
    container.appendChild(element);

    return element;
  };

})();
