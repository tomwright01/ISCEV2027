let countdownDate;

function bodyLoad(){
    // trigger scripts on body load
    startCountdown()
}

function startCountdown() {
    // Set the target date and time
    alert("hiya");
    countdownDate = new Date(Date.UTC(2027, 06, 14, 08, 30));

    // Show the countdown clock
    document.getElementById("countdown").style.display = "flex";

    // Update the countdown every 1 second
    let x = setInterval(function() {
        // Get the current date and time
        let now = new Date().getTime()

        // Calculate distance between now and countdownDate
        let distance = countdownDate - now

        // Calculate days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Display the result
        document.getElementById("days").innerHTML = days.
            toString().padStart(2, '0');
        document.getElementById("hours").innerHTML = hours.
            toString().padStart(2, '0');
        document.getElementById("minutes").innerHTML = minutes.
            toString().padStart(2, '0');
        document.getElementById("seconds").innerHTML = seconds.
            toString().padStart(2, '0');

// If the countdown is over, display a message
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("countdown").innerHTML = "On Now";
        }
      }, 1000);
    }