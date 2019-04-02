// const myQuestions = create a constructor function so you can replicate the model 
class fullQst{
    contructor(qst,asw1,asw2,asw3,goodAsw){
        this.qst = qst;
        this.asw1 = asw1;
        this.asw2 = asw2;
        this.asw3 = asw3
        this.goodAsw = goodAsw;
    }
}

var q1 = new fullQst("What is your guilty pleasure song","asw1","asw2","asw3","goodAsw")
var q2 = new fullQst("What is your guilty pleasure song","asw1","asw2","asw3","goodAsw")

let array = [q1,q2];
console.log(array);
console.log(array[0][1]);
//voir comment sont stockés les var q1 et q2// FAUT LES PUT DANS DES ARRAYS

console.log(q1);
console.log(q2);


console.log("AZ");

function showResults(){

}

function changePictures(){

}

function builQuiz(){

}

function printButton(){

}
