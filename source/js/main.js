'use strict';

window.util = (function () {

  var KEY_CODE = {
    ESC: 27
  };

  var htmlTag = document.querySelector('html');
  var partitions = document.querySelector('.footer-top__partitions');
  var address = document.querySelector('.footer-top__address');

  var partitionsToggle = partitions.querySelector('button');
  var addressToggle = address.querySelector('button');

  var modalOverlay = document.querySelector('.overlay');
  var openModalButton = document.querySelector('.header__button-call button');

  if (modalOverlay) {
    var modalForm = modalOverlay.querySelector('form');
    var closeModalButton = modalOverlay.querySelector('button[type="reset"]');

    var modalNameInput = modalOverlay.querySelector('input[type="text"]');
    var modalTelphoneInput = modalOverlay.querySelector('input[type="tel"]');
    var modalQuestion = modalOverlay.querySelector('textarea');
    var modalAgreement = modalOverlay.querySelector('#agreement-modal');
    var modalSendButton = modalOverlay.querySelector('button[type="submit"]');
  }

  partitions.classList.remove('footer-top__no-js');
  address.classList.remove('footer-top__no-js');


  // гормошка в футере

  function openFooterInformation(element1, element2) {
    var firstElementClosed = element1.classList.contains('footer-top__information-closed');

    var openElement = function (element) {
      element.classList.remove('footer-top__information-closed');
      element.classList.add('footer-top__information-opened');
    };

    var closeElement = function (element) {
      element.classList.remove('footer-top__information-opened');
      element.classList.add('footer-top__information-closed');
    };

    if (firstElementClosed && element2.classList.contains('footer-top__information-closed')) {
      openElement(element1);
    } else if (firstElementClosed && element2.classList.contains('footer-top__information-opened')) {
      closeElement(element2);
      openElement(element1);
    } else if (element1.classList.contains('footer-top__information-opened')) {
      closeElement(element1);
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
      openFooterInformation(address, partitions);

    });
  }

  // форма заказа звонка

  var openModal = function () {
    htmlTag.style.overflow = 'hidden';
    modalOverlay.classList.remove('overlay--hidden');
    modalNameInput.focus();
    document.addEventListener('keydown', onEscKeydown);
  };

  var closeModal = function () {
    htmlTag.style.overflow = 'visible';
    modalOverlay.classList.add('overlay--hidden');

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
