function active(nouveau){
    const active = document.querySelector('.active');
    active.classList.remove('active');
    nouveau.classList.add('active');
}

//Activer accueil

const accueilButton = document.querySelector('#accueilButton');
accueilButton.addEventListener('click', (event) => {
    event.preventDefault();

    const accueil = document.querySelector('#main');
    active(accueil);
})

//Activer photos

const photoButton = document.querySelector('#photosButton');
photoButton.addEventListener('click', (event) => {
    event.preventDefault();

    const photo = document.querySelector('#photos');
    active(photo);
})

//Hommes

const photosHomme = ['h1.jpg', 'h2.jpg', 'h3.jpg'];
let idPhotosHommes = 0;

function nextHomme(event){
    event.preventDefault();
    idPhotosHommes++;
    idPhotosHommes = idPhotosHommes % photosHomme.length;

    const selectHomme = document.querySelector('#homme img');
    selectHomme.setAttribute('src', './images/' + photosHomme[idPhotosHommes]);
}

const nextHommeButton = document.querySelector('#homme button');
nextHommeButton.addEventListener('click', nextHomme);


//Femmes

const photosFemme = ['f1.jpg', 'f2.jpg', 'f3.jpg'];
let idPhotosFemme = 0;

function nextFemme(event){
    event.preventDefault();
    idPhotosFemme++;
    idPhotosFemme = idPhotosFemme % photosFemme.length;

    const selectFemme = document.querySelector('#femme img');
    selectFemme.setAttribute('src', './images/' + photosFemme[idPhotosFemme]);
}

const nextFemmeButton = document.querySelector('#femme button');
nextFemmeButton.addEventListener('click', nextFemme);