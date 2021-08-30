let checker1 = 1;
let checker11 = 1;
let checker12 = 1;
let checker13 = 1;
let checker2 = 1;
let checker21 = 1;
let checker22 = 1;
let checker23 = 1;
let checker3 = 1;



table1.onclick = function(){
	var hidden = 'hidden' + this.id;
	hiddendiv = document.getElementById(hidden);
	hiddenClasses = hiddendiv.classList;
	hiddenClasses.toggle('hiddentable');
	var arrow = 'arrow' + this.id;

	var arrowdiv = document.getElementById(arrow);
	if (checker1 == 1) {
		arrowdiv.innerHTML = '<img src="pricesimages/arrowtop.png">';
		checker1 = 0;
	} else{
		arrowdiv.innerHTML = '<img src="pricesimages/headerarrow.png">';
		checker1 = 1;
	}
}
table11.onclick = function(){
	var hidden = 'hidden' + this.id;
	hiddendiv = document.getElementById(hidden);
	hiddenClasses = hiddendiv.classList;
	hiddenClasses.toggle('hiddentable');
	var arrow = 'arrow' + this.id;

	var arrowdiv = document.getElementById(arrow);
	if (checker11 == 1) {
		arrowdiv.innerHTML = '<img src="pricesimages/arrowtop.png">';
		checker11 = 0;
	} else{
		arrowdiv.innerHTML = '<img src="pricesimages/headerarrow.png">';
		checker11 = 1;
	}
}
table12.onclick = function(){
	var hidden = 'hidden' + this.id;
	hiddendiv = document.getElementById(hidden);
	hiddenClasses = hiddendiv.classList;
	hiddenClasses.toggle('hiddentable');
	var arrow = 'arrow' + this.id;

	var arrowdiv = document.getElementById(arrow);
	if (checker12 == 1) {
		arrowdiv.innerHTML = '<img src="pricesimages/arrowtop.png">';
		checker12 = 0;
	} else{
		arrowdiv.innerHTML = '<img src="pricesimages/headerarrow.png">';
		checker12 = 1;
	}
}
table13.onclick = function(){
	var hidden = 'hidden' + this.id;
	hiddendiv = document.getElementById(hidden);
	hiddenClasses = hiddendiv.classList;
	hiddenClasses.toggle('hiddentable');
	var arrow = 'arrow' + this.id;

	var arrowdiv = document.getElementById(arrow);
	if (checker13 == 1) {
		arrowdiv.innerHTML = '<img src="pricesimages/arrowtop.png">';
		checker13 = 0;
	} else{
		arrowdiv.innerHTML = '<img src="pricesimages/headerarrow.png">';
		checker13 = 1;
	}
}
table2.onclick = function(){
	var hidden = 'hidden' + this.id;
	hiddendiv = document.getElementById(hidden);
	hiddenClasses = hiddendiv.classList;
	hiddenClasses.toggle('hiddentable');
	var arrow = 'arrow' + this.id;

	var arrowdiv = document.getElementById(arrow);
	if (checker2 == 1) {
		arrowdiv.innerHTML = '<img src="pricesimages/arrowtop.png">';
		checker2 = 0;
	} else{
		arrowdiv.innerHTML = '<img src="pricesimages/headerarrow.png">';
		checker2 = 1;
	}
}
table21.onclick = function(){
	var hidden = 'hidden' + this.id;
	hiddendiv = document.getElementById(hidden);
	hiddenClasses = hiddendiv.classList;
	hiddenClasses.toggle('hiddentable');
	var arrow = 'arrow' + this.id;

	var arrowdiv = document.getElementById(arrow);
	if (checker21 == 1) {
		arrowdiv.innerHTML = '<img src="pricesimages/arrowtop.png">';
		checker21 = 0;
	} else{
		arrowdiv.innerHTML = '<img src="pricesimages/headerarrow.png">';
		checker21 = 1;
	}
}
table22.onclick = function(){
	var hidden = 'hidden' + this.id;
	hiddendiv = document.getElementById(hidden);
	hiddenClasses = hiddendiv.classList;
	hiddenClasses.toggle('hiddentable');
	var arrow = 'arrow' + this.id;

	var arrowdiv = document.getElementById(arrow);
	if (checker22 == 1) {
		arrowdiv.innerHTML = '<img src="pricesimages/arrowtop.png">';
		checker22 = 0;
	} else{
		arrowdiv.innerHTML = '<img src="pricesimages/headerarrow.png">';
		checker22 = 1;
	}
}
table23.onclick = function(){
	var hidden = 'hidden' + this.id;
	hiddendiv = document.getElementById(hidden);
	hiddenClasses = hiddendiv.classList;
	hiddenClasses.toggle('hiddentable');
	var arrow = 'arrow' + this.id;

	var arrowdiv = document.getElementById(arrow);
	if (checker23 == 1) {
		arrowdiv.innerHTML = '<img src="pricesimages/arrowtop.png">';
		checker23 = 0;
	} else{
		arrowdiv.innerHTML = '<img src="pricesimages/headerarrow.png">';
		checker23 = 1;
	}
}
table3.onclick = function(){
	var hidden = 'hidden' + this.id;
	hiddendiv = document.getElementById(hidden);
	hiddenClasses = hiddendiv.classList;
	hiddenClasses.toggle('hiddentable');
	var arrow = 'arrow' + this.id;

	var arrowdiv = document.getElementById(arrow);
	if (checker3 == 1) {
		arrowdiv.innerHTML = '<img src="pricesimages/arrowtop.png">';
		checker3 = 0;
	} else{
		arrowdiv.innerHTML = '<img src="pricesimages/headerarrow.png">';
		checker3 = 1;
	}
}



let form1 = document.getElementById('forminput1');
let form2 = document.getElementById('forminput2');
let form3 = document.getElementById('forminput3');

let line1 = document.getElementById('form1');
let line2 = document.getElementById('form2');
let line3 = document.getElementById('form3');

let req1 = document.getElementById('req1');
let req2 = document.getElementById('req2');
let req3 = document.getElementById('req3');

let need1 = document.getElementById('need1');
let need2 = document.getElementById('need2');
let need3 = document.getElementById('need3');

let error1 = document.getElementById('error1');
let error2 = document.getElementById('error2');
let error3 = document.getElementById('error3');


var formerror1 = 0;
var formerror2 = 0;
var formerror3 = 0;

form1.onchange = function(){
	let value = this.value;
	if (value.trim() == "") {
		need1.classList.add('vh');
		error1.classList.toggle('vh');
		req1.classList.remove('dn');
		form1.className = 'input1new';
		formerror1 = 0;
	} else {
		need1.classList.add('vh');
		error1.classList.add('vh');
		req1.classList.add('dn');
		form1.className = 'input1';
		formerror1 = 1;
	}
}
form2.onchange = function(){
	let value = this.value;
	if (value.trim() == "") {
		need2.classList.add('vh');
		error2.classList.toggle('vh');
		req2.classList.remove('dn');
		form2.className = 'input1new';
		formerror2 = 0;
	} else {
		need2.classList.add('vh');
		error2.classList.add('vh');
		req2.classList.add('dn');
		form2.className = 'input1';
		formerror2 = 1;
	}
}
form3.onchange = function(){
	let value = this.value;
	if (value.trim() == "") {
		need3.classList.add('vh');
		error3.classList.toggle('vh');
		req3.classList.remove('dn');
		form3.className = 'input2new';
		formerror3 = 0;
	} else {
		need3.classList.add('vh');
		error3.classList.add('vh');
		req3.classList.add('dn');
		form3.className = 'input2';
		formerror3 = 1;
	}
}

closecard = document.getElementById('closecard');
success = document.getElementById('success');

let submit = document.getElementById('submit');

submit.onclick = function(evt){
	evt.preventDefault();
	if (formerror1 == 0) {
		need1.classList.add('vh');
		error1.classList.toggle('vh');
		req1.classList.remove('dn');
		form1.className = 'input1new';
	}
	if (formerror2 == 0) {
		need2.classList.add('vh');
		error2.classList.toggle('vh');
		req2.classList.remove('dn');
		form2.className = 'input1new';

	}
	if (formerror3 == 0) {
		need3.classList.add('vh');
		error3.classList.toggle('vh');
		req3.classList.remove('dn');
		form3.className = 'input2new';
	}

	if (formerror1 == 1 && formerror2 == 1 && formerror3 == 1) {
		line1.classList.toggle('dn');
		success.classList.toggle('dn');
	}
}


closeform = document.getElementById('closeform');
button1 = document.getElementById('button1');

closeform.onclick = function(){
	line1.classList.toggle('dn');
}
button1.onclick = function(){
	line1.classList.toggle('dn');
}



closecard.onclick = function(){
	success.classList.toggle('dn');
	form1.value = "";
	form2.value = "";
	form3.value = "";
}