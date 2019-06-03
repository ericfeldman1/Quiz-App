// questions begin at 0
const questionNumber = 0

// score begins at 0
const score = 0

// generate question - html code
function generateQuestion() {
    if questionCount < STORE.length) {
        return 
        <div class="question-${questionNumber}">
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
        </form>
    }
    else {
    //    Still need to create these functions
       renderResults();
        restartQuiz()
        $(.questionNumber).text(10)
    }
}

{/* increment question number */}
function updateQuestionNumber() {
    questionNumber++;
    $(.questionNumber).text(questionNumber+1)
}
{/* increment score */}
function updateScore() {
    score++;
    $(.scoreCount).text(score)
}
start quiz

// render question in DOM

// user selects answer

// user feedback for correct answer

// user feedback for incorrect answer

// update score text

// html for when the quiz is over

// what happens when the user clicks next

// reload page to re-take quiz

// run quiz functions






