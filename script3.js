

const progressCircle3 = document.getElementById("progressCircle3");
const progressLinks3 = document.querySelectorAll(".progress-link3");


// Initialize progress from localStorage
let progress3 = localStorage.getItem("progress3") ? parseInt(localStorage.getItem("progress3")) : 0;

// Update the progress circle on page load
updateProgressCircle3();


// Listen for clicks on progress1links
progressLinks3.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        const increment = parseInt(link.getAttribute("data-increment"));
        if (progress3+ increment  >= 1  && progress3+ increment  <= 25)  
		{
            progress3+= increment;
            window.location.href = 'subpage301.html';
            updateProgressCircle3();
            localStorage.setItem("progress3", progress3.toString());
        }
        else if (progress3+ increment  >= 26 && progress3+ increment  <= 50) {
            progress3+= increment;
            window.location.href = 'subpage302.html';
            updateProgressCircle3();
            localStorage.setItem("progress3", progress3.toString());
		}
		else if (progress3+ increment  >= 51 && progress3+ increment  <= 75) {
			progress3+= increment;
			window.location.href = 'subpage303.html';
			updateProgressCircle3();
			localStorage.setItem("progress3", progress3.toString());
		}
		else if (progress3+ increment  >= 76 && progress3+ increment  <= 100) {
			progress3+= increment;
			window.location.href = 'index.html';
			updateProgressCircle3();
			localStorage.setItem("progress3", progress3.toString());
		}
        else if (progress3+ increment  >= 101) {
            //progress+= increment;
            updateProgressCircle3();
            localStorage.setItem("progress3", progress3.toString());
     // Redirect back to index.html when progress is 100%
            window.location.href = 'index.html';
            localStorage.removeItem("progress3");
			console.log("Prayer with day and title is completed");
        }
    });
});

function updateProgressCircle3() {
    progressCircle3.textContent = `${progress3}%`;
    const angle = (progress3 / 100) * 360;
    progressCircle3.style.backgroundImage = `conic-gradient(#3498db ${angle}deg, #CCC ${angle}deg)`;
}

function clearTextContent() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Check if it's past midnight (00:00:00)
    if (hours === 0 && minutes === 0 && seconds >= 0) {
      // Clear text content for progress1 and progress2
      updateProgressCircle1();
      localStorage.removeItem("progress3");
      // Stop the interval once the content is cleared
      clearInterval(intervalId);
    }
  }
  // Set interval to check the time every second
  var intervalId = setInterval(clearTextContent, 1000);

