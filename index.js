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
    $(".landingPage").remove();
    $(".quizPage").css("display", "block")
    $(".questionNumber").text(1);    
    })
}

// render question in DOM
function renderQuestion() {
    $(".quizPage").html(generateQuestion());
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
    userAnswerCorrect();
    updateScore();
}

function ifAnswerisWrong() {
    userAnswerWrong()
}

// html for correct answer
function userAnswerCorrect() {
    $(.quizPage).html(`<div class=" answerDisplay correctAnswerDisplay">
    <img src="https://images.forwardcdn.com/image/720x/center/images/cropped/w-kosher-1501703457.jpg
    " alt="Correct Answer" class="correctAnswerImage">
    <p>That is the correct answer!  Great Job!</p>  
    <button type="button" class="nextQuestionButton"><Next Question</button></div>`)
}

// html for wrong answer
function userAnswerWrong() {
    $(.quizPage).html(`<div class="answerDisplay wrongAnswerDisplay">
    <img src="http://www.theyeshivaworld.com/wp-content/uploads/2015/11/nk.png
    " alt="Incorrect Answer" class="incorrectAnswerImage answerImage">
    <p>Sorry, that answer is incorrect.  Nice try!</p>
    <button type="button" class="nextQuestionButton"><Next Question</button></div>`)
}

// html for when the quiz is over
function renderResults() {
if (score >= 8) {
    $(".quizPage").html(`<div class="resultsPage">
    <h3>You answered ${score} out of 10 questions correctly.</h3>
    <p>Great job - Time to get cooking because you've got this down!</p>
    <button type="button" class="retakeQuizButton"><Retake Quiz</button></div>`)
}   else if (score >= 5) {$(".quizPage").html(`<div class="resultsPage">
<h3>You answered ${score} out of 10 questions correctly.</h3>
<p>Not bad, but I think you might need a bit more practice.  Study up and you'll be a pro in no time!</p>
<button type="button" class="retakeQuizButton"><Retake Quiz</button></div>`)
}   else {$(".quizPage").html(`<div class="resultsPage">
<h3>You answered ${score} out of 10 questions correctly.</h3>
<p>Uh oh - I think we might need to kick you out of the kitchen until you study up a bit more.</p>
<button type="button" class="retakeQuizButton"><Retake Quiz</button></div>`)
}
}

// what happens when the user clicks next
function renderNextQuestion() {
    $(".quizPage").on("click",".retakeQuizButton", function(event) {
         updateQuestionNumber();
         renderQuestion();
         userSelectAnswer();
    });
}

// reload page to re-take quiz
function restartQuiz() {
    $(".resultsPage").on("click", ".retakeQuizButton", function(event) {
        location.reload();
    });
}

// run quiz functions
function createQuiz() {
    startQuiz();
    renderQuestion();
    userSelectAnswer();
    renderNextQuestion();
}

$(createQuiz);





