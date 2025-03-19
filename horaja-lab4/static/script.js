x = 5;
y = 7;
z = x + y;
console.log(z);

A = "Hello ";
B = "world!";
C = A + B;
console.log(C);

function SumNPrint (x1, x2) {
	let x3 = x1 + x2;
	console.log(x3);
}

SumNPrint(x, y);

SumNPrint(A, B);

if (C.length > z) {
	console.log(C);
} else if (C.length < z) {
	console.log(z);
} else {
	console.log("good job!");
}

L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(fruitArray) {
	fruitArray.forEach(function(fruit, index) {
			if (fruit === "Banana") {
					alert("We found a banana at " + index);
			}
	});
}

// findTheBanana(L1);
// findTheBanana(L2);

function greetingFunc() {
	let d = new Date();
	
	let h = d.getHours();
	
	let E = document.getElementById("greeting");

	if (h < 12) {
		E.innerHTML = "Good morning, I'm Husain";
	} else if (h < 18) {
		E.innerHTML = "Good afternoon, I'm Husain";
	} else if (h < 20) {
		E.innerHTML = "Good evening, I'm Husain";
	} else if ((h < 24) || (h < 5)) {
		E.innerHTML = "Good night, I'm Husain";
	}
}

greetingFunc();

function addYear() {
	let d = new Date();
	let year = d.getFullYear();
	let copyElement = document.getElementById("copyYear");
	copyElement.innerHTML = copyElement.innerHTML + " " + year;
}

function showList() {
	document.getElementById("funList").style.display = "block";
	document.getElementById("showListBtn").style.display = "none";
}

$(document).ready(function() {
	$("#read-more").click(function() {
		$("#long-bio").show();
		$("#read-more").hide();
		$("#read-less").show();
	});

	$("#read-less").click(function() {
		$("#long-bio").hide();
		$("#short-bio").show();
		$("#read-less").hide();
		$("#read-more").show();
	});
});

function validateForm(event) {
	event.preventDefault();
	
	const nameInput = document.getElementById("name");
	const emailInput = document.getElementById("email");
	const commentInput = document.getElementById("comment");
	
	const nameError = document.getElementById("nameError");
	const emailError = document.getElementById("emailError");
	const commentError = document.getElementById("commentError");
	const formStatus = document.getElementById("formStatus");
	
	nameError.textContent = "";
	emailError.textContent = "";
	commentError.textContent = "";
	formStatus.textContent = "";
	
	let isValid = true;
	
	if (!nameInput.checkValidity()) {
		nameError.textContent = "Please enter your name";
		isValid = false;
	}
	
	if (!emailInput.checkValidity()) {
		emailError.textContent = "Please enter a valid email address";
		isValid = false;
	}
	
	if (!commentInput.checkValidity()) {
		commentError.textContent = "Please enter your message";
		isValid = false;
	}
	
	if (isValid) {
		formStatus.textContent = "Form submitted successfully!";
		formStatus.className = "form-status success";
	} else {
		formStatus.textContent = "Please fill in all required fields";
		formStatus.className = "form-status error";
	}
	
	return isValid;
}