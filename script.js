let nextPlayer = 'x'
function play(evt) {
    // play click music
    document.querySelector('#playerClick').play()
    // check if the space has not been played
    if (evt.target.innerText === '') {
        // display the player letter
        evt.target.innerText = nextPlayer;

        // switch to next player
        if (nextPlayer === 'x') {
            nextPlayer = 'o'
        } else {
            nextPlayer = 'x'
        }

        checkWinner()
    }
}


// alerting the winner

function callWinner_X() {
    document.getElementById('modal').style.display = 'block';
    

}
function callWinner_O() {
    document.getElementById('modaltwo').style.display = 'block';
    
}
var cls_btn = document.getElementsByClassName("close")[0];
function closeButton() {
    cls_btn.onclick = function () {
        modal.style.display = "none";
    }
}
closeButton();
var clo_btn = document.getElementsByClassName("close")[1];
function closeButton_two() {
    clo_btn.onclick = function () {
        modaltwo.style.display = "none";
    }
}
closeButton_two();



var o_win = 0;
var x_win = 0;



    

function checkWinner() {
    const btn1 = document.querySelector('#btn1').innerText
    const btn2 = document.querySelector('#btn2').innerText
    const btn3 = document.querySelector('#btn3').innerText
    const btn4 = document.querySelector('#btn4').innerText
    const btn5 = document.querySelector('#btn5').innerText
    const btn6 = document.querySelector('#btn6').innerText
    const btn7 = document.querySelector('#btn7').innerText
    const btn8 = document.querySelector('#btn8').innerText
    const btn9 = document.querySelector('#btn9').innerText

    // checking winner x
    

    if (btn1 == 'x' && btn2 == 'x' && btn3 == 'x') {
        document.getElementById('winner').play()
        var xResult = x_win += 1;
        document.getElementById('xScore').innerText = xResult
        callWinner_X();
    }
    if (btn4 == 'x' && btn5 == 'x' && btn6 == 'x') {
        document.getElementById('winner').play()
        var xResult = x_win += 1;
        document.getElementById('xScore').innerText = xResult
        callWinner_X();
    }
    if (btn7 == 'x' && btn8 == 'x' && btn9 == 'x') {
        document.getElementById('winner').play()
        var xResult = x_win += 1;
        document.getElementById('xScore').innerText = xResult
        callWinner_X();
    }

    // vertical ways of winning for x

    if (btn1 == 'x' && btn4 == 'x' && btn7 == 'x') {
        document.getElementById('winner').play()
        var xResult = x_win += 1;
        document.getElementById('xScore').innerText = xResult
        callWinner_X();
    }
    if (btn2 == 'x' && btn5 == 'x' && btn8 == 'x') {
        document.getElementById('winner').play()
        var xResult = x_win += 1;
        document.getElementById('xScore').innerText = xResult
        callWinner_X();
    }
    if (btn3 == 'x' && btn6 == 'x' && btn9 == 'x') {
        document.getElementById('winner').play()
        var xResult = x_win += 1;
        document.getElementById('xScore').innerText = xResult
        callWinner_X();
    }

    //horizontal ways of winning for x

    if (btn1 == 'x' && btn5 == 'x' && btn9 == 'x') {
        document.getElementById('winner').play()
        var xResult = x_win += 1;
        document.getElementById('xScore').innerText = xResult
        callWinner_X();
    }
    if (btn3 == 'x' && btn5 == 'x' && btn7 == 'x') {
        document.getElementById('winner').play()
        var xResult = x_win += 1;
        document.getElementById('xScore').innerText = xResult
        callWinner_X();
    }

    //checking winner o

    if (btn1 == 'o' && btn2 == 'o' && btn3 == 'o') {
        document.getElementById('winner').play()
        var oResult = o_win += 1;
        document.getElementById('oScore').innerText = oResult
        callWinner_O();
    }
    if (btn4 == 'o' && btn5 == 'o' && btn6 == 'o') {
        document.getElementById('winner').play()
        var oResult = o_win += 1;
        document.getElementById('oScore').innerText = oResult
        callWinner_O();
    }
    if (btn7 == 'o' && btn8 == 'o' && btn9 == 'o') {
        document.getElementById('winner').play()
        var oResult = o_win += 1;
        document.getElementById('oScore').innerText = oResult
        callWinner_O();
    }

    // vertical ways of winning for o

    if (btn1 == 'o' && btn4 == 'o' && btn7 == 'o') {
        document.getElementById('winner').play()
        var oResult = o_win += 1;
        document.getElementById('oScore').innerText = oResult
        callWinner_O();
    }
    if (btn2 == 'o' && btn5 == 'o' && btn8 == 'o') {
        document.getElementById('winner').play()
        var oResult = o_win += 1;
        document.getElementById('oScore').innerText = oResult
        callWinner_O();
    }
    if (btn3 == 'o' && btn6 == 'o' && btn9 == 'o') {
        document.getElementById('winner').play()
        var oResult = o_win += 1;
        document.getElementById('oScore').innerText = oResult
        callWinner_O();
    }

    //horizontal ways of winning for o

    if (btn1 == 'o' && btn5 == 'o' && btn9 == 'o') {
        document.getElementById('winner').play()
        var oResult = o_win += 1;
        document.getElementById('oScore').innerText = oResult
        callWinner_O();
    }
    if (btn3 == 'o' && btn5 == 'o' && btn7 == 'o') {
        document.getElementById('winner').play()
        var oResult = o_win += 1;
        document.getElementById('oScore').innerText = oResult
        callWinner_O();
    }
    
}
function playGame() {
    // get all play buttons
    const allButton = document.querySelectorAll('main > button')

    // bind click event to each
    allButton.forEach(function (btn) {
        btn.addEventListener('click', play)
    })
    audio = document.querySelector('#audio')
    audio.loop = true
    if (audio.played.length === 0) {
        audio.play() 
        
    } else {
        audio.pause()
    }
}

function resetGame() {
    const allButton = document.querySelectorAll('main > button')
    allButton.forEach(function (btn) {
        btn.innerText = ''

        o_win.innerText = 0
        x_win.innerText = 0
        audio.play()
    })
    // change the first player back to x
    nextPlayer = 'x'
}

// function limitReached(){
//     if(o_win >= 10 || x_win >= 10){
//         document.querySelector(".gameOver").style.display = "block"
//     }
// }
// limitReached()