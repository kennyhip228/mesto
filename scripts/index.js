let popup = document.querySelector('.popup');
let profileButtonNode = document.querySelector('.profile__edit');
let popupCloseButtonNode = popup.querySelector('.popup__close-icon');
let popupFormNode = document.querySelector('.popup__form');
let profileNameNode = document.querySelector('.profile__name');
let popupNameInputNode = document.querySelector('.popup__name');
let profileJobNode = document.querySelector('.profile__job');
let popupJobInputNode = document.querySelector('.popup__job');


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

profileButtonNode.addEventListener('click', handleHeaderButtonClick);
popupCloseButtonNode.addEventListener('click', handlePopupCloseButtonClick);
popupFormNode.addEventListener('submit', formSubmitHandler);

