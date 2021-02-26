let popup = document.querySelector('.popup');
let popupForm = popup.querySelector('.popup__form');
let name = document.querySelector('.profile__title');
let about = document.querySelector('.profile__subtitle');
let closePopupBtn = document.querySelector('.popup__btn-exit');
let editBtn = document.querySelector('.profile__edit');
let nameInput = document.querySelector('#name');
let aboutInput = document.querySelector('#about');

function closePopup() {
    popup.classList.remove('popup_opened');
}

function openPopup() {
    nameInput.value = name.textContent;
    aboutInput.value = about.textContent;
    popup.classList.add('popup_opened');
}

function formSubmitHandler(e) {
    e.preventDefault();
    name.textContent = nameInput.value;
    about.textContent = aboutInput.value;
    closePopup();
}


closePopupBtn.addEventListener('click', closePopup);
editBtn.addEventListener('click', openPopup);
popupForm.addEventListener('submit', formSubmitHandler);


