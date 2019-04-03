


let tableau = [
    ["My biggest talent is ","floss challenging","./Images/arnaud.png","./Images/susan.png","./Images/fred.png","./Images/susan.png"],
    ["If I could eat only 3 foods for the rest of life, it would be ","Ramen, Kebab, Pineapple","Ramen, Kebab, Pineapple","./Images/yang.png","./Images/miguel.png","./Images/yang.png"],
    ["MMy biggest talent is ","Being humble, I'm so humble that people should call me the humble god","./Images/alex.png","./Images/yagmur.png","./Images/miguel.png","./Images/miguel.png"],
    ["My biggest talent is ","turning pop songs into country songs","./Images/fred.png","./Images/arnaud.png","./Images/alex.png","./Images/alex.png"],
    ["My guilty pleasure song is XXX","asw1","asw2","asw3","asw3"],  
];

// ///Set the first page
function setStep(){
    var nextButton = document.getElementsByClassName("row");
    nextButton[0].addEventListener("click", printAnswers);
    nextButton[0].addEventListener("click", printTheQuote);
}
setStep();

// }
// const nextButton = document.getElementsByClassName("row");
// // function(){
// console.log(nextButton);

// nextButton[0].addEventListener("click", printAnswers);
// nextButton[0].addEventListener("click", changeAnswers);
// }


///////Déclaration des variables à utiliser answer photo
// var answer1 = document.getElementById('answer1');
// var answer2 = document.getElementById('answer2');
// var answer3 = document.getElementById('answer3');
// var score = document.getElementById('score');
// var goodAsw = tableau[i][5];



///Get the button selected by the player
var gameButton = document.querySelectorAll(".game-btn");
for(let i =0; i<gameButton.length;i++){
    gameButton[i].onclick = getId
}
// gameButton.onclick = getId();
function getId() {
    console.log(this.childNodes[0].id)
    var userAsw = this.childNodes[0].id
}

///OOOOOOOOOOK only thing is to define i and make the loop
function printTheQuote(){
    let element = document.getElementById("quote");
    console.log(element);
    element.innerHTML = tableau[1][0] + tableau [1][1];
}

//OOOOOOOOOOOOOKKKK only thing is to define i and make the loop
function printAnswers(){
    let image1 = document.getElementById("answer1");
    image1.src = tableau[1][2];
    let image2 = document.getElementById("answer2");
    image2.src = tableau[1][2];
    let image3 = document.getElementById("answer3");
    image3.src = tableau[1][2];
}

// var nextButton = document.getElementsByClassName("row");
// // function(){
// console.log(nextButton);
// nextButton[0].addEventListener("click", printAnswers);
// nextButton[0].addEventListener("click", printTheQuote);

// function updateScore(){
//     if(var userAsw = tableau[a][6]) {
//     score += 1
// } 
//     else {
//     score = score;
// }
// }


// //GOTONEXTSLIDE
// const nextButton = document.getElementById("answer1");
// nextButton.addEventListener("click", changeAnswers);

// //     })
// // }
// ///

// var btn = document.querySelector('input');



// //voir comment sont stockés les var q1 et q2// FAUT LES PUT DANS DES ARRAYS

// console.log(q1);
// console.log(q2);


// console.log("AZ");

// function showResults(){

// }

// function changePictures(){

// }

// function builQuiz(){

// }

// function printButton(){

// }
