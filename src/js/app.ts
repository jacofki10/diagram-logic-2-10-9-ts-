import { questions } from './questions';
import { redirect } from './redirect';
import './proguessBar';
import '../css/style.scss';

export const scoreData: any = { CP: 0, NP: 0, A: 0, FC: 0, AC: 0 };
const List: any = [];

// SHUFFLE QUESTIONS.JS //
function shuffle(a: any) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
const finalQuestions = shuffle(questions); // Remove shuffle() for not shuffle//
console.log(finalQuestions);

// INPUT IT IN data_area //
let html = '';
for (let i = 0; i < finalQuestions.length; i += 1) {
    html += `<div id='question_${i + 1}' class='diagramData'>`;
    html += `<div class='no'>${i + 1}</div>`;
    html += `<div class='total_number'>${finalQuestions[i].questionNumber}</div>`;
    html += `<div class='type'>${finalQuestions[i].type}</div>`;
    html += `<div class='question'>${finalQuestions[i].question}</div>`;
    html += '</div>';
}
document.getElementById('data_area').innerHTML = html;

// SET THE NEXT  QUESTIONS IN THE QUIZ //
const setupQuestion = (no: any) => {
    document.getElementById('question').innerHTML = List[no].Question;
    document.getElementById('q_answer1').setAttribute('data-type', List[no].Type);
    document.getElementById('q_answer1').setAttribute('data-no', no);
    document.getElementById('q_answer2').setAttribute('data-type', List[no].Type);
    document.getElementById('q_answer2').setAttribute('data-no', no);
    document.querySelector('#q_progress_rest').textContent = no;
};

// INIT QUIZ //
const init = () => {
    const myNodeList = document.querySelectorAll('.diagramData');
    [].forEach.call(myNodeList, function (element: any, index: any) {
        const Type = element.querySelector('.type').innerHTML;
        const Question = element.querySelector('.question').innerHTML;
        List[index + 1] = {
            Type,
            Question,
        };
    });

    setupQuestion(1);
};

// ON CLICK ACTION / /
const clickAnswer = (numbers: any, type: any, currentNo: number) => {
    if (scoreData[type] >= 8) return;
    scoreData[type] += numbers;
    console.log(`Question  ${currentNo} Answered  ${numbers}`, scoreData);
    nextQuestion(currentNo);
};
const buttons = document.querySelectorAll('#q_answer1, #q_answer2');
for (const button of buttons as any) {
    button.addEventListener('click', function (this: any) {
        const currentNo = Number(this.dataset.no);
        const { type } = this.dataset;
        if (this.id === 'q_answer1') {
            clickAnswer(1, type, currentNo);
        } else if (this.id === 'q_answer2') {
            clickAnswer(0, type, currentNo);
        }
    });
}
init();

// GET THE RESULT AND LINK TO HIS PATERN//
export const nextQuestion = (currentNo: number) => {

    if (currentNo === 10) {
        let scoreLevel = '';
        Object.keys(scoreData).forEach((type, index) => {
            if (type === 'CP') {
                scoreLevel += scoreData[type] + 1;
                console.log(scoreLevel, type);
            } else if (type === 'NP') {
                scoreLevel += scoreData[type] + 1;
                console.log(scoreLevel, type);
            } else if (type === 'A') {
                scoreLevel += scoreData[type] + 1;
                console.log(scoreLevel, type);
            } else if (type === 'FC') {
                scoreLevel += scoreData[type] + 1;
                console.log(scoreLevel, type);
            } else if (type === 'AC') {
                scoreLevel += scoreData[type] + 1;
                console.log(scoreLevel, type);
            }
        });
        sessionStorage.setItem('digDetail', scoreLevel);
        console.log(scoreLevel);
        redirect(scoreLevel);
        return false;
    }
    setupQuestion(currentNo + 1);
};
