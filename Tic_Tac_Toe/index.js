let boxes=document.querySelectorAll(".game");
let resetgame=document.querySelector("#reset");
let newbtn=document.querySelector(".new-button");
let msgcont=document.querySelector(".msgcont");
let msg=document.querySelector("#msg");

let turn0 = true;

const winpatterns=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


boxes.forEach((boxes) => {
    boxes.addEventListener("click",()=>{
        console.log("Clicked");
        if(turn0){
        boxes.innerText="O"
        turn0=false;
        }
        else{
            boxes.innerText="X"
            turn0=true;
        }
        boxes.disabled=true;
        checkwinner();
    });
});

const disableboxes=()=>{
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

const showwinner=(winner)=>{
    msg.innerText=`congradulations,Winner is ${winner}`;
    msgcont.classList.remove("hide");
    disableboxes();
}


const checkwinner=()=>{
    for(pattern of winpatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);

        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                console.log("Winner");

                showwinner(pos1);
            }
        }
    }    
};


const resetGame=()=>{
    turn0=true;
    enableboxes();
    msgcont.classList.add("hide");
};

newbtn.addEventListener("click",resetGame);
resetgame.addEventListener("click",resetGame)

// code end