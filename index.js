let chessBoardTemp = document.querySelector(".chess");
let checkbox = document.querySelectorAll(".checkbox");
let startingScreen = document.querySelector(".startingscreen");
const allSquares = document.getElementsByClassName("chess");
flag = true;
let j = 0;
const filesNameArray = ["a", "b", "c", "d", "e", "f", "g", "h"];
// function color(){
for (let i = 0; i < 64; i++) {
    if (i % 8 == 0) {
        flag = !flag;
        j++;
    }
    if (!flag && i % 2 != 0 || flag && i % 2 == 0) {
        checkbox[i].style.setProperty("background-color", "black");
    }
    checkbox[i].setAttribute("id", filesNameArray[i%8]+j)
}

// color();
const rotateBtn = document.querySelector(".rotateBtn");
rotateBtn.addEventListener('click', () => {
    let arr = [];
    for (let i = 0; i < 64; i++) {
        arr.push(checkbox[i])
        checkbox[i].remove();
    }
    arr.reverse();
    for (let i = 0; i < 64; i++) {
        chessBoardTemp.append(arr[i]);
    }
    removeScreenAndAddBoard();
})
const whiteBox =   document.querySelector(".whiteBtn");
whiteBox.addEventListener("click",removeScreenAndAddBoard);
let chessBoard = chessBoardTemp;
chessBoardTemp.remove();
const body = document.querySelector("body");

function removeScreenAndAddBoard(){
    startingScreen.style.setProperty("opacity","0");
    startingScreen.addEventListener("transitionend", ()=>{
        startingScreen.remove();
        chessBoard= chessBoardTemp;
        body.append(chessBoard);
        chessBoardTemp.style.setProperty("opacity","1");
    })
}
const clickElements = [];
for (const x of checkbox){
    
    if(x.classList.length >1 ){
      x.addEventListener("click", function () {
       if (clickElements.length > 0){
        clickElements[0]["elem"].style.setProperty("background-color", clickElements[0]["previousBg"]);

        clickElements.length = [];
        // color();
       } 
        // console.log(clickElements);
        const bgColor = x.style.backgroundColor
        const elemCLicked = {
            "elem" : x,
            "previousBg" : bgColor
        }
        x.style.setProperty("background-color", "yellow");
        // color();
        clickElements.push(elemCLicked);
    })
}     
} 

const arrayOfPawn = [];
 
