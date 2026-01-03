let cells=document.querySelectorAll(".btn");

let resultHeading = document.querySelector("#resultText");
                    
let resetBtn=document.querySelector("#resetBtn");

resetBtn.addEventListener("click", () => {
    cells.forEach((cell) =>{
        cell.innerText = "";
        resultHeading.innerText = "";
        currTurn = "X";
        gameOver = false;
    })
})


let currTurn = "X";

let gameOver = false;

cells.forEach((cell) => {
    cell.addEventListener("click", () => {
        if(!gameOver && cell.innerText === ""){
            cell.innerText = currTurn;

            //check for win
            const winCombinations = [
                [0,1,2],[3,4,5],[6,7,8], //rows
                [0,3,6],[1,4,7],[2,5,8], //cols
                [0,4,8],[2,4,6] //diagonals
            ];

            for(combination of winCombinations){
                const [a,b,c]=combination;

                if(cells[a].innerText !== "" && cells[a].innerText === cells[b].innerText && cells[a].innerText === cells[c].innerText){
                    resultHeading.innerText = `Player ${currTurn} wins! Click Reset to play again.`;
                    gameOver = true;
                    break;
                }
            }

            currTurn = currTurn === "X" ? "O" : "X";
        }
    })
})
