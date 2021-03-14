const editPopup = document.querySelector('.popup');
const addPopup = document.querySelector('.popup_add-card');
const popups = document.querySelectorAll('.popup');
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
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

function toggleLikeBtn(event) {
    event.target.classList.toggle('places__like-btn_active');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

function openPopup(popup) {
    if (popup.classList.contains('popup_image')) {
        console.log(this.event.target)
        let popupImg = popup.querySelector('.popup__image');
        let imgSrcValue = this.event.target.getAttribute('src');
        let imgAltValue = this.event.target.getAttribute('alt');
        console.log(imgSrcValue)
        popup.classList.add('popup_opened');
        popupImg.setAttribute('src', imgSrcValue);
        popupImg.setAttribute('alt', imgAltValue);
        return 0;
    }
    popup.classList.add('popup_opened');
}

function editFormSubmitHandler(popup) {
    this.event.preventDefault();
    name.textContent = nameInput.value;
    about.textContent = aboutInput.value;
    closePopup(popup);
}

function addFormSubmitHandler(popup) {
    this.event.preventDefault();
    let imgSrc = popup.querySelector('#cardSrc').value;
    let imgName = popup.querySelector('#cardName').value;
    addCard(imgSrc, imgName);
    closePopup(popup);
}

function removeCard() {
    this.parentNode.remove();
}


function addCard(link, name) {
    let newCard = cardTemplate.cloneNode(true);
    let newCardImg = newCard.querySelector('.places__image');
    newCardImg.setAttribute('src', link);
    newCardImg.setAttribute('alt', name);
    newCard.querySelector('.places__image-title').innerText = name;
    newCard.querySelector('.places__trash-can').addEventListener('click', removeCard);
    newCardImg.addEventListener('click', () => openPopup(imagePopup));
    cardSection.prepend(newCard);
}

window.onload = () => {
    initialCards.forEach((item) => {
        addCard(item.link, item.name);
    });
    nameInput.value = name.textContent;
    aboutInput.value = about.textContent;
}

closePopupBtns.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () =>
        popups.forEach((popup) =>
            closePopup(popup)));
});

editBtn.addEventListener('click', () => openPopup(editPopup));
editPopupForm.addEventListener('submit', () => editFormSubmitHandler(editPopup));
addPopupForm.addEventListener('submit', () => addFormSubmitHandler(addPopup));
addCardBtn.addEventListener('click', () => openPopup(addPopup));