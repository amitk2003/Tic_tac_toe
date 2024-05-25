let boxes=document.querySelectorAll('.box1');
let resetbtn=document.querySelector('#resetbtn');
let turn0=true; // playerx and player0
let patternmatched=true;
let new_game=document.querySelector("#new-game");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
const winSound = document.getElementById("winSound");
const startSound = document.getElementById("startSound");

const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box1)=>{
    box1.addEventListener("click",()=>{
        if(turn0){ // player0
            box1.innerHTML="0";
            turn0=false;
        }
        else{ // player x
            box1.innerText="X";
            turn0=true;
        }
        box1.disabled= true;
        checkwinner();
    });
   
});

const resetgame=()=>{
    turn0=true;
    enableboxes();
    msgcontainer.classList.add("hide");
    startSound.play();
}
const disabledBoxes=()=>{
for(let box of boxes){
    box.disabled=true;
}
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }  
}
const showWinner= (winner)=>{
msg.innerText=`congratulations, Winner is ${winner}`;
msgcontainer.classList.remove("hide");
disabledBoxes();
winSound.play();

};
const checkwinner=()=>{
    for( let pattern of winpatterns){
     let pos1=boxes[pattern[0]].innerText;
     let pos2=boxes[pattern[1]].innerText;
     let pos3=boxes[pattern[2]].innerText;
     if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1===pos2 && pos2===pos3){
            showWinner(pos1);
        }
        // else if(pos1!=pos2 && pos2!=pos3){
        //     msg.innerText="Game draw";
        // }
     }
    }
};
new_game.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
// startSound.play();