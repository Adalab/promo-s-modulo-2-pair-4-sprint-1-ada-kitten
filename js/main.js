'use strict';

/*const form = document.querySelector('.js-add-form');
form.classList.remove('collapsed');*/

/* llamamaos al html, hay que poner siempre primero*/

/*const kittenOneImage = 'https://dev.adalab.es/gato-siames.webp';
const kittenOneName = 'Anastacio';
const kittenOneDesc = 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenOneRace = 'Siamés';


const kittenTwoImage = 'https://dev.adalab.es/sphynx-gato.webp';
const kittenTwoName = 'Fiona';
const kittenTwoDesc = 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño... hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';
const kittenTwoRace = 'Sphynx';


const kittenThreeImage = 'https://dev.adalab.es/maine-coon-cat.webp';
const kittenThreeName = 'Cielo';
const kittenThreeDesc =
  ' Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';
const kittenThreeRace = 'Maine Coon';


const kittenOne = `<li class="card">
                    <article>
                      <img
                        class="card_img"
                        src="${kittenOneImage}"
                        alt="siames-cat"
                      />
                      <h3 class="card_title">${kittenOneName}</h3>
                      <h4 class="card_race">${kittenOneRace}</h4>
                      <p class="card_description">${kittenOneDesc}</p>
                    </article>
                  </li>`;
          
const kittenTwo = `<li class="card">
                      <img
                        class="card_img"
                        src="${kittenTwoImage}"
                        alt="sphynx-cat"
                      />
                      <h3 class="card_title">${kittenTwoName}</h3>
                      <h4 class="card_race">${kittenTwoRace}</h4>
                      <p class="card_description">${kittenTwoDesc}</p>
                    </li>`;

const kittenThree = `<li class="card">
                      <img
                        class="card_img"
                        src="${kittenThreeImage}"
                        alt="maine-coon-cat"
                      />
                      <h3 class="card_title">${kittenThreeName}</h3>
                      <h4 class="card_race">${kittenThreeRace}</h4>
                      <p class="card_description">${kittenThreeDesc}</p>
                     </li>`;
*/

const kitten=document.querySelector('.js-list');

const kittenOneImg = '<img class="card_img" src="https://dev.adalab.es/gato-siames.webp" alt="gatito"/>' ;
const kittenOneName = '<h3 class="card_title">Anastacio</h3>';
const kittenOneDesc = '<p class="card_description">Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente. (Imagen no correspondiente)</p>';
const kittenOneRace = '<h4 class="card_race">Siamés</h4>';

const kittenTwoImg = '<img class="card_img"src="https://dev.adalab.es/sphynx-gato.webp"      alt="sphynx-cat"/>';
const kittenTwoName = '<h3 class="card_title">Fiona</h3>';
const kittenTwoDesc = '<p class="card_description"> elegante Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo. </p>';
const kittenTwoRace = '<h4 class="card_race">Sphynx</h4>';

const kittenThreeImg = '<img class="card_img" src="https://dev.adalab.es/maine-coon-cat.webp"   alt="maine-coon-cat" />';
const kittenThreeName = '<h3 class="card_title">Cielo</h3>';
const kittenThreeDesc = '<p lass="card_description"> Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.   </p>';
const kittenThreeRace = '<h4 class="card_race">Maine Coon</h4>';

const kittenOne = `<li>${kittenOneImg} ${kittenOneName} ${kittenOneRace} ${kittenOneDesc}</li>`;
const kittenTwo = `<li>${kittenTwoImg} ${kittenTwoName} ${kittenTwoRace} ${kittenTwoDesc}</li>`;
const kittenThree = `<li>${kittenThreeImg} ${kittenThreeName} ${kittenThreeRace} ${kittenThreeDesc}</li>`;

/*
list.innerHTML = kittenOne + kittenTwo + kittenThree;
*/

/*
const descInput = document.querySelector('.js_in_search_desc');
const descrSearchText = descInput.value;

if( kittenOneDesc.includes(descrSearchText) ) {
   list.innerHTML= kittenOne
}

if( kittenTwoDesc.includes(descrSearchText) ) {
   list.innerHTML=+ kittenTwo
}

if( kittenThreeDesc.includes(descrSearchText) ) {
list.innerHTML=+ kittenThree
}

*/

//const ulMenu = document.querySelector(".js-new-form");
//const labelMessageError = document.querySelector('.js-label-error');
//const descrSearchText = descInput.value;
//const addCat =  document.querySelector('.js-add');

const list= document.querySelector('.js-list');
const descInput = document.querySelector('.js_in_search_desc');

const btnAdd = document.querySelector(".js-btn-add");
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputRace = document.querySelector('.js-input-race');
const error = document.querySelector(".js-label-error");

const plusSymbol = document.querySelector('.js-cats');
const newFormElement = document.querySelector('.js-new-form')

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

function renderKitten() {
   list.innerHTML += `<li class="list"><p>${valuePhoto} ${valueDesc} ${valueName} ${valueName}</p></li>`
};

function addNewKitten(event) {
  event.preventDefault();
    let valueDesc = inputDesc.value;
    let valuePhoto = inputPhoto.value;
    let valueName = inputName.value;
    let valueRace = inputRace.value; 
    if (valueDesc === '' || valuePhoto === '' || valueName === '') {
        error.innerHTML="Uy, parece que has olvidado algo!";
    } else {
        renderKitten()
    }
}

btnAdd.addEventListener('click', addNewKitten);



