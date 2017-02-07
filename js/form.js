'use strict';

// Реализуем открытие и закрытие формы при загрузке картинок

var uploadFile = document.querySelector('#upload-file');
var uploadOverlay = document.querySelector('.upload-overlay');
var uploadSelectImage = document.querySelector('.upload-image');
var uploadFormCancel = document.querySelector('.upload-form-cancel');

var ENTER_KEY_KODE = 13;
var ESCAPE_KEY_KODE = 27;

function openForm() {
  uploadOverlay.classList.remove('invisible');
  uploadSelectImage.classList.add('invisible');
  uploadOverlay.setAttribute('aria-hidden', false);
  uploadFormCancel.setAttribute('aria-pressed', false);
}

function closeForm() {
  uploadOverlay.classList.add('invisible');
  uploadSelectImage.classList.remove('invisible');
  uploadOverlay.setAttribute('aria-hidden', true);
  uploadFormCancel.setAttribute('aria-pressed', true);
}

// обработчик на input type="file" открывает форму при загрузке фото

uploadFile.addEventListener('change', function() {
  if (uploadFile.value) {
    openForm();
  }

  document.addEventListener('keydown', function(event) {
    if (event.keyCode === ESCAPE_KEY_KODE) {
      closeForm();
    }
  })
});

//  обработчик на "крестике" .upload-form-cancel закрывает форму при нажатии мыши
//  использованиее Enter и Escape

uploadFormCancel.addEventListener('click', function() {
  closeForm();
});

uploadFormCancel.addEventListener('keydown', function(event) {
  if (event.keyCode === ENTER_KEY_KODE) {
    closeForm();
  }
});

//  Реализуем применение фильтров к изображению

var filterImagePreview = document.querySelector('.filter-image-preview');
var uploadFilterControls = document.querySelector('.upload-filter-controls');

uploadFilterControls.addEventListener('keydown', function(event) {
  var btn = event.target;
  var idInput = btn.getAttribute('for');
  var input = document.querySelector('#' + idInput);

  if (input.hasAttribute('checked')) {
    input.removeAttribute('checked');
  }

  if (event.keyCode === ENTER_KEY_KODE) {
    input.setAttribute('checked', 'checked');
    filterImagePreview.removeAttribute('class');
    filterImagePreview.classList.add('filter-' + input.value);
  }
});

uploadFilterControls.addEventListener('click', function(event) {
  var target = event.target;
  console.log(target)
});

// Реализем изменение масштаба изображения

var scaleField = document.querySelector('.upload-resize-controls-value');
var upScaleField = document.querySelector('.upload-resize-controls-button-inc');
var downScaleField = document.querySelector('.upload-resize-controls-button-dec');

var stepScaleValue = 25;
var maxScaleValue = 100;
var minScaleValue = 0;
var defaultScaleValue = 50;

upScaleField.addEventListener('click', function() {
  if (parseInt(scaleField.value) >= maxScaleValue) {
    scaleField.value = maxScaleValue + '%';
  } else {
    scaleField.value = parseInt(scaleField.value) + stepScaleValue + '%';
  }
});

downScaleField.addEventListener('click', function() {
  if (parseInt(scaleField.value) <= minScaleValue) {
    scaleField.value = minScaleValue + '%';
  } else {
    scaleField.value = parseInt(scaleField.value) - stepScaleValue + '%';
  }
});

filterImagePreview.style.transform = 'scale('+ defaultScaleValue / 100 +')';

function addScaleClass() {
  filterImagePreview.style.transform = 'scale(' + parseInt(scaleField.value) / 100 + ')';
}

upScaleField.addEventListener('click', addScaleClass);
downScaleField.addEventListener('click', addScaleClass);
