

const progressCircle6 = document.getElementById("progressCircle6");
const progressLinks6 = document.querySelectorAll(".progress-link6");


// Initialize progress from localStorage
let progress6 = localStorage.getItem("progress6") ? parseInt(localStorage.getItem("progress6")) : 0;

// Update the progress circle on page load
updateProgressCircle6();



// Listen for clicks on progress1links
progressLinks6.forEach(link => {
  link.addEventListener("click", function (event) {
      event.preventDefault();

      const increment = parseInt(link.getAttribute("data-increment"));
     if (progress6+ increment  >= 1  && progress6+ increment  <= 100)  
      {
         progress6+= increment;
         window.location.href = 'subpage601.html';
         updateProgressCircle6();
         localStorage.setItem("progress6", progress6.toString());
      }
//        else if (progress6+ increment  >= 26 && progress6+ increment  <= 60) {
//            progress6+= increment;
//            window.location.href = 'subpage602.html';
//            updateProgressCircle6();
//            localStorage.setItem("progress6", progress6.toString());
//		}
//		else if (progress6+ increment  >= 61 && progress6+ increment  <= 76) {
//			progress6+= increment;
//			window.location.href = 'subpage603.html';
//			updateProgressCircle6();
//			localStorage.setItem("progress6", progress6.toString());
//			}
//		else if (progress6+ increment  >= 76 && progress6+ increment  <= 100) {
//			progress6+= increment;
//			window.location.href = 'index.html';
//			updateProgressCircle6();
//			localStorage.setItem("progress6", progress6.toString());
//			}
        else if (progress6+ increment  >= 99) {
          //progress+= increment;
          updateProgressCircle6();
          localStorage.setItem("progress6", progress6.toString());
   // Redirect back to index.html when progress is 100%
          window.location.href = 'index.html';
          localStorage.removeItem("progress6");
    console.log("Prayer with day and title is completed");
      }
  });
});

function updateProgressCircle6() {
    progressCircle6.textContent = `${progress6}%`;
    const angle = (progress6 / 100) * 360;
    progressCircle6.style.backgroundImage = `conic-gradient(#3698db ${angle}deg, #CCC ${angle}deg)`;
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
      localStorage.removeItem("progress6");
      // Stop the interval once the content is cleared
      clearInterval(intervalId);
    }
  }
  // Set interval to check the time every second
  var intervalId = setInterval(clearTextContent, 1000);

