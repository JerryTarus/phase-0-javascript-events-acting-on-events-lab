// Your code here

// Fetching the attribute by ID
const dodger = document.getElementById("dodger");

// Defining the Left Function
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

// Defining the Right Function
const rightDodger = document.getElementById('dodger');
function moveDodgerRight() {
  const leftNumbers = rightDodger.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10);
        
  if ( left > 0 ) {
    dodger.style.left = `${left + 1}px`;
  }
}
      
document.addEventListener('keydown', function(e) {
  if ( e.key === "ArrowRight" ) {
    moveDodgerRight();
  }
});
