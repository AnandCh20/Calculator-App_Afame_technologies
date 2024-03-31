// Selecting all buttons
var onebtn = document.getElementsByClassName('one')[0];
var twobtn = document.getElementsByClassName('two')[0];
var threebtn = document.getElementsByClassName('three')[0];
var fourbtn = document.getElementsByClassName('four')[0];
var fivebtn = document.getElementsByClassName('five')[0];
var sixbtn = document.getElementsByClassName('six')[0];
var sevenbtn = document.getElementsByClassName('seven')[0];
var eightbtn = document.getElementsByClassName('eight')[0];
var ninebtn = document.getElementsByClassName('nine')[0];
var zerobtn = document.getElementsByClassName('zero')[0];
var clearbtn = document.getElementsByClassName('clear')[0];
var addbtn = document.getElementsByClassName('add')[0];
var subbtn = document.getElementsByClassName('sub')[0];
var mulbtn = document.getElementsByClassName('mul')[0];
var divbtn = document.getElementsByClassName('div')[0];
var percentagebtn = document.getElementsByClassName('percentage')[0];
var plusminusbtn = document.getElementsByClassName('plus-minus')[0];
var equalbtn = document.getElementsByClassName('equal')[0];
var dotbtn = document.getElementsByClassName('dot')[0];

// Selecting the display screen
var screen = document.getElementById('d');

// Initializing variables
var operand = "";
var operator = "";

var count =0;

// Adding event listeners to buttons
onebtn.addEventListener('click', function() {
    operand += "1";
    updateScreen();
});

twobtn.addEventListener('click', function() {
    operand += "2";
    updateScreen();
});

threebtn.addEventListener('click', function() {
    operand += "3";
    updateScreen();
});

fourbtn.addEventListener('click', function() {
    operand += "4";
    updateScreen();
});

fivebtn.addEventListener('click', function() {
    operand += "5";
    updateScreen();
});

sixbtn.addEventListener('click', function() {
    operand += "6";
    updateScreen();
});

sevenbtn.addEventListener('click', function() {
    operand += "7";
    updateScreen();
});

eightbtn.addEventListener('click', function() {
    operand += "8";
    updateScreen();
});

ninebtn.addEventListener('click', function() {
    operand += "9";
    updateScreen();
});

zerobtn.addEventListener('click', function() {
    operand += "0";
    updateScreen();
});

dotbtn.addEventListener('click', function() {
    operand += ".";
    updateScreen();
});

// Add similar event listeners for other digit buttons

clearbtn.addEventListener('click', function() {
    clearDisplay();
});

addbtn.addEventListener('click', function() {
    operator = "+";
    operand += "+";
    updateScreen();
});

subbtn.addEventListener('click', function() {
    operator = "-";
    operand += "-";
    updateScreen();
});

mulbtn.addEventListener('click', function() {
    operator = "*";
    operand += "*";
    updateScreen();
});

divbtn.addEventListener('click', function() {
    operator = "/";
    operand += "/";
    updateScreen();
});

percentagebtn.addEventListener('click', function() {
    operand = parseFloat(operand) / 100; // Convert operand to a number and calculate percentage
    updateScreen();
});

plusminusbtn.addEventListener('click', function() {
    // Check if operand is empty or already has a "-"
    if (!operand || operand === "-") {
        operand = "-";
    } else {
        // If operand already has other operators, remove them before toggling the sign
        if (operand.includes("+")) {
            operand = operand.replace("+", "-");
        } else if (operand.includes("-")) {
            operand = operand.replace("-", "+");
        } else {
            // If operand is a positive number, toggle the sign to negative
            operand = "-" + operand;
        }
    }
    screen.innerText = operand;
});

// Add similar event listeners for other operator buttons

equalbtn.addEventListener('click', function() {
    calculate();
});

// Function to update the display screen
function updateScreen() {
    screen.innerText = operand;
}

// Function to clear the display screen
function clearDisplay() {
    operand = "";
    operator = "";
    screen.innerText = "0";
}

// Function to perform calculation
function calculate() {
    try {
        screen.innerText = eval(operand);
        operand = screen.innerText;
        operator = "";
    } catch (error) {
        screen.innerText = 'Error';
    }
}

