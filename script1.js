

const progressCircle1 = document.getElementById("progressCircle1");
const progressLinks1 = document.querySelectorAll(".progress-link1");


// Initialize progress from localStorage
let progress1 = localStorage.getItem("progress1") ? parseInt(localStorage.getItem("progress1")) : 0;

// Update the progress circle on page load
updateProgressCircle1();


// Listen for clicks on progress1links
progressLinks1.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        const increment = parseInt(link.getAttribute("data-increment"));
        if (progress1+ increment  >= 1  && progress1+ increment  <= 25)  
		{
            progress1+= increment;
            window.location.href = 'subpage101.html';
            updateProgressCircle1();
            localStorage.setItem("progress1", progress1.toString());
        }
        else if (progress1+ increment  >= 26 && progress1+ increment  <= 50) {
            progress1+= increment;
            window.location.href = 'subpage102.html';
            updateProgressCircle1();
            localStorage.setItem("progress1", progress1.toString());
		}
		else if (progress1+ increment  >= 51 && progress1+ increment  <= 75) {
			progress1+= increment;
			window.location.href = 'subpage103.html';
			updateProgressCircle1();
			localStorage.setItem("progress1", progress1.toString());
			}
		else if (progress1+ increment  >= 76 && progress1+ increment  <= 100) {
			progress1+= increment;
			window.location.href = 'index.html';
			updateProgressCircle1();
			localStorage.setItem("progress1", progress1.toString());
			}
        else if (progress1+ increment  >= 101) {
            //progress+= increment;
            updateProgressCircle1();
            localStorage.setItem("progress1", progress1.toString());
     // Redirect back to index.html when progress is 100%
            window.location.href = 'index.html';
            localStorage.removeItem("progress1");
			console.log("Prayer with day and title is completed");
        }
    });
});

function updateProgressCircle1() {
    progressCircle1.textContent = `${progress1}%`;
    const angle = (progress1 / 100) * 360;
    progressCircle1.style.backgroundImage = `conic-gradient(#3498db ${angle}deg, #CCC ${angle}deg)`;
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
      localStorage.removeItem("progress1");
      // Stop the interval once the content is cleared
      clearInterval(intervalId);
    }
  }
  // Set interval to check the time every second
  var intervalId = setInterval(clearTextContent, 1000);