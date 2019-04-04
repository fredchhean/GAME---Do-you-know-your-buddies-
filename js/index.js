var gameStep = 0;

let tableau = [
    //question, response, answer1, answer2, answer3, goodAnswer
    ["My biggest talent is ", "floss challenging", "/Images/arnaud.png", "/Images/susan.png", "/Images/susan.png", "/Images/susan.png"],
    ["If I could eat only 3 foods for the rest of life, it would be ", "Ramen, Kebab, Pineapple", "/Images/arnaud.png", "/Images/susan.png", "/Images/arnaud.png", "/Images/susan.png"],
    ["My biggest talent is ", "Being humble, I'm so humble that people should call me the humble god", "./Images/susan.png", "/Images/arnaud.png", "/Images/arnaud.png", "/Images/arnaud.png"],
 
];

// ///Set the first page
//----------- it will put the info of what images you have to print
function printImage() {
    let image1 = document.getElementById("answer1");
    image1.src = tableau[gameStep][2];
    let image2 = document.getElementById("answer2");
    image2.src = tableau[gameStep][3];
    let image3 = document.getElementById("answer3");
    image3.src = tableau[gameStep][4];
    // console.log(tableau[gameStep][2])
    // console.log("dddddddd");
}

//----------------- ok it will print the quote that you have to print 
function printTheQuote() {
    let element = document.getElementById("quote");
    // console.log(element.innerHTML);
    // console.log(tableau[gameStep][0]);
    element.innerHTML = tableau[gameStep][0] + tableau[gameStep][1]
}

//--------- Ok it will makes the step for going to the next
function setup() {
    var nextButton = document.querySelector(".row");
    nextButton.addEventListener("click", function() {
        printImage();
        printTheQuote();
    });
}
setup();
printImage();
printTheQuote();
// click on the person 


var score = document.getElementById('score');
console.log(score, "score")

// // function updateScore(){
// //     if(var userAsw = tableau[a][5]) {
// //     score += 1
// // } 
// //     else {
// //     score = score;
// // }
// // }

function checkAnswer(src) {
    console.log(src)
    const checks = 0;
    // tableau[gameStep].forEach()
    const answer = tableau[gameStep][tableau[gameStep].length - 1 ];
    if (src.indexOf(answer) === -1) {
        console.log("guess again, sucka");
    } else {
        console.log("hurray !!!!");
        console.log(score);
        score.innerHTML++
    }
    gameStep++;
    if (gameStep === tableau.length) {
        if (src.indexOf(answer) === -1) {
            console.log("guess again, sucka");
        } else {
            console.log("hurray !!!!");
            console.log(score);
            score.innerHTML++
        }
        console.log("endgame");
        gameStep = 0;
        alert("yayayaya fin match")
        
    }
    console.log(answer)
    console.log(src.indexOf(answer))
}

// var test = ["./Images/susan.png"]

// var testResponse = "./Images/susan.png"

// if (test[0].includes(testResponse)) {
//     console.log("yes")
//   // console.log(score.innerHTML);
//    score.innerHTML++
    
//     console.log(score)
// } else {
//     console.log("no")
// }


// -------- TEST INCLUDES -------- 
// ---------- SCORE ------------

// var score = document.getElementById('score');
// console.log(score, "score")





// // function updateScore(){
// //     if(var userAsw = tableau[a][5]) {
// //     score += 1
// // } 
// //     else {
// //     score = score;
// // }
// // }


// var test = ["./Images/susan.png"]

// var testResponse = "./Images/susan.png"

// if (test[0].includes(testResponse)) {
//     console.log("yes")
//   // console.log(score.innerHTML);
//    score.innerHTML++
    
//     console.log(score)
// } else {
//     console.log("no")
// }




// ----------Get the button selected by the player ------

var response = document.querySelectorAll(".answer");
console.log(response, "here are the responses");
var test;
// the one the user selected
response.forEach(el => {
    // for each button, add the on click event listener
    el.addEventListener("click", function () {

        //check to see if the answer is correct
        // console.log("youhou", el.src)
        checkAnswer(el.src.trim())

        //set time out, increase array index by 1 
        //check to see if the array is empty (array.length)
    })

})


// var goodAsw = tableau[i][5];

// -------- TEST INCLUDES -------- 
// ---------- SCORE ------------

var score = document.getElementById('score');
console.log(score, "score")





// function updateScore(){
//     if(var userAsw = tableau[a][5]) {
//     score += 1
// } 
//     else {
//     score = score;
// }
// }






