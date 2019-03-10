var bestcount = 0;
var round = 0;
var computerOrder = [];
var playerOrder = [];
var cOutput = [];

var bcount = document.getElementById("bcount");
var reset = document.getElementById("reset");
var start = document.getElementById("start");
var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");
var yellow = document.getElementById("yellow");
var record = document.getElementById("record");
var nround = document.getElementById("nround");

start.onclick = function() {
    start.setAttribute("disabled", "disabled");
    round = 0;
    computerOrder = [];
    playerOrder = [];
    cOutput = [];
    round++;
    nround.innerHTML = "Round: " + round;
    decision();
};

reset.setAttribute("disabled", "disabled");
reset.onclick = function() {
    round = 0;
    nround.innerHTML = "Round: " + round;
    computerOrder = [];
    playerOrder = [];
    cOutput = [];
    reset.setAttribute("disabled", "disabled");
    start.removeAttribute("disabled");
};


blue.onclick = function() {
    playerOrder.push(1);
    blue.style.backgroundColor = "lightblue";
    setTimeout(function setDarkblue() {
        blue.style.backgroundColor = "darkblue";
    }, 700);
    test();
};

green.onclick = function() {
    playerOrder.push(2);
    green.style.backgroundColor = "lightgreen";
    setTimeout(function setDarkgreen() {
        green.style.backgroundColor = "darkgreen";
    }, 700);
    test();
};

red.onclick = function() {
    playerOrder.push(3);
    red.style.backgroundColor = "tomato";
    setTimeout(function setDarkred() {
        red.style.backgroundColor = "darkred";
    }, 700);
    test();
};

yellow.onclick = function() {
    playerOrder.push(4);
    yellow.style.backgroundColor = "yellow";
    setTimeout(function setGoldenrod() {
        yellow.style.backgroundColor = "goldenrod";
    }, 700);
    test();
};

record.onclick = function() {
    bestcount = 0;
    bcount.innerHTML = "Best Count: " + bestcount;
};

function test() {
    if (computerOrder.length == playerOrder.length) {
        if (compareOrders() == true) {
            bcount.innerHTML = "Best Count: " + round;
            next();
        }
        else if (compareOrders() != true) {
            window.alert("You lost. Please press START to play again.");
            reset.removeAttribute("disabled");
            return;
        }
    }
    else if (computerOrder.length != playerOrder.length) {
        return;
    }
}

function next() {
    if (round == 20) {
        window.alert("You won. Please press START to play again.");
        reset.removeAttribute("disabled");
        return;
    }
    round++;
    nround.innerHTML = "Round: " + round;
    if (computerOrder.length <= playerOrder.length) {
        decision();
    }
}

function compareOrders() {
    var x = true;
    for (var i = 0; i < computerOrder.length; i++) {
        if (computerOrder[i] != playerOrder[i]) {
            x = false;
        }
    }
    return x;
}


function decision() {
    setTimeout(function timeDecision() {
        if (compareOrders() == true) {
            playerOrder = [];
            generateNumber();
        }
        else if (compareOrders() != true) {
            if (compareOutputs() == true) {
                return;
            }
            else if (compareOutputs() != true) {
                nextColor();
            }
        }
    }, 1000);
}

function compareOutputs() {
    var x = true;
    for (var i = 0; i < computerOrder.length; i++) {
        if (computerOrder[i] != cOutput[i]) {
            x = false;
        }
    }
    return x;
}

function generateNumber() {
    var random = (Math.floor(Math.random() * 4) + 1);
    computerOrder.push(random);
    cOutput = [];
    decision();
}

function nextColor() {
    var i = cOutput.length;
    var f = computerOrder[i];
    switch (f) {
        case 1:
            fblue();
            break;
        case 2:
            fgreen();
            break;
        case 3:
            fred();
            break;
        default:
            fyellow();
    }
}

function fblue() {
    cOutput.push(1);
    blue.style.backgroundColor = "lightblue";
    setTimeout(function setDarkblue() {
        blue.style.backgroundColor = "darkblue";
    }, 700);
    decision();
}

function fgreen() {
    cOutput.push(2);
    green.style.backgroundColor = "lightgreen";
    setTimeout(function setDarkgreen() {
        green.style.backgroundColor = "darkgreen";
    }, 700);
    decision();
}

function fred() {
    cOutput.push(3);
    red.style.backgroundColor = "tomato";
    setTimeout(function setDarkred() {
        red.style.backgroundColor = "darkred";
    }, 700);
    decision();
}

function fyellow() {
    cOutput.push(4);
    yellow.style.backgroundColor = "yellow";
    setTimeout(function setGoldenrod() {
        yellow.style.backgroundColor = "goldenrod";
    }, 700);
    decision();
}
