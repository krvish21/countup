// Set the date we're counting from
const countupDate = new Date("July 3, 2024 07:58:00").getTime();

// Update the count up every 1 second
const interval = setInterval(function() {
    
    // Get today's date and time
    const now = new Date().getTime();
    
    // Find the distance between now and the countup date
    const distance = now - countupDate;
    
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const milliseconds = distance % 1000;
    
    // Display the result in the elements with id="days", "hours", "minutes", "seconds"
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // Calculate equivalent total time
    const years = Math.floor(days / 365);
    const remainingDays = days % 365;
    const months = Math.floor(remainingDays / 30);
    const totalHours = Math.floor(distance / (1000 * 60 * 60));
    const totalMinutes = Math.floor(distance / (1000 * 60));
    const totalSeconds = Math.floor(distance / 1000);

    // Display the equivalent total time
    document.getElementById("total-years").innerText = `Total Years: ${years}`;
    document.getElementById("total-months").innerText = `Total Months: ${years * 12 + months}`;
    document.getElementById("total-days").innerText = `Total Days: ${days}`;
    document.getElementById("total-hours").innerText = `Total Hours: ${totalHours}`;
    document.getElementById("total-minutes").innerText = `Total Minutes: ${totalMinutes}`;
    document.getElementById("total-seconds").innerText = `Total Seconds: ${totalSeconds}`;
    document.getElementById("total-milliseconds").innerText = `Total Milliseconds: ${distance}`;
}, 1000);
