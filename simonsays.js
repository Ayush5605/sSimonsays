let gameseq=[];
let userseq=[];

let btns=["red","yellow","green","blue"];


let started=false;
let level=0;

let h2=document.querySelector("h2");


document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game has been started");

        started=true;

        levelup();

    }


});

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;


    let randomindex=Math.floor(Math.random()*3);
    let randcolor=btns[randomindex];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);

    gameflash(randbtn);
};

function checkans(idx){
   

    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,700);
            
        }

    }
    else{
       h2.innerHTML=`Game over! Your score was <b> ${level} </b> <br>press any key to start again`;
       document.querySelector("body").style.backgroundColor="red";
       setTimeout(function (){
        document.querySelector("body").style.backgroundColor="white";
       },150);
       reset();
    }



}

function gameflash(btn){
    btn.classList.add("gameflash");

    setTimeout(function(){
        btn.classList.remove("gameflash");
    },300);
}

function userflash(btn){
    btn.classList.add("userflash");

    setTimeout(function(){
        btn.classList.remove("userflash");
    },300);
}




function btnPress(){
    let btn=this;
    userflash(btn);

    let usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length-1);


}

let allBtns= document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    userseq=[];
    gameseq=[];
    level=0;
}
