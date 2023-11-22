// import { quizData } from "./data";
const quizData = [
    {
        question: 'What country has the highest life expectancy?',
        a: 'Bishkek',
        b: 'Astana',
        c: 'Moscow',
        d: 'Hong Kong',
        correct: 'Hong Kong'
    },
    {
        question: 'Who was the Ancient Greek God of the Sun?',
        a: 'Apollo',
        b: 'Ra',
        c: 'Dionis',
        d: 'Zevs',
        correct: 'Apollo'
    },
    {
        question: 'How many ghosts chase Pac-Man at the start of each game? ',
        a: '2',
        b: '4',
        c: '6',
        d: '5',
        correct: '4'
    },
    {
        question: 'What game studio makes the Red Dead Redemption series?',
        a: 'Activision',
        b: 'Rockstar Games',
        c: 'Dice',
        d: 'Electonic arts',
        correct: 'Rockstar Games'
    },
    {
        question: 'What character have both Robert Downey Jr. and Benedict Cumberbatch played?',
        a: 'Iron-man',
        b: 'Dracula',
        c: 'Nathan Drake',
        d: 'Sherlock Holmes',
        correct: 'Sherlock Holmes'
    }
]

let quizQuestion = document.getElementById('quiz__question');
let a_text = document.querySelector('.quiz__answer__1');
let b_text = document.querySelector('.quiz__answer__2');
let c_text = document.querySelector('.quiz__answer__3');
let d_text = document.querySelector('.quiz__answer__4');
const submit = document.getElementById('submit');

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    quizQuestion.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    // currentQuiz++;
}

submit.addEventListener('click', () => {
    currentQuiz++;
    if (currentQuiz < quizData.length) {
        loadQuiz()
    }
    else {
        alert('Thanks for accomplishing')
    }
})