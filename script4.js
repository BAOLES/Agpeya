

const progressCircle4 = document.getElementById("progressCircle4");
const progressLinks4 = document.querySelectorAll(".progress-link4");


// Initialize progress from localStorage
let progress4 = localStorage.getItem("progress4") ? parseInt(localStorage.getItem("progress4")) : 0;

// Update the progress circle on page load
updateProgressCircle4();


// Listen for clicks on progress1links
progressLinks4.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        const increment = parseInt(link.getAttribute("data-increment"));
        if (progress4+ increment  >= 1  && progress4+ increment  <= 25)  
		{
            progress4+= increment;
            window.location.href = 'subpage401.html';
            updateProgressCircle4();
            localStorage.setItem("progress4", progress4.toString());
        }
        else if (progress4+ increment  >= 26 && progress4+ increment  <= 50) {
            progress4+= increment;
            window.location.href = 'subpage402.html';
            updateProgressCircle4();
            localStorage.setItem("progress4", progress4.toString());
		}
		else if (progress4+ increment  >= 51 && progress4+ increment  <= 75) {
			progress4+= increment;
			window.location.href = 'subpage403.html';
			updateProgressCircle4();
			localStorage.setItem("progress4", progress4.toString());
			}
		else if (progress4+ increment  >= 76 && progress4+ increment  <= 100) {
			progress4+= increment;
			window.location.href = 'index.html';
			updateProgressCircle4();
			localStorage.setItem("progress4", progress4.toString());
			}
        else if (progress4+ increment  >= 101) {
            //progress+= increment;
            updateProgressCircle4();
            localStorage.setItem("progress4", progress4.toString());
     // Redirect back to index.html when progress is 100%
            window.location.href = 'index.html';
            localStorage.removeItem("progress4");
			console.log("Prayer with day and title is completed");
        }
    });
});

function updateProgressCircle4() {
    progressCircle4.textContent = `${progress4}%`;
    const angle = (progress4 / 100) * 360;
    progressCircle4.style.backgroundImage = `conic-gradient(#3498db ${angle}deg, #CCC ${angle}deg)`;
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
      localStorage.removeItem("progress4");
      // Stop the interval once the content is cleared
      clearInterval(intervalId);
    }
  }
  // Set interval to check the time every second
  var intervalId = setInterval(clearTextContent, 1000);

