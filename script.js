let currentPlayer = "X";
let arr = Array(9).fill(null);
const msg = document.querySelector("#msg");
const popup = document.querySelector("#popup");
const popupMsg = document.querySelector("#popup-msg");

function checkWinner() {
    if (
        (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
        (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
        (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
        (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
        (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
        (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
        (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
        (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])
    ) {
        switch (currentPlayer) {
            case "X":
                msg.innerText = "PLAYER 1 WINS";
                msg.style.backgroundColor = "green";
                break;
            case "O":
                msg.innerText = "PLAYER 2 WINS";
                msg.style.backgroundColor = "green";
                break;
        }
        showPopup(`${msg.innerText}`);
        return;
    }

    if (!arr.some(e => e === null)) {
        msg.innerText = "The Game is a Draw!!";
        msg.style.backgroundColor = "black";
        showPopup("The Game is a Draw!!");
        return;
    }
}

function handleClick(el) {
    const id = Number(el.id);
    if (arr[id] !== null || popup.classList.contains('active')) return;
    arr[id] = currentPlayer;
    el.innerText = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === 'X' ? "O" : "X";
}

function showPopup(message) {
    popupMsg.innerText = message;
    popup.classList.add('active');
}

function resetGame() {
    arr = Array(9).fill(null);
    document.querySelectorAll('.col').forEach(cell => cell.innerText = '');
    msg.innerText = "GAME STARTED";
    msg.style.backgroundColor = "black";
    popup.classList.remove('active');
    currentPlayer = "X";
}
