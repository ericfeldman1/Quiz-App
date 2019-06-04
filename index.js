// questions begin at 0
const questionNumber = 0

// score begins at 0
const score = 0

// html for question page
function generateQuestion() {
    if (questionCount < STORE.length) {
        return `<div class="question-${questionNumber}">
        <h2>${STORE[questionNumber].question}</h2>
        <form class="questionForm" action="URL" method="post">
        <fieldset name ="multiple-choice-options">
        <label class="answerOption">
            <input type="radio" 
            value="${STORE[questionNumber].answers[0]}" 
            name="answerOption" required>
            <span>${STORE[questionNumber].answers[0]}</span>    
        </label>
        <label class="answerOption">
            <input type="radio" 
            value="${STORE[questionNumber].answers[1]}" 
            name="answerOption" required>
            <span>${STORE[questionNumber].answers[1]}</span>    
        </label>
        <label class="answerOption">
            <input type="radio" 
            value="${STORE[questionNumber].answers[2]}" 
            name="answerOption" required>
            <span>${STORE[questionNumber].answers[2]}</span>    
        </label>
        <label class="answerOption">
            <input type="radio" 
            value="${STORE[questionNumber].answers[3]}" 
            name="answerOption" required>
            <span>${STORE[questionNumber].answers[3]}</span>    
        </label>
        <button type="Submit">Submit</button>
        </fieldset>
        </form>`
    }
    else {
       renderResults();
        restartQuiz();
        $(".questionNumber").text(10);
    }
}

// increment question number
function updateQuestionNumber() {
    questionNumber++;
    $(".questionNumber").text(questionNumber+1)
}

// increment Score
function updateScore() {
    score++;
    $(".score").text(score)
}

// start quiz - hide landing page HTML and show question page HTML
function startQuiz() {
    $(".landingPage").on("click", ".startButton", function(event) {
        $(".landingPage").remove;
    $(".questionNumber").text(1);    
    })
}

// render question in DOM
function renderQuestion() {
    $(".questionAnswerForm").html(generateQuestion());
}

// user selects answer 
function userSelectAnswer() {
    $(".form").on("submit", function (event) {
        event.preventDefault();
        let selected = $("input:checked");
        let answer = selected.val();
        let correctAnswer = `${STORE[questionNumber].correctAnswer}`
        if (answer === correctAnswer) {
            selected.parent().addClass("correct");
            ifAnswerIsCorrect();
        }   else {
                selected.parent().addClass("wrong");
                ifAnswerIsWrong;
            }
        
    })
}

function ifAnswerIsCorrect() {
    userAnswerFeedbackCorrect();
    updateScore();
}

function ifAnswerisWrong() {
    userAnswerFeedbackWrong()
}

// html for correct answer
function userAnswerFeedbackCorrect() {

}

// html for wrong answer
function userAnswerFeedbackWrong() {

}

// update score text
function updateScore() {

}

// html for when the quiz is over
function renderResults() {

}

// what happens when the user clicks next
function renderNextQuestion() {

}

// reload page to re-take quiz
function restartQuiz() {

}

// run quiz functions
function createQuiz() {
    startQuiz();
    renderQuestion();
    userSelectAnswer();
    renderNextQuestion();
}

$(createQuiz);





