'use strict';

// Реализуем открытие и закрытие формы при загрузке картинок

var uploadFile = document.querySelector('#upload-file');
var uploadOverlay = document.querySelector('.upload-overlay');
var uploadSelectImage = document.querySelector('.upload-image');
var uploadFormCancel = document.querySelector('.upload-form-cancel');

uploadFile.addEventListener('change', function() {
  if (uploadFile.value !== '') {
    uploadOverlay.classList.remove('invisible');
    uploadSelectImage.classList.add('invisible');
  }
});

uploadFormCancel.addEventListener('click', function() {
  uploadOverlay.classList.add('invisible');
  uploadSelectImage.classList.remove('invisible');
});

//  Реализуем применение фильтров к изображению

var filterImagePreview = document.querySelector('.filter-image-preview');
var uploadFilterControls = document.querySelector('.upload-filter-controls');
var filterInput = uploadFilterControls.querySelectorAll('input');

function filterChange() {
  for (var i = 0; i < filterInput.length; i++) {
    if (filterInput[i].checked) {
      var filterName = filterInput[i].value;
    }
  }

  filterImagePreview.removeAttribute('class');
  filterImagePreview.classList.add('filter-' + filterName);
}

for (var i = 0; i < filterInput.length; i++) {
  filterInput[i].addEventListener('change', filterChange);
}

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
