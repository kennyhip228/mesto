let popup = document.querySelector('.popup');
let profileButtonNode = document.querySelector('.profile__edit');
let popupCloseButtonNode = popup.querySelector('.popup__close-icon');
let popupSaveButtonNode = popup.querySelector('.popup__save');
let popupFormNode = document.querySelector('.popup__form');
let profileNameNode = document.querySelector('.profile__name');
let popupNameInputNode = document.querySelector('.popup__name');
let profileJobNode = document.querySelector('.profile__job');
let popupJobInputNode = document.querySelector('.popup__job');


function handleHeaderButtonClick() {

    popup.classList.add('popup_opened');

    popupNameInputNode.value = profileNameNode.textContent;
    popupJobInputNode.value = profileJobNode.textContent;

}    

function handlePopupCloseButtonClick() {

    popup.classList.remove('popup_opened');
}


function formSubmitHandler (evt) {

    evt.preventDefault();

    profileJobNode.textContent = popupJobInputNode.value;
    profileNameNode.textContent = popupNameInputNode.value;

}

profileButtonNode.addEventListener('click', handleHeaderButtonClick);
popupCloseButtonNode.addEventListener('click', handlePopupCloseButtonClick);
popupSaveButtonNode.addEventListener('click', handlePopupCloseButtonClick);
popupFormNode.addEventListener('submit', formSubmitHandler);

