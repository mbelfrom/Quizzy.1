const quizQuestions = [
    {
        text: "What is my favorite game to play in my downtime?",
        options: ["Tetris", "GTA V", "Metal Gear", "God of War"],
        correctIndex: 2,
    },

    {
        text: "How tall am I?",
        options: ["5'10", "6'2", "6'5", "5'8"],
        correctIndex: 2,
    },

    {
        text: "What is the most recent skill or hobby I've learned?",
        options: ["Gardening", "Sewing", "Coding", "Flying"],
        correctIndex: 0,
    },

    {
        text: "What was my favorite subject?",
        options: ["Math", "Science", "History", "Business Law"],
        correctIndex: 3,
    },

    {
        text: "What gives me trouble in Javascript?",
        options: ["If statements", "Loops", "DOMs", "Arrays"],
        correctIndex: 1,
    },
];

const quizQuestionsEl = document.querySelector("#question");
const optionsEl = document.querySelector("#options");
let questionIndex = 0;

function renderQuestion() {
    const quiz = quizQuestions[questionIndex];
    // Set the text for our questions
    quizQuestionsEl.textContent = quizQuestions[questionIndex].text;
    // Render our options
    // clear out the options div to remove previous buttons

    // create a button
    for (let i = 0; i < quiz.options.length; i++) {
        // reference the option text
        const option = quiz.options[i];
        // create a button
        const button = document.createElement("button");
        // set the button text
        button.textContent = option;
        // add the button to the options div
        optionsEl.append(button);
    }
}

optionsEl.addEventListener("click", function(e) {
    const element = e.target;
    const question = quizQuestions[questionIndex];

    if(!element.matches("button")) return;

    // Check to see if the user answered correctly 
    if (element.textContent === question.options[question.correctIndex]) {
        // inform them
        alert("Correct!"); 
    } else {
        alert("Wrong!");
    }
    
    if (questionIndex < quizQuestions.length-1) {
        optionsEl.innerHTML="";
        questionIndex++
        renderQuestion();
}
    if (questionIndex + 1 === quizQuestions.length) {
        quizQuestionsEl.innerHTML=""
        optionsEl.innerHTML = "";
    }


    // increase our question index
    // re-render our question
});