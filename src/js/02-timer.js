
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    btnStart: document.querySelector('[data-start]'),
    inputTime: document.querySelector('#datetime-picker'),
    timeDays: document.querySelector('[data-days]'),
    timeHours: document.querySelector('[data-hours]'),
    timeMin: document.querySelector('[data-minutes]'),
    timeSec: document.querySelector('[data-seconds]'),
}
refs.btnStart.disabled = true;
flatpickr('#datetime-picker', {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);  
        if (selectedDates[0] < new Date()) {
            alert("Please choose a date in the future")
            refs.btnStart.disabled = true;
            return;
        }
        refs.btnStart.disabled = false;
    }
});

const timer = {
    isActive: false,
    start() {
        if (this.isActive) {
            return;
        };
        this.isActive = true;
        selectData = new Date(`${refs.inputTime.value}`);
        const intervalId = setInterval(() => {
            const dateNow = new Date();
            const deltaTime = selectData - dateNow;
            if (deltaTime < 1000) {
                this.isActive = false;
                clearInterval(intervalId);
            }
            console.log(getTimeComponent(deltaTime));
            timeDisplay(getTimeComponent(deltaTime));
        }, 1000);
    }
}

refs.btnStart.addEventListener('click', timer.start);

function getTimeComponent(time) {
    const sec = addLeadingZero(Math.floor((time % (1000 * 60)) / 1000));
    const min = addLeadingZero(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const hours = addLeadingZero(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const days = addLeadingZero(Math.floor(time/(1000 * 60 * 60 * 24)));
    return {sec, min, hours, days};
}

function timeDisplay({ sec, min, hours, days }) {
    refs.timeDays.textContent = `${days}`;
    refs.timeHours.textContent = `${hours}`;
    refs.timeMin.textContent = `${min}`;
    refs.timeSec.textContent = `${sec}`;
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}



