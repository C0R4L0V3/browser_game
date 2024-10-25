//steps to setup:
// Make Box clickable to match color to player turn
// Clear the board after each game
// future development change to X's and O's
// future development for Winner Sign

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~CONSTANTS
const boxes = document.querySelectorAll(".box")     //<<-- selects all divs with the class "box"
const resetButton = document.querySelector("button")
const winningCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],                      //<<--- nested array of winning combos to be used down the line.
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
] 

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~STAT VARIBLES

let turnPhase = true

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~FUNCTIONS

//Would need an array function, "Handlers" to handle the winning combo array

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~EVENT LISTENERS

boxes.forEach((box) => {
    box.addEventListener('click', (event) => {
        // console.log(event.target.classList.contains("blank"))
        if(event.target.classList.contains("blank")  && turnPhase === true)  { //<<--- comapares if both statements are booleen
            console.log("banana")
            event.target.classList.replace("blank", "blue") //<<--- replaces the classlist from "blank" to "blue"
            // box.style.backgroundColor = "blue"
            turnPhase = false                     //<<-- changes the value of turn phase to false
    
        }else if(event.target.classList.contains("blank") && turnPhase === false){
            event.target.classList.replace("blank", "red")
            // color = "red"
            // box.style.backgroundColor = "red"
            turnPhase = true
        } else if (event.target.classList === "red" || event.target.classList === "blue"){ //<<-- does Null if either condition is met
        }
    })
})

   resetButton.addEventListener('click', (event) => {
        // console.log("Hi, this is a reset button!");
        location.reload()                   //<<--- learned from Glenn  -cl // **location.reload refreshes the window!
    })
 


//=============================================BAD CODE===================================================\\

// const classlist = ""

// const bgcolors = ["bisque","bisque","bisque","bisque","bisque","bisque","bisque","bisque","bisque" ]

// let round = 0;

// let isDone = true

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

//    evalColor(event)
       
       
        // console.dir(".box");
        // playerFunction(event)
    //     bluePlayer(event)
    //   redPlayer(event)  
    


