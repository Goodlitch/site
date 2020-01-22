'use strict';
let mail = document.getElementById('mail');
mail.addEventListener(
  'input',  () => {
    if (mail.validity.patternMismatch) {
      mail.setCustomValidity('Введите корректный адрес.')
    } else {
      mail.setCustomValidity('')
    }
  }
)
let phone = document.getElementById('phone');
phone.addEventListener(
  'input',  () => {
    if (phone.validity.patternMismatch) {
      phone.setCustomValidity('Введите номер телефона, основываясь на образце в пустом поле.')
    } else {
      phone.setCustomValidity('')
    }
  }
)
let parentSurname = document.getElementById('parent-surname');
parentSurname.addEventListener(
  'input',  () => {
    if (parentSurname.validity.patternMismatch) {
      parentSurname.setCustomValidity('Фамилия должна начинаться с большой буквы и не содержать пробелов/цифр.')
    } else {
      parentSurname.setCustomValidity('')
    }
  }
)
let parentName = document.getElementById('parent-name');
parentName.addEventListener(
  'input',  () => {
    if (parentName.validity.patternMismatch) {
      parentName.setCustomValidity('Имя должно начинаться с большой буквы и не содержать пробелов/цифр.')
    } else {
      parentName.setCustomValidity('')
    }
  }
)
let parentPatronymic = document.getElementById('parent-patronymic');
parentPatronymic.addEventListener(
  'input',  () => {
    if (parentPatronymic.validity.patternMismatch) {
      parentPatronymic.setCustomValidity('Отчество должно начинаться с большой буквы и не содержать пробелов/цифр.')
    } else {
      parentPatronymic.setCustomValidity('')
    }
  }
)
let childSurname = document.getElementById('child-surname');
childSurname.addEventListener(
  'input',  () => {
    if (childSurname.validity.patternMismatch) {
      childSurname.setCustomValidity('Фамилия должна начинаться с большой буквы и не содержать пробелов/цифр.')
    } else {
      childSurname.setCustomValidity('')
    }
  }
)
let childName = document.getElementById('child-name');
childName.addEventListener(
  'input',  () => {
    if (childName.validity.patternMismatch) {
      childName.setCustomValidity('Имя должно начинаться с большой буквы и не содержать пробелов/цифр.')
    } else {
      childName.setCustomValidity('')
    }
  }
)
let childPatronymic = document.getElementById('child-patronymic');
childPatronymic.addEventListener(
  'input',  () => {
    if (childPatronymic.validity.patternMismatch) {
      childPatronymic.setCustomValidity('Отчество должно начинаться с большой буквы и не содержать пробелов/цифр.')
    } else {
      childPatronymic.setCustomValidity('')
    }
  }
)
