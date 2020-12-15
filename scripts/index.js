let popup = document.querySelector('.popup');
let profileButtonNode = document.querySelector('.profile__edit');
let popupCloseButtonNode = popup.querySelector('.popup__close-icon');
let popupFormNode = document.querySelector('.popup__form');
let profileNameNode = document.querySelector('.profile__name');
let popupNameInputNode = document.querySelector('.popup__name');
let profileJobNode = document.querySelector('.profile__job');
let popupJobInputNode = document.querySelector('.popup__job');
let profileAddButton = document.querySelector('.profile__add');
let popupAdd = document.querySelector('.popup-add');
let PopupAddCloseButton = document.querySelector('.popup-add__close-icon');
let popupAddFormNode = document.querySelector('.popup-add__form');
let elementsGridPlace = document.querySelector('.elements__grid');
let templateElement = document.querySelector('#elements-template');
let popupAddInputName = document.querySelector('.popup__place');
let popupAddInputLink = document.querySelector('.popup__link');
let popupFullCloseIcon = document.querySelector('.popup-full__close');
let popupFull = document.querySelector('.popup-full');

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


function renderList () {
    let listElements = initialCards.map(composeItem);

    elementsGridPlace.append(...listElements);
}


function composeItem (item) {
    let cloneTemplateElement = templateElement.content.cloneNode(true);


    let elementTitleNode = cloneTemplateElement.querySelector('.elements__title');
    let elementImage = cloneTemplateElement.querySelector('.elements__image');
    let likeCard = cloneTemplateElement.querySelector('.elements__like');

    elementTitleNode.textContent = item.name;
    elementImage.src = item.link;
    elementImage.alt = item.name;
    
    let removeButton = cloneTemplateElement.querySelector('.elements__trash');
    removeButton.addEventListener('click', removeItem);

    elementImage.addEventListener('click', function () {
        imageOpenPopup (item);
    });

    likeCard.addEventListener('click', function () {
        likeCard.classList.toggle('elements__like_active');
    });    

    return cloneTemplateElement;
}


function imageOpenPopup (item) {
    let popupPic = document.querySelector('.popup-full__image');
    let popupCaption = document.querySelector('.popup-full__caption');
    popupPic.src = item.link;
    popupCaption.textContent = item.name;
    popupPic.alt = item.name;
    imageFullOpen ();
}

function removeItem (event) {
    let targetElement = event.target;
    let targetItem = targetElement.closest('.elements__card');
    targetItem.remove();
}

function handlePopupAddOpenButtonClick() {

    popupAdd.classList.add('popup-add_opened');
}


function handlePopupAddCloseButtonClick() {

    popupAdd.classList.remove('popup-add_opened');
}


function handleHeaderButtonClick() {

    popupNameInputNode.value = profileNameNode.textContent;
    popupJobInputNode.value = profileJobNode.textContent;

    popup.classList.add('popup_opened');
}    

function handlePopupCloseButtonClick() {

    popup.classList.remove('popup_opened');
}


function formSubmitHandler (evt) {

    evt.preventDefault();

    profileJobNode.textContent = popupJobInputNode.value;
    profileNameNode.textContent = popupNameInputNode.value;

    handlePopupCloseButtonClick()
}

function AddButtonElement (evt) {
    evt.preventDefault();

    let inputNameValue = popupAddInputName.value;
    let inputLinkValue = popupAddInputLink.value;
    let newItemHtml = composeItem({name : inputNameValue, link : inputLinkValue});
    elementsGridPlace.prepend(newItemHtml);

    handlePopupAddCloseButtonClick()
}

function imageFullOpen () {
    popupFull.classList.add('popup-full_opened');
}

function imageFullClose () {
    popupFull.classList.remove('popup-full_opened');
}


profileButtonNode.addEventListener('click', handleHeaderButtonClick);
popupCloseButtonNode.addEventListener('click', handlePopupCloseButtonClick);
popupFormNode.addEventListener('submit', formSubmitHandler);
profileAddButton.addEventListener('click', handlePopupAddOpenButtonClick);
PopupAddCloseButton.addEventListener('click', handlePopupAddCloseButtonClick);
popupAddFormNode.addEventListener('submit', AddButtonElement);
popupFullCloseIcon.addEventListener('click', imageFullClose);

renderList();