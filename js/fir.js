const wordText = document.querySelector(".word"),
    score = document.querySelector(".score span"),
    f_score = document.querySelector(".f-score span"),
    timeText = document.querySelector(".time b"),
    inputField = document.querySelector("input"),
    end = document.querySelector(".end"),
    end_cont = document.getElementById("cont"),
    main_cont = document.getElementById("main-cont"),
    fir_cont = document.getElementById("fir-cont"),
    play_again = document.getElementById("play-again"),
    easy = document.getElementById("easy"),
    medium = document.getElementById("medium"),
    hard = document.getElementById("hard");

let total = 0,
    n = 0,
    sco = 1,
    isPaused = false;
let correctWord, timer;

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if (!isPaused && maxTime > 1) {
            maxTime--;
            n--;
            return timeText.innerText = maxTime;
        } else if (maxTime == 1 && n == 1) {
            end_cont.classList.remove('hide');
            main_cont.classList.add('hide'),
                f_score.innerText = total,
                n = 0;
            total = 0;
        }
    }, 1000);
}

const initGame = () => {
    initTimer(n);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    wordText.innerText = wordArray.join("");
    score.innerText = total;
    correctWord = randomObj.word.toLowerCase();;
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
}


const checkWord = () => {
    let userWord = inputField.value.toLowerCase();
    if (userWord == correctWord) {
        total = total + sco,
        initGame();
    }
}

const playAgain = () => {
    fir_cont.classList.remove('hide'),
        end_cont.classList.add('hide');
        isPaused = true;
}

const playEasy = () => {
    fir_cont.classList.add('hide'),
        main_cont.classList.remove('hide'),
        n = 30,
        total = 0,
        isPaused = false,
        initGame();
}
const playMedium = () => {
    fir_cont.classList.add('hide'),
        main_cont.classList.remove('hide'),
        n = 20,
        total = 0,
        isPaused = false,
        initGame();
}
const playHard = () => {
    fir_cont.classList.add('hide'),
        main_cont.classList.remove('hide'),
        n = 10,
        total = 0,
        isPaused = false,
        initGame();
}

end.addEventListener('click', function () {
    end_cont.classList.remove('hide'),
    main_cont.classList.add('hide'),
        f_score.innerText = total;
})

inputField.addEventListener("input", checkWord);
play_again.addEventListener("click", playAgain);
easy.addEventListener("click", playEasy);
medium.addEventListener("click", playMedium);
hard.addEventListener("click", playHard);