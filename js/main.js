'use strict';

/*const form = document.querySelector('.js-add-form');
form.classList.remove('collapsed');*/

/* llamamaos al html, hay que poner siempre primero*/
const list= document.querySelector('.js-list'); 
const input_search_desc = document.querySelector('.js_in_search_desc');
const descrSearchText = input_search_desc.value;
//const addCat =  document.querySelector('.js-add');
//const ulMenu = document.querySelector(".js-new-form");
const btnAdd = document.querySelector(".js-btn-add");
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMessageError = document.querySelector('.js-label-error');
const error = document.querySelector(".js-label-error");
/*
addCat.addEventListener('click', (event) =>  {
  event.preventDefault();
  console.log('Hola');
  if (ulMenu.classList.contains('collapsed')) {
       ulMenu.classList.remove('collapsed');
} else {
     ulMenu.classList.add('collapsed');
}
});
*/
btnAdd.addEventListener('click', (event) => {
  event.preventDefault(); 
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  console.log (valueDesc, valuePhoto, valueName)
if (valueDesc === '' || valuePhoto === '' || valueName === '') {
  error.innerHTML = `¡Uy! parece que has olvidado algo`;
} else {
  error.innerHTML = `Muy bien!`; /*aquí hay que añadir los nuevos gatos*/
}
});

const newFormElement = document.querySelector('.js-new-form');
const linkNewFormElement = document.querySelector('.js-add');

function showNewCatForm() {
  newFormElement.classList.remove('collapsed');
}
function hideNewCatForm() {
  newFormElement.classList.add('collapsed');
}

linkNewFormElement.addEventListener('click', handleClickNewCatForm);

function handleClickNewCatForm(event) {
  console.log ('muy bien chicas');
  event.preventDefault();
  if (newFormElement.classList.contains('collapsed')) {
  newFormElement.classList.remove('collapsed');
}
  else {
  newFormElement.classList.add('collapsed');
  }
}

const kittenOneImage = 'https://dev.adalab.es/gato-siames.webp';
const kittenOneName = 'Anastacio';
const kittenOneDesc =
  ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenOneRace = 'Siamés';


const kittenTwoImage = 'https://dev.adalab.es/sphynx-gato.webp';
const kittenTwoName = 'Fiona';
const kittenTwoDesc =
  ' Produce fascinación y curiosidad. Exótico, raro, bello, extraño... hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';
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
              <p class="card_description">
               ${kittenOneDesc}
              </p>
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
            <p class="card_description">
               ${kittenTwoDesc}
            </p>
          </li>`;

const kittenThree = `<li class="card">
            <img
              class="card_img"
              src="${kittenThreeImage}"
              alt="maine-coon-cat"
            />
            <h3 class="card_title">${kittenThreeName}</h3>
            <h4 class="card_race">${kittenThreeRace}</h4>
            <p class="card_description">
               ${kittenThreeDesc}
            </p>
          </li>`;

/* para mostart el html siembre va al final*/
/*
list.innerHTML = kittenOne + kittenTwo + kittenThree;
*/
if( kittenOneDesc.includes(descrSearchText) ) {
   list.innerHTML= kittenOne
}

if( kittenTwoDesc.includes(descrSearchText) ) {
   list.innerHTML= kittenTwo
}

if( kittenThreeDesc.includes(descrSearchText) ) {
list.innerHTML= kittenThree
}

