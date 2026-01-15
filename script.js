const clickBtn = document.getElementById("clickBtn");
const startBtn = document.getElementById("startBtn");
const timerDisplay = document.getElementById("timer");
const resultDisplay = document.getElementById("result");
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

let clickCount = 0;
let timeLeft = 10;
let rate = timeLeft;
let timer;

themeToggle.addEventListener("click",() =>{
    document.body.classList.toggle('dark-mode');

    if(document.body.classList.contains('dark-mode')){
        themeIcon.src = 'sun.png';
        themeIcon.alt = 'sun';
    }else{
        themeIcon.src = 'moon.png';
        themeIcon.alt = 'moon';
    }
});

clickBtn.addEventListener("click", () =>{
    clickCount++;
});

startBtn.addEventListener("click", () =>{
    clickCount =0;
    timeLeft =10;
    timerDisplay.textContent= `Time Left : ${timeLeft}`;
    resultDisplay.textContent="";
    clickBtn.disabled = false;
    startBtn.disabled = true;

    timer = setInterval(() =>{
        timeLeft--;
        if(timeLeft >= 0){
            timerDisplay.textContent = `Time Left : ${timeLeft}`;
        }

        if(timeLeft===0){
            clearInterval(timer);
            clickBtn.disabled = true;
            startBtn.disabled = false;
            const cps = (clickCount/rate).toFixed(2);
            resultDisplay.innerHTML =`
            <strong>Total Clicks:</strong> ${clickCount} <br>
            <strong>Clicks Per Second:</strong> ${cps}
          `;
        }
    },1000);
});