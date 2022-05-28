const refs = {
    buttonStart: document.querySelector('[data-start]'),
    buttonStop: document.querySelector('[data-stop]'),
    body: document.querySelector('body'),
}

const switcher = {
    intervalI: null,
    isActive: false,
    start() {
        if (this.isActive) {
            return;
        };
        this.isActive = true;
        this.intervalId = setInterval(() => {
            console.log(getRandomHexColor());
            bodySwitchColor(getRandomHexColor());
        }, 1000);
    },
    stop() {
        this.isActive = false;
        clearInterval(this.intervalId);
    },
}

refs.buttonStart.addEventListener('click', () => {
    switcher.start();
});
refs.buttonStop.addEventListener('click', () => {
    switcher.stop();
});

function bodySwitchColor(color) {
    refs.body.style.backgroundColor = `${color}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}