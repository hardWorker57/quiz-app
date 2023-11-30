// import { quizData } from "./data"; object-data
const quizData = [
    {
        question: 'What country has the highest life expectancy?',
        a: 'Bishkek',
        b: 'Astana',
        c: 'Moscow',
        d: 'Hong Kong',
        correct: 'd'
    },
    {
        question: 'Who was the Ancient Greek God of the Sun?',
        a: 'Apollo',
        b: 'Ra',
        c: 'Dionis',
        d: 'Zevs',
        correct: 'a'
    },
    {
        question: 'How many ghosts chase Pac-Man at the start of each game? ',
        a: '2',
        b: '4',
        c: '6',
        d: '5',
        correct: 'b'
    },
    {
        question: 'What game studio makes the Red Dead Redemption series?',
        a: 'Activision',
        b: 'Rockstar Games',
        c: 'Dice',
        d: 'Electonic arts',
        correct: 'b'
    },
    {
        question: 'What character have both Robert Downey Jr. and Benedict Cumberbatch played?',
        a: 'Iron-man',
        b: 'Dracula',
        c: 'Nathan Drake',
        d: 'Sherlock Holmes',
        correct: 'd'
    }
]

let quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll('.answer');
let quizQuestion = document.getElementById('quiz__question');
let a_text = document.querySelector('.quiz__answer__1');
let b_text = document.querySelector('.quiz__answer__2');
let c_text = document.querySelector('.quiz__answer__3');
let d_text = document.querySelector('.quiz__answer__4');
const submit = document.getElementById('submit');
let images = document.querySelector('.section_image');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers()
    var currentQuizData = quizData[currentQuiz];

    quizQuestion.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    for (let i = 0; i < score; i++) {
        images.innerHTML += `<img src="images/png-transparent-sasuke-uchiha-orochimaru-mitsuki-chibi-art-chibi-white-mammal-face.png" alt="">`;
    }

}

function getSelected() {

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}


submit.addEventListener('click', () => {
    // currentQuiz++;

    const answer = getSelected();
    
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz()
        }
        else {
            quiz.innerHTML = `<h2 class="quiz_finished">Wow, you got ` + score + ` points of ` + quizData.length + `</h2>`
        }        
    }
})

//writeText
let textSubmit = 'Hi, my friend! This is the quiz app for getting know how good are you qualified and well-informed in common erudition';
let index = 0;
let animText = document.getElementById('animText')
function writeText() {
    animText.innerText = textSubmit.slice(0, index);
    index++;
   
    if (index > textSubmit.length) {
        index = 1
        // animText.innerHTML = "";
        // textSubmit.innerHTML = "";
    }
}
setInterval(writeText, 40);

//images for winner