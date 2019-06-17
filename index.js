// questions begin at 0 (relevant for datastore array & navbar)
let questionNumber = 0

// score begins at 0 (relevant for navbar & summary page)
let score = 0

// 1. START QUIZ - Hide landing page & Show question page
function startQuiz() {
    $(".landingPage").on("click", ".startButton", function(event) {
    // Removes landing page:
    $(".landingPage").remove();
    // Displays questions page:
    $(".quizPage").css("display", "block")
    // Increments question count in navbar to 1:
    $(".questionNumber").text(1);    
    });
}

// 2. HTML - QUESTION PAGE
function generateQuestion() {
    if (questionNumber < STORE.length) {
        return `<div class="question question-${questionNumber}">
        <h2>${STORE[questionNumber].question}</h2>
        <form class="questionForm" action="URL" method="post">
        <fieldset name ="multiple-choice-options">
        <label class="answerOption">
            <input type="radio" 
            value="${STORE[questionNumber].answers[0]}" 
            name="answerOption" required>
            <span>${STORE[questionNumber].answers[0]}</span>    
        </label>
        <br>
        <label class="answerOption">
            <input type="radio" 
            value="${STORE[questionNumber].answers[1]}" 
            name="answerOption" required>
            <span>${STORE[questionNumber].answers[1]}</span>    
        </label>
        <br>
        <label class="answerOption">
            <input type="radio" 
            value="${STORE[questionNumber].answers[2]}" 
            name="answerOption" required>
            <span>${STORE[questionNumber].answers[2]}</span>    
        </label>
        <br>
        <label class="answerOption">
            <input type="radio" 
            value="${STORE[questionNumber].answers[3]}" 
            name="answerOption" required>
            <span>${STORE[questionNumber].answers[3]}</span>    
        </label>
        <br>
        <button class="submitQuestion" type="Submit">Submit</button>
        </fieldset>
        </form>`
    }
    else {
        // Show summary page:
        renderResults();
        // Apply logic to button to be able to re-start quiz:
        restartQuiz();
        // Set question counter in navbar to 10:
        $(".questionNumber").text(10);
    }
}

// 3. INCREMENT QUESTION NUMBER
function updateQuestionNumber() {
    // Incrementing it for the datastore array:
    questionNumber++;
    // Incrementing it for the navbar:
    $(".questionNumber").text(questionNumber+1)
}

// 4. INCREMENT SCORE
function updateScore() {
    // Incrementing the value assigned to the "score" variable:
    score++;
    // Plugging in the new value into the navbar:
    $(".score").text(score)
}

// 5. RENDER QUESTION IN DOM
function renderQuestion() {
    $(".quizPage").html(generateQuestion());
}

// 6. USER SELECTS ANSWER
function userSelectAnswer() {
    $(".submitQuestion").on("click", function (event) {
        // Standard/generally a good thing to put in: 
        event.preventDefault();
        // Defining variables:
        let selected = $("input:checked");
        let answer = selected.val();
        let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
        if (answer === correctAnswer) {
            // Nec to create a "correct" CSS class!
            // selected.parent().addClass("correct");
            userAnswerCorrect();
            updateScore();
        }   else {
                // Nec to create a "wrong" CSS class!
                // selected.parent().addClass("wrong");
                userAnswerWrong();
            }
        
    });
}

// 7. "NEXT" BUTTON
function renderNextQuestion() {
    $(".nextQuestionButton").on("click", function (event) {
        event.preventDefault();
        // Increments Q for datastore array and for navbar: 
        updateQuestionNumber();
        // Passes new question into html:
         renderQuestion();
        //  Embeds logic into "submit" button:
         userSelectAnswer();
    });
}

// 8. HTML - CORRECT ANSWER
function userAnswerCorrect() {
    $(".quizPage").html(`<div class= "answerDisplay correctAnswerDisplay">
    <img src="https://images.forwardcdn.com/image/720x/center/images/cropped/w-kosher-1501703457.jpg" alt="Correct Answer" class="correctAnswerImage">
    <p>That is the correct answer!  Great Job!</p>  
    <button type="button" class="nextQuestionButton">Next Question</button></div>`);
    renderNextQuestion();
}

// 9. HTML - WRONG ANSWER
function userAnswerWrong() {
    $(".quizPage").html(`<div class="answerDisplay wrongAnswerDisplay">
    <img src="http://www.theyeshivaworld.com/wp-content/uploads/2015/11/nk.png" alt="Incorrect Answer" class="incorrectAnswerImage answerImage">
    <p>Sorry, that answer is <span class="incorrect">incorrect</span>.</p>
    <p>The correct answer was:</p>
    <p> <span class="correctAnswer">${STORE[questionNumber].correctAnswer}</span></p>
    <button type="button" class="nextQuestionButton">Next Question</button></div>`);
    renderNextQuestion();
}

// 10. HTML - SUMMARY PAGE
function renderResults() {
if (score >= 8) {
    $(".quizPage").html(`<div class="js-box resultsPage">
    <h3>You answered ${score} out of 10 questions correctly.</h3>
    <p>Great job - Time to get cooking because you've got this down!</p>
    <button type="button" class="retakeQuizButton">Retake Quiz</button></div>`)
}   else if (score >= 5) {$(".quizPage").html(`<div class="resultsPage">
<h3>You answered ${score} out of 10 questions correctly.</h3>
<p>Not bad, but I think you might need a bit more practice.  Study up and you'll be a pro in no time!</p>
<button type="button" class="retakeQuizButton">Retake Quiz</button></div>`)
}   else {$(".quizPage").html(`<div class="resultsPage">
<h3>You answered ${score} out of 10 questions correctly.</h3>
<p>Uh oh - I think we might need to kick you out of the kitchen until you study up a bit more!</p>
<button type="button" class="retakeQuizButton">Retake Quiz</button></div>`)
}
}

// 11. RE-TAKE QUIZ
function restartQuiz() {
    $(".resultsPage").on("click", ".retakeQuizButton", function(event) {
        // Refreshes the page, i.e. re-starts the app:
        location.reload();
    });
}

// 12. RUN QUIZ FUNCTIONS
function createQuiz() {
    // Puts logic into start button to move on to first question:
    startQuiz();
    // Logic to pass new questions into html:
    renderQuestion();
    // Logic for submit button at the end of each question:
    userSelectAnswer();
    // Logic for "next" button at the end of each question:
    renderNextQuestion();
}

$(createQuiz);



