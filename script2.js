

const progressCircle2 = document.getElementById("progressCircle2");
const progressLinks2 = document.querySelectorAll(".progress-link2");


// Initialize progress from localStorage
let progress2 = localStorage.getItem("progress2") ? parseInt(localStorage.getItem("progress2")) : 0;

// Update the progress circle on page load
updateProgressCircle2();


// Listen for clicks on progress1links
progressLinks2.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        const increment = parseInt(link.getAttribute("data-increment"));
        if (progress2+ increment  >= 1  && progress2+ increment  <= 25)  
		{
            progress2+= increment;
            window.location.href = 'subpage201.html';
            updateProgressCircle2();
            localStorage.setItem("progress2", progress2.toString());
        }
        else if (progress2+ increment  >= 26 && progress2+ increment  <= 50) {
            progress2+= increment;
            window.location.href = 'subpage202.html';
            updateProgressCircle2();
            localStorage.setItem("progress2", progress2.toString());
		}
		else if (progress2+ increment  >= 51 && progress2+ increment  <= 75) {
			progress2+= increment;
			window.location.href = 'subpage203.html';
			updateProgressCircle2();
			localStorage.setItem("progress2", progress2.toString());
			}
		else if (progress2+ increment  >= 76 && progress2+ increment  <= 100) {
			progress2+= increment;
			window.location.href = 'index.html';
			updateProgressCircle2();
			localStorage.setItem("progress2", progress2.toString());
			}
        else if (progress2+ increment  >= 101) {
            //progress+= increment;
            updateProgressCircle2();
            localStorage.setItem("progress2", progress2.toString());
     // Redirect back to index.html when progress is 100%
            window.location.href = 'index.html';
            localStorage.removeItem("progress2");
			console.log("Prayer with day and title is completed");
        }
    });
});

function updateProgressCircle2() {
    progressCircle2.textContent = `${progress2}%`;
    const angle = (progress2 / 100) * 360;
    progressCircle2.style.backgroundImage = `conic-gradient(#3498db ${angle}deg, #CCC ${angle}deg)`;
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
      localStorage.removeItem("progress2");
      // Stop the interval once the content is cleared
      clearInterval(intervalId);
    }
  }
  // Set interval to check the time every second
  var intervalId = setInterval(clearTextContent, 1000);