


let tableau = [
    ["My biggest talent is ","floss challenging","./Images/arnaud.png","./Images/susan.png","./Images/susan.png","./Images/susan.png"],
    ["If I could eat only 3 foods for the rest of life, it would be ","Ramen, Kebab, Pineapple","/Images/arnaud.png","/Images/susan.png","/Images/arnaud.png","./Images/susan.png"],
    ["My biggest talent is ","Being humble, I'm so humble that people should call me the humble god","./Images/susan.png","/Images/arnaud.png","/Images/arnaud.png","/Images/arnaud.png"],
    // ["My biggest talent is ","turning pop songs into country songs","./Images/fred.png","./Images/arnaud.png","./Images/alex.png","./Images/alex.png"],
    // ["My guilty pleasure song is XXX","asw1","asw2","asw3","asw3"],  
];

// ///Set the first page
//OOOOOOOOOOOOOKKKK only thing is to define i and make the loop
function printImage(i){
    let image1 = document.getElementById("answer1");
    image1.src = tableau[0][2];
    let image2 = document.getElementById("answer2");
    image2.src = tableau[0][3];
    let image3 = document.getElementById("answer3");
    image3.src = tableau[0][4];
    console.log(tableau[0][2])
    console.log("dddddddd");
    
}

function printTheQuote(){
    let element = document.getElementById("quote");
    console.log(element.innerHTML);
    console.log(tableau[0][0]);
     element.innerHTML = tableau[0][0] + tableau[0][1]
}



function setStep(i){
    var nextButton = document.getElementsByClassName("row");
    nextButton[0].addEventListener("click", printImage(i));
     nextButton[0].addEventListener("click", printTheQuote(i));
}
setStep();

var response = document.querySelectorAll(".answer");

var selectedResponse = response.forEach(el => {

  return   el.addEventListener("click", function () {


    //check to see if the answer is correct
       return console.log("youhou", el.src)



       //set time out, increase array index by 1 
       //check to see if the array is empty (array.length)


    })
})





console.log(selectedResponse);

// var nextButton = document.getElementsByClassName("row");
// nextButton[0].addEventListener("click", printImage);
// nextButton[0].addEventListener("click", printTheQuote);

// }
// const nextButton = document.getElementsByClassName("row");
// // function(){
// console.log(nextButton);

// nextButton[0].addEventListener("click", printImage);
// nextButton[0].addEventListener("click", changeAnswers);
// 


///////Déclaration des variables à utiliser answer photo
// var answer1 = document.getElementById('answer1');
// var answer2 = document.getElementById('answer2');
// var answer3 = document.getElementById('answer3');
// var score = document.getElementById('score');
// var goodAsw = tableau[i][5];



///Get the button selected by the player
// var gameButton = document.querySelectorAll(".game-btn");
// for(let i =0; i<gameButton.length;i++){
//     gameButton[i].onclick = getId
// }
// // gameButton.onclick = getId();
// function getId() {
//     console.log(this.childNodes[0].id)
//     var userAsw = this.childNodes[0].id
// }

///OOOOOOOOOOK only thing is to define i and make the loop



// console.log(tableau[2][2]);

// var nextButton = document.getElementsByClassName("row");
// // // function(){
// console.log(nextButton);
// nextButton[0].addEventListener("click", printImage);
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
