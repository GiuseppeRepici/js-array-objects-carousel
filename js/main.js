const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let x=0;

const image1 = document.getElementById("imgcontainer");
const stampaText = document.querySelector(".textcontainer");
const imagelaterali = document.getElementById("containerlaterale");
const btnGiu = document.getElementById("btn2");
const btnSu = document.getElementById("btn1");

images.forEach(function (el) {
    image1.innerHTML += `<img src="${el.image}" class="image" id="imgs" >`;
    imagelaterali.innerHTML += `<img src="${el.image}" class="imagelaterali" id="imgslaterali" >`;
    stampaText.innerHTML += `<div class="test"> <h1 >${el.title} </h1> <p>${el.text}</p> </div>`
})

const oldImg = document.querySelector(`.containerimage :nth-child(${(x + 1)})`);
const oldStampaText = document.querySelector(`.textcontainer :nth-child(${(x + 1)})`);
oldImg.classList.add( "active" );
oldStampaText.classList.add( "active" );
const oldImgLaterale = document.querySelector(`.container-laterale :nth-child(${(x + 1)})`);
oldImgLaterale.classList.add( "opac" );

btnGiu.addEventListener("click" , 
function (){
    
    // x è il valore vecchio
    // es. vale x = 0
    // è l'indice dlel'immagine che devi cancellare
    const oldImg = document.querySelector(`.containerimage :nth-child(${x + 1})`);
    oldImg.classList.remove( "active" );
    const oldStampaText = document.querySelector(`.textcontainer :nth-child(${(x + 1)})`);
    oldStampaText.classList.remove( "active" );
    const oldImgLaterale = document.querySelector(`.container-laterale :nth-child(${(x + 1)})`);
    oldImgLaterale.classList.remove( "opac" );

    // x = 1
    x++;
    if(x> (images.length - 1) ){
        x = 0;
    } else{
        const newImg = document.querySelector(`.containerimage :nth-child(${x + 1})`);
        newImg.classList.add( "active" );
        const newStampaText = document.querySelector(`.textcontainer:nth-child(${x + 1})`);
        newStampaText.classList.add( "active" );
        const newImgLaterale = document.querySelector(`.container-laterale :nth-child(${(x + 1)})`);
        newImgLaterale.classList.add( "opac" );
    }
})

btnSu.addEventListener("click" , 
function (){
    const oldImg = document.querySelector(`.containerimage :nth-child(${x + 1})`);
    oldImg.classList.remove( "active" );
    const oldStampaText = document.querySelector(`.textcontainer :nth-child(${(x + 1)})`);
    oldStampaText.classList.remove( "active" );
    const oldImgLaterale = document.querySelector(`.container-laterale :nth-child(${(x + 1)})`);
    oldImgLaterale.classList.remove( "opac" );
    x--;
    if(x<0){
        x=4
    }
    const newImg = document.querySelector(`.containerimage :nth-child(${x + 1})`);
    newImg.classList.add( "active" );
    const newStampaText = document.querySelector(`.textcontainer :nth-child(${x + 1})`);
    newStampaText.classList.add( "active" );
    const newImgLaterale = document.querySelector(`.container-laterale :nth-child(${(x + 1)})`);
    newImgLaterale.classList.add( "opac" );
})

