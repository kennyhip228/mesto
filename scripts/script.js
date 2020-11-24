const popup = document.querySelector('.popup');
const profileButtonNode = document.querySelector('.profile__edit');
const popupCloseButtonNode = popup.querySelector('.popup__close-icon');
const popupSaveButtonNode = popup.querySelector('.popup__save');

profileButtonNode.addEventListener('click', handleHeaderButtonClick);
popupCloseButtonNode.addEventListener('click', handlePopupCloseButtonClick);
popupSaveButtonNode.addEventListener('click', handlePopupCloseButtonClick);


function handleHeaderButtonClick() {

    popup.classList.add('popup_opened');

    popupNameInputNode.value = profileNameNode.textContent;
    popupJobInputNode.value = profileJobNode.textContent;

}    

function handlePopupCloseButtonClick() {

    popup.classList.remove('popup_opened');
}

const popupFormNode = document.querySelector('.popup__form');

popupFormNode.addEventListener('submit', formSubmitHandler);

const profileNameNode = document.querySelector('.profile__name');
const popupNameInputNode = document.querySelector('.popup__name');
const profileJobNode = document.querySelector('.profile__job');
const popupJobInputNode = document.querySelector('.popup__job')

function formSubmitHandler (evt) {

    evt.preventDefault();

    profileJobNode.textContent = popupJobInputNode.value;
    profileNameNode.textContent = popupNameInputNode.value;

}

popupNameInputNode.value = profileNameNode.textContent;
popupJobInputNode.value = profileJobNode.textContent;

