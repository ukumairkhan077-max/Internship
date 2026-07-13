const Clock = document.getElementById("time");

let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let timer;

start.addEventListener("click", () => {
    timer = setInterval(() => {
        let date = new Date();
        let time = date.toLocaleTimeString();
        Clock.innerText = time;
    }, 1000);
});

stop.addEventListener("click", () => {
    clearInterval(timer);
});

reset.addEventListener("click", () => {
    clearInterval(timer);
    Clock.innerText = "00:00:00";
});