'use strict';

window.showGallery = function(evt) {

  var galleryOverlay        = document.querySelector('.gallery-overlay');
  var galleryOverlayClose   = galleryOverlay.querySelector('.gallery-overlay-close');
  var galleryImg            = galleryOverlay.querySelector('.gallery-overlay-image');
  var galleryLikes          = galleryOverlay.querySelector('.likes-count');
  var galleryComments       = galleryOverlay.querySelector('.comments-count');

  var parentElementEvent    = evt.target.parentElement;
  var parentElementImg      = parentElementEvent.querySelector('img').src;
  var parentElementLikes    = parentElementEvent.querySelector('.picture-likes').textContent;
  var parentElementComments = parentElementEvent.querySelector('.picture-comments').textContent;

  var ESCAPE_KEY_KODE = 27;
  var ENTER_KEY_KODE  = 13;

  galleryImg.src              = parentElementImg;
  galleryLikes.textContent    = parentElementLikes;
  galleryComments.textContent = parentElementComments;

  galleryOverlay.classList.remove('invisible');

  galleryOverlayClose.addEventListener('click', function() {
    galleryOverlay.classList.add('invisible');
  });

  document.addEventListener('keydown', function(event) {
    if (event.keyCode === ESCAPE_KEY_KODE) {
        galleryOverlay.classList.add('invisible');
    }
  });

  galleryOverlayClose.addEventListener('keydown', function(event) {
    if (event.keyCode === ENTER_KEY_KODE) {
      galleryOverlay.classList.add('invisible');
    }
  })
};
