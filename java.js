const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const highScoresButton = document.getElementById('highscores-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

// const username = document.getElementById("username"); 
// const saveScoreBtn = document.getElementById("saveScoreBtn");
// const finalScore = document.getElementById("finalScore");
// const mostRecentScore = localStorage.getItem("mostRecentScore");

// const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
// console.log(highScores);


// finalScore.innerText = mostRecentScore;

var allButtons = document.querySelectorAll(".btn")
var score = 0 
var time = 120
var timerId = document.getElementById("timer")
var timer;
var scoreEl = document.getElementById("score")

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
highScoresButton.addEventListener('click', stopGame)
})

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    timer = setInterval(clockTick, 1000)
    timerId.textContent = time
    setNextQuestion()
}

function clockTick() {
    time--
    timerId.textContent = time
    // if (time <= 0) {
    //     //quizEnd() 
    //     clearInterval(this.timer)
    // } 
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function stopGame() {
    startButton.classList.add('hide')
    questionContainerElement.classList.add('hide')
    nextButton.classList.add('hide')
    highScoresButton.classList.remove('hide')
}




//     if highScoresButton.innerText = ('Game Over')
//     // highScoresButton.classList.remove('hide')
// } else { 
//     return window.location.assign("/highscores.html");
// }

//     //hide question div - add class of hide (looks like line 23-24)

//     // add a user box to have them type initials, submit button - on click - grab initials and score and put into local storage. 

//     // grab the scores and initials and print into ordered list Create a Div in html (high score div)

// // on quiz end function - hide questionContainerElement... show high scores from HTML div.

// // call quiz end function on timer and when i run out of questions. find logic where the game loops and call the quiz end function. 
//     }

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}
function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    if (correct) {
        score+= 1
        scoreEl.textContent = score
    } else {
        time -= 10
        timerId.textContent=time
    }
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        stopGame()
        // highScoresButton.innerText = ('Game Over')
        // // on Game Over Click - quizEnd function
        // highScoresButton.classList.remove('hide')
    }

    if (questionElement.length === 0 || time === 0) {
        //go to high score page
    return window.location.assign("/highscores.html");
    }

    



    // username.addEventListener("keyup", () =>{
    //     saveScoreBtn.disabled = !username.value;
    // });

    // saveHighScore = e => {
    //     console.log("clicked the save button!");
    //     e.preventDefault();

    //     const score = {
    //         score: mostRecentScore, 
    //         name: username.value
    //     };
    //     highScores.push(score);
    //     console.log(highScores);
    // };
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

// QUESTIONS
const questions = [
    {
        question: 'How doeas a FOR loop start?',
        answers: [
            {text: 'for (i<=5; i++)', correct: false},
            {text: 'for (i = 0; <=5; i++)', correct: true},
            {text: 'for i = 1 to 5', correct: false},
            {text: 'for (i = 0; i <=5)', correct: false}
        ]
    },
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        answers: [
            {text: '<script>', correct: true},
            {text: '<javascript>', correct: false},
            {text: '<scripting>', correct: false},
            {text: '<scripts>', correct: false}
        ]
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        answers: [
            {text: 'alertBox("Hello World");', correct: false},
            {text: 'msgBox("Hello World");', correct: false},
            {text: 'msg("Hello World");', correct: false},
            {text: 'alert("Hello World");', correct: true}
        ]
    },
    {
        question: 'How do you create a function in JavaScript?',
        answers: [
            {text: 'function myFunction()', correct: true},
            {text: 'function:myFunction()', correct: false},
            {text: 'function = myFunction()', correct: false},
            {text: 'function myFunction[]', correct: false}
        ]
    },
    {
        question: 'How do you write an IF statement in JavaScript?',
        answers: [
            {text: 'if i == 5 then', correct: false},
            {text: 'if i = 5 then', correct: false},
            {text: 'if(i == 5)', correct: true},
            {text: 'if i = 5', correct: false}
        ]
    },
    {
        question: 'What copies array elements within the array, to and from specified positions?',
        answers: [
            {text: 'copyMove()', correct: false},
            {text: 'copyWithin()', correct: true},
            {text: 'copyArrayElements()', correct: false},
            {text: 'copy()', correct: false}
        ]
    },    {
        question: 'What does forEach() do?',
        answers: [
            {text: 'It does nothing', correct: false},
            {text: 'creates an array element for each function', correct: false},
            {text: 'calls a function for each array element', correct: true},
            {text: 'Creates a for loop', correct: false}
        ]
    },

]




// The game ends when all questions have been answered or the timer gets to zero

// After the game, users can store their high scores in local storage, and can view those high scores by clicking a link

