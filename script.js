const quizData = [
    {
        question:'How old is the developer of this app?',
        a: '32',
        b: '12',
        c: '19',
        d: '78',
        correct: 'c'

    },{
        question: "Who is the current president of the United States?",
        a: 'Joe Biden',
        b: 'Barack Obama',
        c: 'Donald Trump',
        d: 'Ted Cruz',
        correct: 'a'
    },{
        question: 'What is the most common programming language in the world currently?',
        a: 'Python',
        b: 'HTML',
        c: 'C',
        d: 'JavaScript',
        correct: 'd'
    },{
        question: 'What does HTML stand for',
        a: 'Hypertext Markup Language',
        b: 'How To Make Lasagne',
        c: 'Helicopter Training Mayday Lake',
        d: 'Hungarian Territorial Mainland Legislation',
        correct: 'a'
    },{
        question: 'What year was JavaScript launched',
        a: '1990',
        b: '1996',
        c: '1997',
        d: 'None of the Above',
        correct: 'd'
    }
];
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselect();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
}

function getSelected(){
    
    let answer = undefined;
    
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselect() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () =>{
    //check to see the answer
    const answer = getSelected();
    console.log(answer);

    if(answer) {
        if (answer === quizData[currentQuiz].correct){
            score++;
        }
        
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML = `
            <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
            
            <button onclick="location.reload()">Reload</button>
        `;
        }
        }
});