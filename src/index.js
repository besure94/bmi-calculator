import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function calculateBmi() {
  const heightInFeet = document.querySelector("#feet").value;
  const heightInInches = document.querySelector("#inches").value;
  const weightInPounds = document.querySelector("#pounds").value;
  const feetToInches = heightInFeet * 12;
  const heightTotal = parseInt(feetToInches) + parseInt(heightInInches);
  const bmiResult = ((weightInPounds / heightTotal**2) * 703).toFixed(1);
  document.querySelector("p#showCalculation").innerText = `Your BMI is ${bmiResult}.`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  calculateBmi();
}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleFormSubmission);
});