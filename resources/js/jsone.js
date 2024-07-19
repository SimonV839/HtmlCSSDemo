	const select = document.querySelector("select");
	const video = document.getElementById('video');

	function setAffect() {
		const choice = select.value;
		switch (choice) {
		case "grey":
			video.style.filter = 'grayscale(100%)';
			break;
		case "blur":
			video.style.filter = 'blur(10px)';
			break;
		default:
			video.style.filter = '';
			break;
		}
	}
       
	
	navigator.mediaDevices.getUserMedia({ video: true })
            		.then(stream => { video.srcObject = stream;})
            		.catch(error => {console.error('Error accessing webcam:', error); });
	// for unknown reason, backgroundColor must be set for filter take affect
	video.style.backgroundColor = "green";


        select.addEventListener("click", setAffect);
