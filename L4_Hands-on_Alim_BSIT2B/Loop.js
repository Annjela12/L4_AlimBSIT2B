function checkUserInput() {
    let userNumber = document.getElementById("userNumber").value; 
    let resultText = "";

    if (userNumber === "") {
        alert("Please enter a number!");
        return;
    }

    userNumber = parseInt(userNumber);

    if (!isNaN(userNumber)) {
        resultText = (userNumber % 2 === 0) ? `${userNumber} is even.` : `${userNumber} is odd.`;
    } else {
        resultText = "Invalid input. Please enter a valid number.";
    }

    document.getElementById("result").innerText = resultText; 
}


for (let i = 1; i <= 10; i++) {
    console.log(i);
}
