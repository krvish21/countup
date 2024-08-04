function createConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.className = 'confetti';
    document.body.appendChild(confettiContainer);

    const colors = ['#ffeb3b', '#e14d72', '#6dd5ed', '#4caf50'];
    
    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.className = 'confetti-piece';
        confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confettiPiece.style.left = `${Math.random() * 100}vw`;
        confettiPiece.style.top = `${Math.random() * 100}vh`;
        confettiPiece.style.width = `${Math.random() * 10 + 5}px`;
        confettiPiece.style.height = confettiPiece.style.width;
        confettiPiece.style.animationDuration = `${Math.random() * 2 + 3}s`;
        confettiContainer.appendChild(confettiPiece);
    }
}

function updateTimer() {
    const countupDate = new Date("July 3, 2024 07:58:00").getTime();
    const now = new Date().getTime();
    const distance = now - countupDate;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const milliseconds = distance % 1000;

    const years = Math.floor(days / 365);
    const remainingDays = days % 365;
    const months = Math.floor(remainingDays / 30);
    const totalHours = Math.floor(distance / (1000 * 60 * 60));
    const totalMinutes = Math.floor(distance / (1000 * 60));
    const totalSeconds = Math.floor(distance / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    document.getElementById("total-years").innerText = `Total Years: ${years}`;
    document.getElementById("total-months").innerText = `Total Months: ${years * 12 + months}`;
    document.getElementById("total-days").innerText = `Total Days: ${days}`;
    document.getElementById("total-hours").innerText = `Total Hours: ${totalHours}`;
    document.getElementById("total-minutes").innerText = `Total Minutes: ${totalMinutes}`;
    document.getElementById("total-seconds").innerText = `Total Seconds: ${totalSeconds}`;
    document.getElementById("total-milliseconds").innerText = `Total Milliseconds: ${distance}`;

    const today = new Date().getDate();
    const greetingElement = document.getElementById('monthly-greeting');
    if (today === 3) {
        greetingElement.innerHTML = `🎉 <span>Happy ${years * 12 + months} Months!</span> 🎉`;
        if (!document.querySelector('.confetti')) {
            createConfetti();
        }
    } else {
        greetingElement.innerHTML = '';
        const confetti = document.querySelector('.confetti');
        if (confetti) {
            confetti.remove();
        }
    }
}

setInterval(updateTimer, 1000);

updateTimer();
