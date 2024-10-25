//steps to setup:
// ✔ 1. Make Box clickable to match color to player turn
// ✔ 2. Clear the board after each game
// ✔ 3. Future development change to X's and O's     
//   4. Future development for game status; display turn phase, game status

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

boxes.forEach((box) => {                //<<-- forEach loop to go through div box array
    box.addEventListener('click', (event) => {      //<<--- eventListenr that check if each box is clicked
        // console.log(event.target.classList.contains("blank"))
        if(event.target.classList.contains("blank")  && turnPhase === true)  { //<<--- comapares if both statements are booleen - CL
            console.log("banana")
            event.target.classList.replace("blank", "blue") //<<--- replaces the classlist from "blank" to "blue" -Cl
            event.target.innerText = "X"  //<<--- changed from changing the entire dix box blue to a blue "x" text -CL
            // box.style.backgroundColor = "blue"
            turnPhase = false        //<<-- changes the value of turn phase to false -CL
    
        }else if(event.target.classList.contains("blank") && turnPhase === false){
            event.target.classList.replace("blank", "red")
            event.target.innerText = "O" //<<--- changed from changing the entire div box blue to a blue "o" text - CL
            // color = "red"
            // box.style.backgroundColor = "red"
            turnPhase = true
        } else if (event.target.classList === "red" || event.target.classList === "blue"){ //<<-- does Null if either condition is met -CL
        }
    })
})

   resetButton.addEventListener('click', (event) => {
        // console.log("Hi, this is a reset button!");
        location.reload()    //<<--- learned from Glenn  -cl // **location.reload refreshes the window! -CL
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
    


