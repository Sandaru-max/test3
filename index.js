"use strict"
let guessedNumber=Math.trunc(Math.random()*20+1)
console.log(guessedNumber);
let score=Number(document.querySelector(".score").textContent)
//Again Button
document.querySelector(".btn_again").addEventListener('click',function(){
    
    guessedNumber=Math.trunc(Math.random()*20+1)
    console.log(guessedNumber);

    score=20;

    document.querySelector(".message").textContent="Start Guessing...."

    document.querySelector(".guess").value="";

    document.querySelector("body").style.backgroundColor="#000000"

    document.querySelector(".number").textContent="?";

    document.querySelector(".score").textContent="20"
})
//Check Button
document.querySelector(".btn_check").addEventListener('click',function(){
    let enteredNumber=Number(document.querySelector(".guess").value);
    if (enteredNumber===guessedNumber){
        document.querySelector(".message").textContent="🎉 Correct Number!!!";
        
        document.querySelector("body").style.backgroundColor="#34eb46"

        document.querySelector(".number").textContent=guessedNumber;

        let highscore=Number(document.querySelector(".highscore").textContent);
        if (score>highscore) {
            highscore=score;
            document.querySelector(".highscore").textContent=highscore
        } 

    }else if(enteredNumber>guessedNumber){
        document.querySelector(".message").textContent="🤔 oops try lower number!!!"
        score--;
        if(score>0){
            document.querySelector(".score").textContent=score;}
        else{
            document.querySelector(".message").textContent="😓 you lose the game!!!"  
        }
    }else if(enteredNumber<guessedNumber){
        document.querySelector(".message").textContent="🙃 No try higher number!!!"
        score--;
        if(score>0){
            document.querySelector(".score").textContent=score;}
        else{
            document.querySelector(".message").textContent="😓 you lose the game!!!"  
        }

    }else{
        document.querySelector(".message").textContent="⛔ Enter only numbers!!!"}
})

