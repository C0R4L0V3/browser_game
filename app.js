//steps to setup:
// Make Box clickable to match color to player turn
// Clear the board after each game
// future development change to X's and O's
// future development for Winner Sign

//Const's
const boxes = document.querySelectorAll(".box")
const resetButton = document.querySelector("button")
const winningCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
] 
const bgcolors = ["bisque","bisque","bisque","bisque","bisque","bisque","bisque","bisque","bisque" ]

// let isDone = true
let blueTurn = true
// let redturn =true

// const bluePlayer = (event) => {
//     event.target.style.backgroundColor='Blue'
// }
// const redPlayer = (event) => {
//     event.target.style.backgroundColor='Red'
// }

// const playerFunction = (event) => {
//     do {
//         redPlayer(event);
//         bluePlayer(event);
//         console.log(event.target.value);
        
//         isDone = false
//     }while(isDone)
  
// }
// const evalColor = (event) => //{
//     boxes.forEach ((box) => //{
    // if(box.style.backgroundColor ==="bisque" && blueturn === true) {
    //     box.style.backgroundColor="blue" 
    //     blueturn=false
    // }else{
    //     box.style.backgroundColor ="red"
    //     blueturn=true
    // }
// })
// }

//eventlistener
//***********************************
boxes.forEach((box) => {
        box.addEventListener('click', (event) => {
            for(let i = 0; i<= bgcolors.length; i++){
            if(i === "bisque" && blueTurn === true) {
                i = "blue"
                box.style.backgroundColor = i
                blueTurn = false
            }else{
                i = "red"
                box.style.backgroundColor = i
                blueTurn = true
            }
        }
        })
    
    });
        resetButton.addEventListener('click', (event) => {
            // console.log("Hi, this is a reset button!");
            boxes.forEach((box) => {
                box.style.backgroundColor=" bisque"; 
            })
        })
        
        

//    evalColor(event)
       
       
        // console.dir(".box");
        // playerFunction(event)
    //     bluePlayer(event)
    //   redPlayer(event)  
    


