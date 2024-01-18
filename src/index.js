import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function calculateBmiImperialSystem() {
  const heightInFeet = document.querySelector("#feet").value;
  const heightInInches = document.querySelector("#inches").value;
  const weightInPounds = document.querySelector("#pounds").value;
  const feetToInches = heightInFeet * 12;
  const heightTotal = parseInt(feetToInches) + parseInt(heightInInches);
  const bmiResult = ((weightInPounds / heightTotal**2) * 703).toFixed(1);
  document.querySelector("p#showCalculationImperial").innerText = `Your BMI is ${bmiResult}.`;
}

function displayForm() {
  const chooseSystem = document.querySelector("input[name='choice']:checked").value;
  const imperialDiv = document.getElementById("imperialDiv");
  const metricDiv = document.getElementById("metricDiv");
  if (chooseSystem == "imperial") {
    imperialDiv.removeAttribute("class", "hidden");
    metricDiv.setAttribute("class", "hidden");
  } else if (chooseSystem == "metric") {
    metricDiv.removeAttribute("class", "hidden");
    imperialDiv.setAttribute("class", "hidden");
  }
}

function handleUserChoiceFormSubmission(event) {
  event.preventDefault();
  displayForm();
}

function handleImperialFormSubmission(event) {
  event.preventDefault();
  calculateBmiImperialSystem();
}

window.addEventListener("load", function() {
  document.querySelector("form#chooseSystem").addEventListener("submit", handleUserChoiceFormSubmission);
  document.querySelector("form#imperialSystem").addEventListener("submit", handleImperialFormSubmission);
});