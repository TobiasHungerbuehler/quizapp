let questions = [
    {
        "question": "Was ist eine Schleife in der Programmierung?",
        "answer_1": "Ein Fehler im Programmcode",
        "answer_2": "Eine Funktion, die das Programm beendet",
        "answer_3": "Eine Wiederholung von Code",
        "answer_4": "Eine Bedingung, die nur einmal ausgeführt wird",
        "right_answer": 3
        },
        {
        "question": "Welcher Operator wird verwendet, um zwei Werte zu vergleichen?",
        "answer_1": "=",
        "answer_2": "==",
        "answer_3": ">",
        "answer_4": "<",
        "right_answer": 2
        },
        {
        "question": "Was ist eine Variable in der Programmierung?",
        "answer_1": "Eine spezielle Art von Schleife",
        "answer_2": "Eine Funktion, die eine Zahl zurückgibt",
        "answer_3": "Ein Name für einen Wert, der im Code verwendet wird",
        "answer_4": "Eine Bedingung, die nur einmal ausgeführt wird",
        "right_answer": 3
        },
        {
        "question": "Was ist ein Array in der Programmierung?",
        "answer_1": "Eine Funktion, die eine Zahl zurückgibt",
        "answer_2": "Eine spezielle Art von Schleife",
        "answer_3": "Eine Liste von Werten, die unter einem Namen gespeichert werden",
        "answer_4": "Ein Befehl, der das Programm beendet",
        "right_answer": 3
        },
        {
        "question": "Welche der folgenden Programmiersprachen ist am besten für Webentwicklung geeignet?",
        "answer_1": "Java",
        "answer_2": "C++",
        "answer_3": "Python",
        "answer_4": "JavaScript",
        "right_answer": 4
        }
]

let currentQuestion = 0;
let correctAnswers = 0;
let AUDIO_SUCCESS = new Audio('./audio/ding.mp3');
let AUDIO_FAIL = new Audio('./audio/tock.mp3');


function init() {
    document.getElementById('length').innerHTML = questions.length;
}


function startQuiz() {
    document.getElementById('startScreen').style = 'display: none';
    document.getElementById('question-body').style = '';
    showQuestion()
}

function showQuestion(){
    let question = questions[currentQuestion]; 
    document.getElementById('question').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectetQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;
    if(question['right_answer'] == selectetQuestionNumber) {
        answerSuccess(selection);
    } else {
        answerFail(selection, idOfRightAnswer);
    }
    document.getElementById('next-button').disabled = false;
    answerCardDefault(true);
}


function answerSuccess(selection) {
    document.getElementById(selection).parentNode.classList.add('bg-success');
    AUDIO_SUCCESS.play();
    correctAnswers++;
}


function answerFail(selection, idOfRightAnswer) {
    document.getElementById(selection).parentNode.classList.add('bg-danger');
    document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    AUDIO_FAIL.play();
}


function answerCardDefault(bool) {
    document.getElementById('answer_1_container').disabled = bool;
    document.getElementById('answer_2_container').disabled = bool;
    document.getElementById('answer_3_container').disabled = bool;
    document.getElementById('answer_4_container').disabled = bool;
}


function nextQuestion(){
    answerCardDefault(false);
    changeNextButton()
    if(currentQuestion >= questions.length -1) {
        screenRotation() 
        currentQuestion++;
        changePercent()
    } else {
        currentQuestion++;
        showQuestion();
        resetButtons();
        changeQuestionNumber();   
        changePercent();
    }
}


function screenRotation() {
    document.getElementById('endScreen').style = ''; // endscreen on
    document.getElementById('quiz-card').classList.add('trophy-bg'); // show trophy
    document.getElementById('question-body').style = 'display: none'; 
    document.getElementById('number-of-questions').innerHTML = questions.length;
    document.getElementById('correctAnswers').innerHTML = correctAnswers;
}


function resetButtons() {
    document.getElementById('next-button').disabled = true;
    for (let i = 1; i <= 4 ; i++) {
        let buttonId = 'answer_'+i;
        document.getElementById(buttonId).parentNode.classList.remove('bg-danger');
        document.getElementById(buttonId).parentNode.classList.remove('bg-success');
    }
}


function changeQuestionNumber() {
    questionNumber = currentQuestion +1; 
    document.getElementById('question-number').innerHTML = `${questionNumber}`;
}


function changePercent() {
    let percent = currentQuestion / questions.length;
    percent = Math.round(percent *100);
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style.width = `${percent}%`;
}


function restart(){
    currentQuestion = 0;
    correctAnswers = 0;
    restartQuizScreen();
    showQuestion();
    changeQuestionNumber()
    changePercent();
    resetButtons();
}


function restartQuizScreen() {
    document.getElementById('question-body').style = ''; 
    document.getElementById('endScreen').style = 'display: none';
    document.getElementById('quiz-card').classList.remove('trophy-bg'); // hide trophy
}


function changeNextButton() {
    if(currentQuestion == (questions.length -2)){
        document.getElementById('next-button').classList.add('btn-warning');
        document.getElementById('next-btn-text').innerHTML = 'Dein Resultat';
    } else {
        document.getElementById('next-button').classList.remove('btn-warning');
        document.getElementById('next-btn-text').innerHTML = 'Nächste Frage';
    } 
}



