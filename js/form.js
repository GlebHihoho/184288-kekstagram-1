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

// Подключим модули отвечающие за изменение фильтров и масштаба изображения

window.initializeFilters();

var scaleControls = document.querySelector('.upload-resize-controls');
var STEP_SCALE_VALUE = 25;        // шаг изменения масштаба изображения
var DEFAULT_SCALE_VALUE = 50;     // значение масштаба изображения по умолчанию

window.initializeScale(scaleControls, STEP_SCALE_VALUE, DEFAULT_SCALE_VALUE);
