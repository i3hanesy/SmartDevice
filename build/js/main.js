'use strict';

window.util = (function () {

  var KEY_CODE = {
    ESC: 27
  };

  var footer = document.querySelector('footer');

  var partitions = footer.querySelector('.footer-top__partitions');
  var address = footer.querySelector('.footer-top__address');

  var partitionsToggle = partitions.querySelector('button');
  var addressToggle = address.querySelector('button');

  var modalOverlay = document.querySelector('.modal__overlay');
  var modal = modalOverlay.querySelector('.modal');
  var callButoon = document.querySelector('.header__button--call button');
  var closeModalButton = modal.querySelector('button[type="reset"]');

  // var questionForm = document.querySelector('.question__form');
  // var telephoneQuestionInput = questionForm.querySelector('input[type="tel"]');

  partitions.classList.remove('footer-top__no-js');
  address.classList.remove('footer-top__no-js');


  // гормошка в футере

  function openFooterInformation(element1, element2) {
    if (element1.classList.contains('closed--footer-information')) {
      element1.classList.remove('closed--footer-information');
      element1.classList.add('opened--footer-information');
    } else {
      element1.classList.remove('opened--footer-information');
      element1.classList.add('closed--footer-information');
    }

    if (element2.classList.contains('opened--footer-information')) {
      element2.classList.remove('opened--footer-information');
      element2.classList.add('closed--footer-information');
    } else {
      element2.classList.remove('closed--footer-information');
      element2.classList.add('opened--footer-information');
    }
  }

  if (partitionsToggle) {
    partitionsToggle.addEventListener('click', function (evt) {
      evt.preventDefault();
      openFooterInformation(partitions, address);

    });
  }

  if (addressToggle) {
    addressToggle.addEventListener('click', function (evt) {
      evt.preventDefault();
      openFooterInformation(partitions, address);

    });
  }

  // форма заказа звонка

  var openModal = function () {
    modalOverlay.classList.remove('modal--hidden');

    document.addEventListener('keydown', onEscKeydown);
  };

  var closeModal = function () {
    modalOverlay.classList.add('modal--hidden');

    document.removeEventListener('keydown', onEscKeydown);
  };

  var onEscKeydown = function (evt) {
    if (evt.keyCode === KEY_CODE.ESC) {
      closeModal();
    }
  };

  if (callButoon) {
    callButoon.addEventListener('click', function () {
      openModal();
    });
  }

  if (closeModalButton) {
    closeModalButton.addEventListener('click', function () {
      closeModal();
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', function (evt) {
      var overlay = evt.target;

      if (overlay === modalOverlay) {
        closeModal();
      }

    });
  }

  // форма вопроса


})();
