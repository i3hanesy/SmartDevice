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
  var modalForm = modal.querySelector('form');
  var openModalButton = document.querySelector('.header__button-call button');
  var closeModalButton = modal.querySelector('button[type="reset"]');

  var modalNameInput = modal.querySelector('input[type="text"]');
  var modalTelphoneInput = modal.querySelector('input[type="tel"]');
  var modalQuestion = modal.querySelector('textarea');
  var modalAgreement = modal.querySelector('#agreement-modal');
  var modalSendButton = modal.querySelector('button[type="submit"]');

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
    modalNameInput.focus();
    document.addEventListener('keydown', onEscKeydown);
  };

  var closeModal = function () {
    modalOverlay.classList.add('modal--hidden');

    document.removeEventListener('keydown', onEscKeydown);
  };

  var onEscKeydown = function (evt) {
    if (evt.keyCode === KEY_CODE.ESC) {
      closeModal();
      modalForm.reset();
    }
  };

  if (openModalButton) {
    openModalButton.addEventListener('click', function () {
      openModal();
    });
  }

  if (closeModalButton) {
    closeModalButton.addEventListener('click', function () {
      closeModal();
      modalForm.reset();
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', function (evt) {
      var overlay = evt.target;

      if (overlay === modalOverlay) {
        closeModal();
        modalForm.reset();
      }

    });
  }

  if (modalSendButton) {
    modalSendButton.addEventListener('click', function (evt) {

      if (modalAgreement.checked) {
        evt.preventDefault();
        localStorage.setItem('modalUserName', modalNameInput.value);
        localStorage.setItem('modalPhoneNumber', modalTelphoneInput.value);
        localStorage.setItem('modalQuestion', modalQuestion.value);
        closeModal();
      }
    });
  }

  // форма вопроса


})();
