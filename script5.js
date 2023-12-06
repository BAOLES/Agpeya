

const progressCircle5 = document.getElementById("progressCircle5");
const progressLinks5 = document.querySelectorAll(".progress-link5");


// Initialize progress from localStorage
let progress5 = localStorage.getItem("progress5") ? parseInt(localStorage.getItem("progress5")) : 0;

// Update the progress circle on page load
updateProgressCircle5();


// Listen for clicks on progress1links
progressLinks5.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        const increment = parseInt(link.getAttribute("data-increment"));
       if (progress5+ increment  >= 1  && progress5+ increment  <= 100)  
	      {
           progress5+= increment;
           window.location.href = 'subpage501.html';
           updateProgressCircle5();
           localStorage.setItem("progress5", progress5.toString());
        }
//        else if (progress5+ increment  >= 26 && progress5+ increment  <= 50) {
//            progress5+= increment;
//            window.location.href = 'subpage502.html';
//            updateProgressCircle5();
//            localStorage.setItem("progress5", progress5.toString());
//		}
//		else if (progress5+ increment  >= 51 && progress5+ increment  <= 75) {
//			progress5+= increment;
//			window.location.href = 'subpage503.html';
//			updateProgressCircle5();
//			localStorage.setItem("progress5", progress5.toString());
//			}
//		else if (progress5+ increment  >= 76 && progress5+ increment  <= 100) {
//			progress5+= increment;
//			window.location.href = 'index.html';
//			updateProgressCircle5();
//			localStorage.setItem("progress5", progress5.toString());
//			}
          else if (progress5+ increment  >= 99) {
            //progress+= increment;
            updateProgressCircle5();
            localStorage.setItem("progress5", progress5.toString());
     // Redirect back to index.html when progress is 100%
            window.location.href = 'index.html';
            localStorage.removeItem("progress5");
			console.log("Prayer with day and title is completed");
        }
    });
  });

function updateProgressCircle5() {
  progressCircle5.textContent = `${progress5}%`;
    const angle = (progress5 / 100) * 360;
    progressCircle5.style.backgroundImage = `conic-gradient(#3498db ${angle}deg, #CCC ${angle}deg)`;
}


function clearTextContent() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Check if it's past midnight (00:00:00)
    if (hours === 0 && minutes === 0 && seconds >= 0) {
      // Clear text content for progress1 and progress2
      updateProgressCircle5();
      localStorage.removeItem("progress5");
      // Stop the interval once the content is cleared
      clearInterval(intervalId);
    }
  }
  // Set interval to check the time every second
  var intervalId = setInterval(clearTextContent, 1000);


