let celebs = []
let time1, time2, time3, time4;
let interval1, interval2, interval3, interval4;
let running1, running2, running3, running4;
let timer1, timer2, timer3, timer4;
let start1, start2, start3, start4;
let pause1, pause2, pause3, pause4;
let stop1, stop2, stop3, stop4;
let duration1, duration2, duration3, duration4;
let duration_label1, duration_label2, duration_label3, duration_label4;

window.onload = async function() {
    const response = await fetch('https://raw.githubusercontent.com/Jakealtman1/celeb/main/celeb.csv')
    const data = await response.text()
    celebs = data.split('\n').map(entry => entry.trim())

    time1 = 60, time2 = 60, time3 = 60, time4 = 60;
    running1 = false, running2 = false, running3 = false, running4 = false;

    timer1 = document.getElementById('timer1');
    timer2 = document.getElementById('timer2');
    timer3 = document.getElementById('timer3');
    timer4 = document.getElementById('timer4');

    start1 = document.getElementById('start1');
    start2 = document.getElementById('start2');
    start3 = document.getElementById('start3');
    start4 = document.getElementById('start4');

    pause1 = document.getElementById('pause1');
    pause2 = document.getElementById('pause2');
    pause3 = document.getElementById('pause3');
    pause4 = document.getElementById('pause4');

    stop1 = document.getElementById('stop1');
    stop2 = document.getElementById('stop2');
    stop3 = document.getElementById('stop3');
    stop4 = document.getElementById('stop4');

    duration1 = document.getElementById('duration1');
    duration2 = document.getElementById('duration2');
    duration3 = document.getElementById('duration3');
    duration4 = document.getElementById('duration4');

    duration_label1 = document.getElementById('duration-label1');
    duration_label2 = document.getElementById('duration-label2');
    duration_label3 = document.getElementById('duration-label3');
    duration_label4 = document.getElementById('duration-label4');

    start1.addEventListener('click', startTimer1);
    pause1.addEventListener('click', pauseTimer1);
    stop1.addEventListener('click', stopTimer1);
    duration1.addEventListener('change', updateDuration1);

    start2.addEventListener('click', startTimer2);
    pause2.addEventListener('click', pauseTimer2);
    stop2.addEventListener('click', stopTimer2);
    duration2.addEventListener('change', updateDuration2);

    start3.addEventListener('click', startTimer3);
    pause3.addEventListener('click', pauseTimer3);
    stop3.addEventListener('click', stopTimer3);
    duration3.addEventListener('change', updateDuration3);

    start4.addEventListener('click', startTimer4);
    pause4.addEventListener('click', pauseTimer4);
    stop4.addEventListener('click', stopTimer4);
    duration4.addEventListener('change', updateDuration4);
}

function startTimer1() {
    if (!running1) {
        time1 = parseInt(duration1.value);
        interval1 = setInterval(() => {
            if (time1 === 0) stopTimer1();
            else updateTimer1(time1-1);
        }, 1000);
        running1 = true;
    }
}

function pauseTimer1() {
    if (!running1) {
        interval1 = setInterval(() => {
            if (time1 === 0) stopTimer1();
            else updateTimer1(time1-1);
        }, 1000);
        running1 = true;
        pause1.textContent = 'Pause';
    } else {
        clearInterval(interval1);
        running1 = false;
        pause1.textContent = 'Resume';
    }
}

function stopTimer1() {
    clearInterval(interval1);
    running1 = false; updateTimer1(0);
}

function updateTimer1(time) {
    time1 = time;
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    timer1.textContent = formattedTime;
}

function updateDuration1() {
    const time = parseInt(duration1.value);
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    duration_label1.textContent = formattedTime;
}

function startTimer2() {
    if (!running2) {
        time2 = parseInt(duration2.value);
        interval2 = setInterval(() => {
            if (time2 === 0) stopTimer2();
            else updateTimer2(time2-1);
        }, 1000);
        running2 = true;
    }
}

function pauseTimer2() {
    if (!running2) {
        interval2 = setInterval(() => {
            if (time2 === 0) stopTimer2();
            else updateTimer2(time2-1);
        }, 1000);
        running2 = true;
        pause2.textContent = 'Pause';
    } else {
        clearInterval(interval2);
        running2 = false;
        pause2.textContent = 'Resume';
    }
}

function stopTimer2() {
    clearInterval(interval2);
    running2 = false; updateTimer2(0);
}

function updateTimer2(time) {
    time2 = time;
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    timer2.textContent = formattedTime;
}

function updateDuration2() {
    const time = parseInt(duration2.value);
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    duration_label2.textContent = formattedTime;
}

function startTimer3() {
    if (!running3) {
        time3 = parseInt(duration3.value);
        interval3 = setInterval(() => {
            if (time3 === 0) stopTimer3();
            else updateTimer3(time3-1);
        }, 1000);
        running3 = true;
    }
}

function pauseTimer3() {
    if (!running3) {
        interval3 = setInterval(() => {
            if (time3 === 0) stopTimer3();
            else updateTimer3(time3-1);
        }, 1000);
        running3 = true;
        pause3.textContent = 'Pause';
    } else {
        clearInterval(interval3);
        running3 = false;
        pause3.textContent = 'Resume';
    }
}

function stopTimer3() {
    clearInterval(interval3);
    running3 = false; updateTimer3(0);
}

function updateTimer3(time) {
    time3 = time;
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    timer3.textContent = formattedTime;
}

function updateDuration3() {
    const time = parseInt(duration3.value);
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    duration_label3.textContent = formattedTime;
}

function startTimer4() {
    if (!running4) {
        time4 = parseInt(duration4.value);
        interval4 = setInterval(() => {
            if (time4 === 0) stopTimer4();
            else updateTimer4(time4-1);
        }, 1000);
        running4 = true;
    }
}

function pauseTimer4() {
    if (!running4) {
        interval4 = setInterval(() => {
            if (time4 === 0) stopTimer4();
            else updateTimer4(time4-1);
        }, 1000);
        running4 = true;
        pause4.textContent = 'Pause';
    } else {
        clearInterval(interval4);
        running4 = false;
        pause4.textContent = 'Resume';
    }
}

function stopTimer4() {
    clearInterval(interval4);
    running4 = false; updateTimer4(0);
}

function updateTimer4(time) {
    time4 = time;
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    timer4.textContent = formattedTime;
}

function updateDuration4() {
    const time = parseInt(duration4.value);
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    duration_label4.textContent = formattedTime;
}
