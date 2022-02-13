//Ajout de la fenêtre à ouvrir

var modal = document.querySelector(".modal");
var test = document.querySelector(".test");
var trigger = document.querySelector(".Feedlive_button");
var closeButton = document.querySelector(".close-button");

var happySmiley = document.querySelector(".feedlive_happy");
var NeutralSmiley = document.querySelector(".feedlive_neutral");
var SadSmiley = document.querySelector(".feedlive_sad");

trigger.addEventListener("click", toggleModal);
happySmiley.addEventListener("click", toggleModal);
NeutralSmiley.addEventListener("click", toggleTest);
window.addEventListener("click", windowOnClick);
window.addEventListener("click", TestEvent);

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function toggleTest() {
    test.classList.toggle("show-test");
}

function windowOnClick(event) {
    if (event.target === modal) {
    toggleModal();
    }
}

function TestEvent(event) {
    if (event.target === test) {
    toggletest();
    }
}

//Ajout de la partie Input

function othername() {
    var input = document.getElementById("userInput").value;
    console.log(input)
}

console.log(input);

//Compteur de clicks Heureux

var clickHappy = 0;

function addUpHappy(){
    ++clickHappy;
    console.log("Happy = " + clickHappy);
}

//Compteur de clicks Neutre

var clickNeutral = 0;

function addUpNeutral(){
    ++clickNeutral;
    console.log("Neutre = " + clickNeutral);
}

//Compteur de clicks Sad

var clickSad = 0;

function addUpSad(){
    ++clickSad;
    console.log("Sad = " + clickSad);
}


