let omriuliel = () => {

	//	document.getElementById('omri').innerHTML = 'OmriUleil';

}

function togglePopup() {
       var popup = document.getElementById("myPopup");
       popup.classList.toggle("hidden");
       }

document.querySelector('.popuptext')
	.addEventListener('click', (e) => {
	e.stopPropagation();
	})
	// Change text from Omri to OmriUleil
	//	document.getElementById("h1").innerHTML = "OmriUleil";
	//	document.createTextNode("OmriUleil");
	//	document.getElementById('omri').innerHTML = 'OmriUleil';
