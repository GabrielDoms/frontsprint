document.getElementById("btn1").addEventListener("click", function(){
    document.body.style.backgroundColor = "red";
});

document.getElementById("btn2").addEventListener("click", function(){
 document.body.style.backgroundColor = "green";
});

document.getElementById("btn3").addEventListener("click", function(){
 document.body.style.backgroundColor = "blue";
});

document.getElementById("btn4").addEventListener("click", function(){
 document.body.style.backgroundColor = "";
});




const questions = [
	{
		question: "Qual é a principal uva utilizada na produção de vinho tinto na região de Bordeaux?",
		answers: [
			"Merlot",
			"Cabernet Sauvignon",
			"Pinot Noir",
			"Syrah"
		],
		correctAnswer: "Cabernet Sauvignon"
	},
	{
		question: "Qual é a principal uva utilizada na produção de vinho branco na região de Borgonha?",
		answers: [
			"Chardonnay",
			"Sauvignon Blanc",
			"Riesling",
			"Pinot Grigio"
		],
		correctAnswer: "Chardonnay"
	},
	{
		question: "Qual é o país que é o maior produtor de vinho no mundo?",
		answers: [
			"Itália",
			"França",
			"Espanha",
			"Estados Unidos"
		],
		correctAnswer: "Itália"
	},
    {
        question: "Qual é a uva utilizada na produção do vinho do Porto?",
        answers: [
          "Touriga Nacional",
          "Cabernet Sauvignon",
          "Merlot",
          "Syrah"
        ],
        correctAnswer: "Touriga Nacional"
      },
    {
        question: "Qual é a uva utilizada na produção do vinho do Rioja, na Espanha?",
        answers: [
          "Tempranillo",
          "Malbec",
          "Zinfandel",
          "Pinot Noir"
        ],
        correctAnswer: "Tempranillo"
      }
];

let currentQuestionIndex = 0;
let score = 0;

function showNextQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];

        const answers = question.answers.map((answer) => `
            <div>
                <input type="radio" name="answer" value="${answer}">
                <label>${answer}</label>
            </div>
        `).join('');

        const questionHtml = `
            <h2>${question.question}</h2>
            <form>
                ${answers}
                <button type="submit">Responder</button>
            </form>
        `;

        const popup = window.open("", "Quiz Popup", "width=${popupWidth},height=${popupHeight}");
        popup.document.body.innerHTML = questionHtml;

        const form = popup.document.querySelector("form");
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const selectedAnswer = popup.document.querySelector('input[name="answer"]:checked').value;
            checkAnswer(selectedAnswer, question.correctAnswer);
            currentQuestionIndex++;
            popup.close();
            showNextQuestion();
        });
    } else {
        showResults();
    }
}

function checkAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
        score++;
    }
}

function showResults() {
    const resultsHtml = `
        <h2>Resultado do Quiz</h2>
        <p>Você acertou ${score} de ${questions.length} perguntas.</p>
    `;

    const popup = window.open("", "Quiz Popup", "width=400,height=400");
    popup.document.body.innerHTML = resultsHtml;
}

showNextQuestion();