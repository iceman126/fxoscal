'use strict';

function plus() {
	//e.preventDefault();
	var first = parseFloat(document.getElementById('first').value);
	var second = parseFloat(document.getElementById('second').value);
	var result = first + second;
	//alert(result);
	document.getElementById("calc_result").innerHTML = result;
};
function minus() {
	//e.preventDefault();
	var first = parseFloat(document.getElementById('first').value);
	var second = parseFloat(document.getElementById('second').value);
	var result = first - second;
	//alert(result);
	document.getElementById("calc_result").innerHTML = result;
};
function multi() {
	//e.preventDefault();
	var first = parseFloat(document.getElementById('first').value);
	var second = parseFloat(document.getElementById('second').value);
	var result = first * second;
	//alert(result);
	document.getElementById("calc_result").innerHTML = result;
};
function divide() {
	//e.preventDefault();
	var first = parseFloat(document.getElementById('first').value);
	var second = parseFloat(document.getElementById('second').value);
	var result = first / second;
	//alert(result);
	document.getElementById("calc_result").innerHTML = result;
};


function init() {
	document.getElementById('plus').addEventListener('click', plus, false);
	document.getElementById('minus').addEventListener('click', minus, false);
	document.getElementById('multi').addEventListener('click', multi, false);
	document.getElementById('divide').addEventListener('click', divide, false);
};


window.addEventListener('load', function browserOnLoad(evt) {
	window.removeEventListener('load', browserOnLoad);
	init();
});