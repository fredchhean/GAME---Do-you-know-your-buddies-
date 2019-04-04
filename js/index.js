var gameStep = 0;
let tableau = [
    //question, response, answer1, answer2, answer3, goodAnswer
    ["My guilty pleasure song is ", "Taylor Swift - Love story", "./Images/jules.png", "./Images/fred.png", "./Images/abi.png", "./Images/fred.png"],
    ["My biggest talent is ", "floss challenging", "./Images/arnaud.png", "./Images/susan.png", "./Images/fred.png", "./Images/susan.png"],
    ["The most beautiful place I've ever been is ", "Ironhack rooftop", "./Images/abi.png", "./Images/frank.png", "./Images/thanh.png", "./Images/frank.png"],
    ["If I could eat only 3 foods for the rest of life, it would be ", "Ramen, Kebab, Pineapple", "./Images/frank.png", "./Images/yang.png", "./Images/miguel.png", "./Images/yang.png"],
    ["My biggest talent is ", "being humble, I'm so humble that people should call me the humble god", "./Images/alex.png", "./Images/yagmur.png", "./Images/miguel.png", "./Images/miguel.png"],
    ["My biggest talent is ", "turning pop songs into country songs", "./Images/fred.png", "./Images/arnaud.png", "./Images/alex.png", "./Images/alex.png"],
    ["My guilty pleasure song is ", "Britney Spears", "./Images/yagmur.png", "./Images/duc.png", "./Images/jules.png", "./Images/yagmur.png"],
    ["The most beautiful place I've ever been is ", "Venice", "./Images/paul.png", "./Images/yang.png", "./Images/thanh.png", "./Images/thanh.png"],
    ["The greatest invention of all time is ", "electric", "./Images/maya.png", "./Images/duc.png", "./Images/frank.png", "./Images/duc.png"],
    ["My biggest talent is ", "moving the ears", "./Images/maya.png", "./Images/dani.png", "./Images/mimi.png", "./Images/dani.png"],
    ["My biggest talent is ", "destroying my opponents on the football field", "./Images/arnaud.png", "./Images/chris.png", "./Images/jules.png", "./Images/jules.png"],
    ["The greatest invention of all time is ", "Tupperware", "./Images/chris.png", "./Images/maya.png", "./Images/arnaud.png", "./Images/maya.png"],
    ["The greatest invention of all time is ", "bed", "./Images/arnaud.png", "./Images/alex.png", "./Images/fred.png", "./Images/arnaud.png"],
    ["My biggest talent is ", "to become invisible", "./Images/miguel.png", "./Images/chris.png", "./Images/yagmur.png", "./Images/chris.png"],
    ["The greatest invention of all time is ", "vaccines", "./Images/dani.png", "./Images/miguel.png", "./Images/abi.png", "./Images/abi.png"],
    ["My biggest talent is ", "I know how to juggle with 3 balls !!!", "./Images/frank.png", "./Images/paul.png", "./Images/yagmur.png", "./Images/paul.png"],
    ["The most beautiful place I've ever been is ", "Monument Valley", "./Images/maya.png", "./Images/jules.png", "./Images/mimi.png", "./Images/mimi.png"],
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
    console.log(src, "src")
    const checks = 0;
    // tableau[gameStep].forEach()
    const answer = tableau[gameStep][tableau[gameStep].length - 1 ]

console.log(answer, "answer");


    if (src.includes(answer.substring(1)) === false) {
        console.log("guess again, sucka");
        window.alert("Wrong noob, go ask your friends for the good one!!!");
    } else {
        console.log("hurray !!!!");
        console.log(score);
        score.innerHTML++;
        window.alert("Goood answer, you rock!!!");    
    }
    gameStep++;
    console.log(answer)
    console.log(src.indexOf(answer))
    if (gameStep === tableau.length) {
        // if (src.indexOf(answer) === -1) {
        //     console.log("guess again, sucka");
        // } else {
        //     console.log("hurray !!!!");
        //     console.log(score);
        // }
        
        console.log("End of game");
        scoreFinal = score.innerHTML;
        score.innerHTML = "";
        alert("You score final score is " + scoreFinal + "! Refresh the page to try again");
     }    
}

// if (gameStep===tableau.length){
//     var answer1 = confirm("Try again")

// }
// // if (answer) {
// //     //some code
// // }
// // else {
// //     //some code
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






