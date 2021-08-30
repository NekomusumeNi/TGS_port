{

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

}

{

	let form21 = document.getElementById('forminput21');
	let form22 = document.getElementById('forminput22');
	let form23 = document.getElementById('forminput23');

	let line21 = document.getElementById('form21');
	let line22 = document.getElementById('form22');
	let line23 = document.getElementById('form23');

	let req21 = document.getElementById('req21');
	let req22 = document.getElementById('req22');
	let req23 = document.getElementById('req23');

	let need21 = document.getElementById('need21');
	let need22 = document.getElementById('need22');
	let need23 = document.getElementById('need23');

	let error21 = document.getElementById('error21');
	let error22 = document.getElementById('error22');
	let error23 = document.getElementById('error23');


	var formerror21 = 0;
	var formerror22 = 0;
	var formerror23 = 0;

	form21.onchange = function(){
		let value = this.value;
		if (value.trim() == "") {
			need21.classList.add('vh');
			error21.classList.toggle('vh');
			req21.classList.remove('dn');
			form21.className = 'input1new';
			formerror21 = 0;
		} else {
			need21.classList.add('vh');
			error21.classList.add('vh');
			req21.classList.add('dn');
			form21.className = 'input1';
			formerror21 = 1;
		}
	}
	form22.onchange = function(){
		let value = this.value;
		if (value.trim() == "") {
			need22.classList.add('vh');
			error22.classList.toggle('vh');
			req22.classList.remove('dn');
			form22.className = 'input1new';
			formerror22 = 0;
		} else {
			need22.classList.add('vh');
			error22.classList.add('vh');
			req22.classList.add('dn');
			form22.className = 'input1';
			formerror22 = 1;
		}
	}
	form23.onchange = function(){
		let value = this.value;
		if (value.trim() == "") {
			need23.classList.add('vh');
			error23.classList.toggle('vh');
			req23.classList.remove('dn');
			form23.className = 'input2new';
			formerror23 = 0;
		} else {
			need23.classList.add('vh');
			error23.classList.add('vh');
			req23.classList.add('dn');
			form23.className = 'input2';
			formerror23 = 1;
		}
	}

	closecard2 = document.getElementById('closecard2');
	success2 = document.getElementById('success2');

	let submit2 = document.getElementById('submit2');

	submit2.onclick = function(evt){
		evt.preventDefault();
		if (formerror21 == 0) {
			need21.classList.add('vh');
			error21.classList.toggle('vh');
			req21.classList.remove('dn');
			form21.className = 'input1new';
		}
		if (formerror22 == 0) {
			need22.classList.add('vh');
			error22.classList.toggle('vh');
			req22.classList.remove('dn');
			form22.className = 'input1new';

		}
		if (formerror23 == 0) {
			need23.classList.add('vh');
			error23.classList.toggle('vh');
			req23.classList.remove('dn');
			form23.className = 'input2new';
		}

		if (formerror21 == 1 && formerror22 == 1 && formerror23 == 1) {
			success2.classList.toggle('dn');

		}
	}



	closecard2.onclick = function(){
		success2.classList.toggle('dn');
		form21.value = "";
		form22.value = "";
		form23.value = "";
	}

}