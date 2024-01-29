let gameSeq = [];
let userSeq  = [];
let btns = ["yellow","red","purple","green"];
let level =0;
let max = 0 ;
let started = false;
let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game started");
        started  =  true;
        levelUp();
    }
   
})


function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let ranIdx = Math.floor(Math.random()*3);// 0 se lkr 3 ki range m koi bhi random index aa jayegaphir use hum rancolor wale
    let ranColor = btns[ranIdx];//array m jakr choose kr lenge for ex jaise 2 aaya toh ranIdx m 2 aa gya ab hum btns of [2] p chale gye
    let ranBtn = document.querySelector(`.${ranColor}`);
    // console.log(ranIdx);
    // console.log(ranBtn);
    // console.log(ranColor);//or wha 2 index p kya h wha h purple toh ranColor m aa gya purple ab maine use btnFlash m
    gameSeq.push(ranColor);
    console.log(gameSeq);  
    gameFlash(ranBtn); //de dia ki is ko flash hona  h 
}

function checkAns(idx)
{
    console.log(`Level ${level}`);
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
           setTimeout(levelUp,1000) ;
        }
    }
    else{
        h2.innerHTML = `Game Over ! Your score was <b>${level}</b> <br>Press any key to start`;
      //  max = Math.max(level,max);
       // console.log(max);
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white"
        },150);
        reset();
        }
}
function btnPress(){
    let btn = this;
    //console.log(btn);
    userFlash(btn);
    let userColor = btn.getAttribute("id");
   //console.log(userColor);
   userSeq.push(userColor);
    checkAns(userSeq.length -1);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },250)
}


let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250)
}
 
function reset(){
    started = false;
    level =0 ;
    gameSeq = [];
    userSeq = [];
}


