let player = document.getElementById("player");

let restart = document.getElementById("restartBtn");

let boxes = Array.from (document.getElementsByClassName("box"));

let winner = getComputedStyle(document.body).getPropertyValue('--play-box')


const O_TEXT = "O";
const X_TEXT = "X";

let currentPlayer = X_TEXT; // i start game with x
let spaces = Array(9).fill(null); // here i want if ichoce block to put x or o on it it will not be avaliable again 


const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}

function boxClicked(e) {
    const id = e.target.id

    if (!spaces[id]){
        spaces[id] = currentPlayer

        e.target.innerText = currentPlayer

        if(playerHasWon() !==false){
            playerText = `${currentPlayer} has Won!`

            let play_box = playerHasWon();
            play_box.map( box => boxes[box].style.backgroundColor=winner)
            return
        }
        
        currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT
    }
}

const winning = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
]

function playerHasWon(){
    // for (let index = 0; index < Array.length; index++) {
    //     const element = array[index];
    // }
    for (const element of winning) {

        let [a, b, c] = element

        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])){
            return [a, b, c]

        }
        
    }
    return false

}
// restartBtn.addEventListener('click'. restart) // restart here is function i creat it below

// function restart() {
//     spaces.fill(null) // here i empty all blocks

//     boxes.forEach( box => {
//         box.innerText = ''
//     })

//     currentPlayer = X_TEXT
// }

document.getElementById("restartBtn").onclick = 
function restart() {
            spaces.fill(null) // here i empty all blocks
        
            boxes.forEach( box => {
                box.innerText = ''
                box.style.backgroundColor=''
            })

            playerText = 'Tic Tac Toe';
        
            currentPlayer = X_TEXT
        }
        
    
;

startGame()