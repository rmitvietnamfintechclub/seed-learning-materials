let formGroupTag = document.querySelector("p#form-group");
console.log(formGroupTag);

formGroupTag.innerHTML = "Hello!";
formGroupTag.style.backgroundColor = "red";

let age = prompt("How old are you?");
console.log(age);

let message = "HPBD!";

if (age == 18) {
	message = "HP 18th BD!";
}

message = age == 18 ? "HP 18th BD!" : "HPBD!";

console.log(message);

let read = document.querySelector("#read");
read.addEventListener("click", myFunction);

function myFunction() {
  alert("I am reader and you are not!");
}
