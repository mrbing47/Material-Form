const secQ1 = document.getElementById("q1-section");
const secQ2 = document.getElementById("q2-section");
const secQ3 = document.getElementById("q3-section");
const secQ4 = document.getElementById("q4-section");
const secFinal = document.getElementById("final-section");

const ansQ1 = document.getElementById("ans1");
const ansQ2 = document.getElementById("ans2");
const ansQ3 = document.getElementById("ans3");
const ansQ4 = document.getElementById("ans4");

const btnQ1 = document.getElementById("q1-btn");
const btnQ2 = document.getElementById("q2-btn");
const btnQ3 = document.getElementById("q3-btn");
const btnQ4 = document.getElementById("q4-btn");

ansQ1.focus();

function changeQuestion(currSec, nextSec, direction) {
	currSec.style.visibility = "hidden";
	currSec.style.opacity = "0";

	if (direction === "up") {
		currSec.style.transform = "translateY(-500px)";
	}
	if (direction === "down") {
		currSec.style.transform = "translateY(500px)";
	}

	nextSec.style.visibility = "visible";
	nextSec.style.opacity = "1";
	nextSec.style.transform = "translateY(0px)";

	setTimeout(() => {
		if (nextSec.querySelector("input"))
			nextSec.querySelector("input").focus();
	}, 500);

	quesNumber = nextSec;

	console.log(nextSec);
}

var quesNumber = secQ1;
var timeout = 0;
var submitForm = false;

window.addEventListener("wheel", e => {
	if (!timeout) {
		if (e.deltaY > 0) {
			console.log("up");

			switch (quesNumber) {
				case secQ1:
					changeQuestion(secQ1, secQ2, "up");
					break;

				case secQ2:
					changeQuestion(secQ2, secQ3, "up");
					break;

				case secQ3:
					changeQuestion(secQ3, secQ4, "up");
					break;

				case secQ4:
					if (submitForm) changeQuestion(secQ4, secFinal, "up");

					break;
			}

			console.log(timeout);

			timeout = setTimeout(() => {
				console.log(quesNumber);
				timeout = 0;
			}, 750);
		}
		if (e.deltaY < 0) {
			console.log("down");

			switch (quesNumber) {
				case secQ2:
					changeQuestion(secQ2, secQ1, "down");
					break;

				case secQ3:
					changeQuestion(secQ3, secQ2, "down");
					break;

				case secQ4:
					changeQuestion(secQ4, secQ3, "down");
					break;

				case secFinal:
					changeQuestion(secFinal, secQ4, "down");
					break;
			}

			console.log(quesNumber);

			timeout = setTimeout(() => {
				console.log(quesNumber);
				timeout = 0;
			}, 750);
		}
	}
});

btnQ1.addEventListener("click", e => {
	/*
	! Add Input Verification here
	*/

	changeQuestion(secQ1, secQ2, "up");
});

btnQ2.addEventListener("click", e => {
	/*
	! Add Input Verification here
	*/

	changeQuestion(secQ2, secQ3, "up");
});

btnQ3.addEventListener("click", e => {
	/*
	! Add Input Verification here
	*/

	changeQuestion(secQ3, secQ4, "up");
});

btnQ4.addEventListener("click", e => {
	/*
	! Add Input Verification here
	*/

	console.log({
		name: ans1.value,
		college: ans2.value,
		stream: ans3.value,
		year: ans4.value
	});

	changeQuestion(secQ4, secFinal, "up");
	submitForm = true;

	/*
	 * Here send the user's response to the backend server to further process it
	 */
});

ansQ1.addEventListener("keydown", e => {
	if (e.key === "Enter") {
		btnQ1.dispatchEvent(
			new MouseEvent("click", { bubbles: false, cancelable: false })
		);
	}
});

ansQ2.addEventListener("keydown", e => {
	if (e.key === "Enter") {
		btnQ2.dispatchEvent(
			new MouseEvent("click", { bubbles: false, cancelable: false })
		);
	}
});

ansQ3.addEventListener("keydown", e => {
	if (e.key === "Enter") {
		btnQ3.dispatchEvent(
			new MouseEvent("click", { bubbles: false, cancelable: false })
		);
	}
});

ansQ4.addEventListener("keydown", e => {
	if (e.key === "Enter") {
		btnQ4.dispatchEvent(
			new MouseEvent("click", { bubbles: false, cancelable: false })
		);
	}
});
