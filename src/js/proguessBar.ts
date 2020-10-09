// PROGUESS BAR INCREASE
const buttons = document.querySelectorAll('#q_answer1, #q_answer2');
let meterMargin = 25;
let progress = 0;
for (const button of buttons) {
    button.addEventListener('click', function () {
        progress += 10;
        meterMargin += 7;
        if ( (<HTMLElement>document.querySelector('#meter_area')).style.marginLeft === `88%`) {return;
        } else {
  (<HTMLElement>document.querySelector('#meter_area')).style.marginLeft = `${meterMargin}%`; }
        (<HTMLElement>document.querySelector('.progress-bar')).style.width = `${progress}%`;
    });
}
