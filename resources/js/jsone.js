	const select = document.querySelector("select");
	const video = document.getElementById('video');
	const affect = document.getElementById('affect');
	const log = document.getElementById('log');
	const loglist = document.getElementById('loglist');



	function setAffect(selectValue) {
		//const choice = select.value;
		const choice = selectValue;


		switch (choice) {
		case "dummy":
			video.style.filter = 'grayscale(100%)';
			affect.style.backgroundColor='lightblue';
			break;
		case "grey":
			video.style.filter = 'grayscale(100%)';
			affect.style.backgroundColor='lightgray';
			break;
		case "blur":
			video.style.filter = 'blur(10px)';
			affect.style.backgroundColor='pink';
			break;
		default:
			video.style.filter = '';
			affect.style.backgroundColor='initial';
			break;
		}

		const para = document.createElement('p');
		loglist.appendChild(para);
		para.textContent = choice;

		log.innerHTML += ", " + choice;
	}
       
	
	navigator.mediaDevices.getUserMedia({ video: true })
            		.then(stream => { video.srcObject = stream;})
            		.catch(error => {console.error('Error accessing webcam:', error); });
	// for unknown reason, backgroundColor must be set for filter take affect
	video.style.backgroundColor = "green";


        select.addEventListener("change", () => setAffect(select.value));
