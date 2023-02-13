'use strict';

const list = document.querySelector('.js-list');

const raceIput = document.querySelector('.js-type-cat');
 

const btnCancel = document.querySelector('.js-btn-cancel');

const btnAdd = document.querySelector(".js-btn-add");

const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputRace = document.querySelector('.js-input-race');
const error = document.querySelector(".js-label-error");

const plusSymbol = document.querySelector('.js-cats');
const newFormElement = document.querySelector('.js-new-form')

const kittenData_1 = {
  image: 'https://dev.adalab.es/gato-siames.webp',
  name: 'Anastacio',
  desc: ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.',
  race: 'Siamés',
};


const kittenData_2 = {
  image: 'https://dev.adalab.es/sphynx-gato.webp',
  name: 'Fiona',
  desc: 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza  gatuna que se caracteriza por la «ausencia» de pelo.',
  race: 'Sphynx',
};


const kittenData_3 = {
  image: 'https://dev.adalab.es/maine-coon-cat.webp',
  name: 'Cielo',
  desc: 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.',
  race: 'Maine Coon',
};

const kittenDataList = [kittenData_1, kittenData_2, kittenData_3];
console.log (kittenDataList);

function renderKitten(kittenData) {
    const kittenImg = kittenData.image;
    const kittenName = kittenData.name;
    const kittenDesc = kittenData.desc;
    const kittenRace = kittenData.race;
    list.innerHTML += `<li class="card">
    <article class="js-article-3">
    <img class="card_img"src="${kittenImg}" alt="siames-cat"/>
    <h3 class="card_title">${kittenName.toUpperCase()}</h3>
    <h4 class="card_race">${kittenRace}</h4>
    <p class="card_description">${kittenDesc}</p></article></li>`;
};

function renderKittenSearch(kittenData){
    const kittenImg = kittenData.image;
    const kittenName = kittenData.name;
    const kittenDesc = kittenData.desc;
    const kittenRace = kittenData.race;
    list.innerHTML += `<li class="card"><article class="js-article-3"><img    class="card_img"src="${kittenImg}" alt="siames-cat"/><h3 class="card_title">${kittenName.toUpperCase()}</h3><h4 class="card_race">${kittenRace}</h4><p class="card_description">${kittenDesc}</p></article></li>`;
};
 
function renderKitten(kittenData_1) {
  console.log('kittenData_1')
    const kittenImg = kittenData_1.image;
    const kittenName = kittenData_1.name;
    const kittenDesc = kittenData_1.desc;
    const kittenRace = kittenData_1.race;
    list.innerHTML += `<li class="card">
    <article class="js-article-3">
    <img class="card_img"src="${kittenImg}" alt="siames-cat"/>
    <h3 class="card_title">${kittenName.toUpperCase()}</h3>
    <h4 class="card_race">${kittenRace}</h4>
    <p class="card_description">${kittenDesc}</p></article></li>`;
  }

const input_search_desc = document.querySelector('.js_in_search_desc');
const btnSearch = document.querySelector('.js-btn-search');

const filterKitten = (event) => {
  event.preventDefault();
  list.innerHTML = "";
  const descrSearchText = input_search_desc.value;
  if (kittenData_1.desc.includes(descrSearchText)) {
    // list.innerHTML += kittenData_1;
    renderKittenSearch(kittenData_1);
    paragraph.innerHTML = `Tu gato es el 1`;}


  if (kittenData_2.desc.includes(descrSearchText)) {
    // list.innerHTML += kittenData_2;
    renderKittenSearch(kittenData_2);
     paragraph.innerHTML = 'Tu gato es el 2';}


  if (kittenData_3.desc.includes(descrSearchText)) {
    // list.innerHTML += kittenData_3;
    renderKittenSearch(kittenData_3);
    paragraph.innerHTML = 'Tu gato es el 3';
  }
};


btnSearch.addEventListener('click',filterKitten );

const renderRace = (race) => {
  if (race==="")
  {
    return 'Uy que despiste, no sabemos su raza';
  }
  else
  {
    return race;
  }
}

//const ulMenu = document.querySelector(".js-new-form");
//const labelMessageError = document.querySelector('.js-label-error');
//const descrSearchText = descInput.value;
//const addCat =  document.querySelector('.js-add');

//const list= document.querySelector('.js-list');

/*--------------------------------------------------------------------*/

/*const cancelNewKitten = (event) => {
  if(valueDesc !=='' || valuePhoto!== '' || valueName!=='')
  {     valueDesc === '';
        valuePhoto === ''; 
        valueName === '';
        formCollapsed.classList.add('collapsed');
    }else{
        formCollapsed.classList.remove('collapsed');
    }
};

btnCancel.addEventListener('click', cancelNewKitten);*/

/*--------------------------------------------------------------------*/

function showNewCatForm() {
  newFormElement.classList.remove('collapsed');
}
function hideNewCatForm() {
  newFormElement.classList.add('collapsed');
}

function handleClickNewCatForm(event) {
  event.preventDefault();
  console.log('Muy bien chiquis!')
  if (newFormElement.classList.contains('collapsed')) {
    showNewCatForm()
    } else {
    hideNewCatForm()  
    }
};

plusSymbol.addEventListener('click', handleClickNewCatForm);

/*------------------------------------------------------------------------------*/

function addNewKitten(event) {
  event.preventDefault();
    const valueDesc = inputDesc.value;
    const valuePhoto = inputPhoto.value;
    const valueName = inputName.value;
    const valueRace = inputRace.value; 
    if (valueDesc === '' || valuePhoto === '' || valueName === '' || valueRace === '') {
      console.log('valuePhoto, valueDesc, valueName, valueRace');
        error.innerHTML="Uy, parece que has olvidado algo!";
    } else {
      console.log('Maravilloso todo');
        list.innerHTML += renderKitten(valuePhoto, valueDesc, valueName, valueRace)
    }
};

btnAdd.addEventListener('click', addNewKitten);

