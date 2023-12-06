

const progressCircle7 = document.getElementById("progressCircle7");
const progressLinks7 = document.querySelectorAll(".progress-link7");


// Initialize progress from localStorage
let progress7 = localStorage.getItem("progress7") ? parseInt(localStorage.getItem("progress7")) : 0;

// Update the progress circle on page load
updateProgressCircle7();


// Listen for clicks on progress1links
progressLinks7.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        const increment = parseInt(link.getAttribute("data-increment"));
       if (progress7+ increment  >= 1  && progress7+ increment  <= 100)  
	      {
           progress7+= increment;
           window.location.href = 'subpage701.html';
           updateProgressCircle7();
           localStorage.setItem("progress7", progress7.toString());
        }
//        else if (progress7+ increment  >= 26 && progress7+ increment  <= 70) {
//            progress7+= increment;
//            window.location.href = 'subpage702.html';
//            updateProgressCircle7();
//            localStorage.setItem("progress7", progress7.toString());
//		}
//		else if (progress7+ increment  >= 71 && progress7+ increment  <= 77) {
//			progress7+= increment;
//			window.location.href = 'subpage703.html';
//			updateProgressCircle7();
//			localStorage.setItem("progress7", progress7.toString());
//			}
//		else if (progress7+ increment  >= 76 && progress7+ increment  <= 100) {
//			progress7+= increment;
//			window.location.href = 'index.html';
//			updateProgressCircle7();
//			localStorage.setItem("progress7", progress7.toString());
//			}
          else if (progress7+ increment  >= 99) {
            //progress+= increment;
            updateProgressCircle7();
            localStorage.setItem("progress7", progress7.toString());
     // Redirect back to index.html when progress is 100%
            window.location.href = 'index.html';
            localStorage.removeItem("progress7");
			console.log("Prayer with day and title is completed");
        }
    });
  });

function updateProgressCircle7() {
  progressCircle7.textContent = `${progress7}%`;
    const angle = (progress7 / 100) * 360;
    progressCircle7.style.backgroundImage = `conic-gradient(#3498db ${angle}deg, #CCC ${angle}deg)`;
}


function clearTextContent() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Check if it's past midnight (00:00:00)
    if (hours === 0 && minutes === 0 && seconds >= 0) {
      // Clear text content for progress1 and progress2
      updateProgressCircle7();
      localStorage.removeItem("progress7");
      // Stop the interval once the content is cleared
      clearInterval(intervalId);
    }
  }
  // Set interval to check the time every second
  var intervalId = setInterval(clearTextContent, 1000);


