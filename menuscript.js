let mobmenublock = document.getElementById('mobmenublock');
let mobmenubutton = document.getElementById('mobmenubutton');

let serviceslink = document.getElementById('serviceslink');
let servicesbutton2 = document.getElementById('servicesbutton2');
let servicesbutton3 = document.getElementById('servicesbutton3');

let services1 = document.getElementById('services1');
let services2 = document.getElementById('services2');
let services3 = document.getElementById('services3');

let services1check = 0;
let services2check = 0;
let services3check = 0;




mobmenubutton.onclick = function(){
	mobmenublock.classList.toggle('mobilemenu')
}

serviceslink.onclick = function(evt){
	if (window.innerWidth <= 768) {
		evt.preventDefault();
		if (services1check == 0) {
			services1.style.display = 'block';
			services1check = 1;
		} else {
			services1.style.display = 'none';
			services1check = 0;
		}
		
	}
}

servicesbutton2.onclick = function(evt){
	if (window.innerWidth <= 768) {
		evt.preventDefault();
		if (services2check == 0) {
			services2.style.display = 'block';
			services2check = 1;
		} else {
			services2.style.display = 'none';
			services2check = 0;
		}
		
	}
}

servicesbutton3.onclick = function(evt){
	if (window.innerWidth <= 768) {
		evt.preventDefault();
		if (services3check == 0) {
			services3.style.display = 'block';
			services3check = 1;
		} else {
			services3.style.display = 'none';
			services3check = 0;
		}
		
	}
}