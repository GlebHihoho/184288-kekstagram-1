'use strict';

(function() {
  var templateElement   = document.querySelector('#picture-template');
  var elementToClone    = templateElement.content.querySelector('.picture');
  var picturesContainer = document.querySelector('.pictures')
  var filters           = document.querySelector('.filters');

  var ENTER_KEY_KODE = 13;
  var URL            = 'https://intensive-javascript-server-myophkugvq.now.sh/kekstagram/data';

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
    element.querySelector('img').src = data.url;
    element.querySelector('img').setAttribute('tabindex', '4');
    element.querySelector('.picture-likes').textContent = data.likes;
    element.querySelector('.picture-comments').textContent = data.comments.length;
    container.appendChild(element);

    return element;
  };
})();
