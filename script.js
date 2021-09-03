const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message");
const numberOfNotes = document.querySelectorAll(".no-of-notes");
const cashNotes = [2000, 500, 100, 20, 10, 5, 1];

checkBtn.addEventListener("click", function validateBillAndCheckAmount() {
    hideMessage();
    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {
            const returnAmount = cashGiven.value - billAmount.value;
            calculateChange(returnAmount);
        } else {
            error("Cash Given Should Be Greater Than Bill Amount");
        }
    } else {
        error("Invalid Bill Amount");
    }
});

function calculateChange(returnAmount) {
    for (let i = 0; i < cashNotes.length; i++) {
        const numOfNotes = Math.trunc(returnAmount / cashNotes[i]);
        returnAmount = returnAmount % cashNotes[i];
        numberOfNotes[i].innerText = numOfNotes;
    }
}

function error(msg) {
    errorMessage.innerText = msg;
    errorMessage.style.display = "block";
}

function hideMessage() {
    errorMessage.style.display = "none";
}