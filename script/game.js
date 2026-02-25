let rock = document.querySelector('#isRock');
let paper = document.querySelector('#isPaper');
let scissor = document.querySelector('#isScissors');

const p = document.querySelector('.alert p');
const al = document.querySelector('.alert');
const uc = document.querySelector('#player-score');
const pn = document.querySelector('#computer-score');



let userCount = 0;
let pcCount = 0;

function getRandom13() {
    return Math.floor(Math.random() * 3) + 1;
}

function start(userNum) {

    let pcNum = getRandom13();


    // pcNum === 3;

    if (userNum === pcNum) {

        
        p.innerText = "Draw";
        al.style.backgroundColor = "#ffd322"
    }
    else if (userNum === 1 && pcNum === 3 ||
        userNum === 2 && pcNum === 1 ||
        userNum === 3 && pcNum === 2
    ) {

        p.innerText = "User Wins";
        al.style.backgroundColor = "#56b630"

        userCount = userCount + 1;


        uc.textContent = ('Player: ' + userCount)
    }
    else {


        p.innerText = "Pc Wins";
        al.style.backgroundColor = "#ff3c22"

        pcCount = pcCount + 1;

        pn.textContent = ('Computer: ' + pcCount)

    }



}
rock.addEventListener('click', () => start(1));
paper.addEventListener('click', () => start(2));
scissor.addEventListener('click', () => start(3));