// Set the current date
const now = new Date();

// Set the end date for the giveaway (10 days from the current date)
const giveawayEnd = new Date(now.getTime() + 10 * 24 * 60 * 60 * 1000).getTime();

// Update the end date in the HTML
document.querySelector(".giveaway").textContent = "Giveaway ends on " + new Date(giveawayEnd).toDateString() + ", at 1.00pm";

// Update the countdown every second
const timer = setInterval(function() {

    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the remaining time
    const distance = giveawayEnd - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the remaining time
    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;

    // If the countdown is over, display a message and stop the timer
    if (distance < 0) {
        clearInterval(timer);
        document.querySelector(".expired-message").innerHTML = "Giveaway has ended!";
    }
}, 1000); // Update every second

// Initial check to see if the giveaway has already ended
if (giveawayEnd - now.getTime() < 0) {
    document.querySelector(".expired-message").innerHTML = "Giveaway has ended!";
}