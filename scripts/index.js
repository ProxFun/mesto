const editPopup = document.querySelector('.popup_edit-profile');
const addPopup = document.querySelector('.popup_add-card');
const editPopupForm = editPopup.querySelector('.popup__form');
const addPopupForm = addPopup.querySelector('.popup__form');
const name = document.querySelector('.profile__title');
const about = document.querySelector('.profile__subtitle');
const closePopupBtns = document.querySelectorAll('.popup__btn-exit');
const editBtn = document.querySelector('.profile__edit');
const nameInput = document.querySelector('#name');
const aboutInput = document.querySelector('#about');
const cardSection = document.querySelector('.places');
const cardTemplate = document.querySelector('#card-template').content;
const imagePopup = document.querySelector('.popup_image');
const addCardBtn = document.querySelector('.profile__add');

function toggleLikeBtn(event) {
    event.target.classList.toggle('places__like-btn_active');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function openImagePopup(popup) {
    const popupImg = popup.querySelector('.popup__image');
    const popupParagraph = popup.querySelector('.popup__image-paragraph');
    const imgSrcValue = event.target.getAttribute('src');
    const imgAltValue = event.target.getAttribute('alt');
    popupParagraph.innerText = imgAltValue;
    popup.classList.add('popup_opened');
    popupImg.setAttribute('src', imgSrcValue);
    popupImg.setAttribute('alt', imgAltValue);
    openPopup(popup);
}

function editFormSubmitHandler() {
    event.preventDefault();
    name.textContent = nameInput.value;
    about.textContent = aboutInput.value;
    closePopup(editPopup);
}

function addFormSubmitHandler() {
    event.preventDefault();
    const imgSrc = addPopup.querySelector('#cardSrc').value;
    const imgName = addPopup.querySelector('#cardName').value;
    const cardData = {src : imgSrc, name : imgName};
    addCard(cardData);
    addPopupForm.reset();
    closePopup(addPopup);
}

function openProfilePopup() {
    nameInput.value = name.textContent;
    aboutInput.value = about.textContent;
    openPopup(editPopup);
}

function removeCard() {
    event.target.closest('.places__element').remove();
}

function createCard(cardData) {
    const newCard = cardTemplate.cloneNode(true);
    const newCardImg = newCard.querySelector('.places__image');
    newCardImg.setAttribute('src', cardData.src);
    newCardImg.setAttribute('alt', cardData.name);
    newCard.querySelector('.places__image-title').innerText = cardData.name;
    newCard.querySelector('.places__trash-can').addEventListener('click', removeCard);
    newCardImg.addEventListener('click', () => openImagePopup(imagePopup));
    return newCard;
}

function addCard(cardData) {
    cardSection.prepend(createCard(cardData));
}

window.onload = () => {
    initialCards.forEach((item) => {
        addCard({src : item.link, name : item.name});
    });
}

closePopupBtns.forEach((closeBtn) => {
    const popup = closeBtn.closest('.popup');
    closeBtn.addEventListener('click', () => closePopup(popup));
});

editBtn.addEventListener('click', () => openProfilePopup());
editPopupForm.addEventListener('submit', () => editFormSubmitHandler());
addPopupForm.addEventListener('submit', () => addFormSubmitHandler());
addCardBtn.addEventListener('click', () => openPopup(addPopup));