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



function init() {
    document.getElementById('length').innerHTML = questions.length;
    showQuestion();
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
        document.getElementById(selection).parentNode.classList.add('bg-success');
        correctAnswers++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
}


function nextQuestion(){

    if(currentQuestion >= questions.length -1) {

        document.getElementById('endScreen').style = '';
        document.getElementById('question-body').style = 'display: none'; 

        document.getElementById('number-of-questions').innerHTML = questions.length;
        document.getElementById('correctAnswers').innerHTML = correctAnswers;
        
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
    document.getElementById('progress-bar').style.width = `${percent}%`
}

function restart(){
    currentQuestion = 0;
    correctAnswers = 0;
    document.getElementById('question-body').style = ''; 
    document.getElementById('endScreen').style = 'display-none';
    resetButtons();
    init();


}





