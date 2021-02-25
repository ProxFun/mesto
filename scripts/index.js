let popup, popupForm;
let name, about;
let nameInput, aboutInput;
let editBtn, addBtn, saveBtn, closePopupBtn;

popup = document.querySelector('.popup');
popupForm = popup.querySelector('.popup__form');
name = document.querySelector('.profile__title');
about = document.querySelector('.profile__subtitle');
closePopupBtn = document.querySelector('.popup__btn-exit');
editBtn = document.querySelector('.profile__edit');
addBtn = document.querySelector('.profile__add');
saveBtn = document.querySelector('.popup__btn-submit');
nameInput = document.querySelector('#name');
aboutInput = document.querySelector('#about');

closePopupBtn.addEventListener('click', closePopup);
editBtn.addEventListener('click', openPopup);
popupForm.addEventListener('submit', formSubmitHandler);
saveBtn.addEventListener('click', save);

function closePopup() {
    popup.classList.remove('popup_opened');
}

function openPopup() {
    nameInput.value = name.textContent;
    aboutInput.value = about.textContent;
    popup.classList.add('popup_opened');
}

function formSubmitHandler(e) {
    closePopup();
    e.preventDefault();
}

function save() {
    name.textContent = nameInput.value;
    about.textContent = aboutInput.value;
}




