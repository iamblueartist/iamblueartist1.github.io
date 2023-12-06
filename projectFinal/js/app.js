// let xPosition = 300;
// let xChange = 1;






function draw(){

beginShape();
vertex(30, 20);

bezierVertex(80, 0, 80, 75, 30, 75);
bezierVertex(50, 80, 60, 25, 30, 20);
endShape();

bezierVertex(CENTER);
translate(width / 2, height / 2);
translate(p5.Vector.fromAngle(millis() / 1000, 40));
bezierVertex(0, 0, 20, 40);


if (keyIsPressed === true) {
    fill(0);
  } else {
    fill(255);
  }

}





// time func?



const targetDate = new Date('March 8, 2028 8:08:08').getTime();

// Update the countdown every second
const countdownInterval = setInterval(function() {
  const currentDate = new Date().getTime();
  const timeRemaining = targetDate - currentDate;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // Check if the countdown is over
  if (timeRemaining < 0) {
    clearInterval(countdownInterval);
    document.getElementById('countdown').innerHTML = 'Countdown expired!';
  }
}, 1000)


// } fix whatever this is gonna be :p

