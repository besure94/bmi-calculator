import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

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

function calculateBmiImperialSystem() {
  const heightInFeet = document.querySelector("#feet").value;
  const heightInInches = document.querySelector("#inches").value;
  const weightInPounds = document.querySelector("#pounds").value;
  const feetToInches = heightInFeet * 12;
  const heightTotal = parseInt(feetToInches) + parseInt(heightInInches);
  const bmiResult = ((weightInPounds / heightTotal**2) * 703).toFixed(1);
  document.querySelector("p#showCalculationImperial").innerText = `Your BMI is ${bmiResult}.`;
}

function resetImperialSystemForm() {
  document.getElementById("imperialSystem").reset();
  // document.querySelector("p#showCalculationImperial").innerText = "";
}

function calculateBmiMetricSystem() {
  const heightInCm = document.querySelector("#centimeters").value;
  const weightinKg = document.querySelector("#kilograms").value;
  const calculateBmi = ((weightinKg / heightInCm**2) * 10000).toFixed(1);
  document.querySelector("p#showCalculationMetric").innerText = `Your BMI is ${calculateBmi}.`;
}

function resetMetricSystemForm() {
  document.getElementById("metricSystem").reset();
}

function handleUserChoiceFormSubmission(event) {
  event.preventDefault();
  displayForm();
}

function handleImperialFormSubmission(event) {
  event.preventDefault();
  calculateBmiImperialSystem();
}

function resetImperialSystemFormSubmission(event) {
  event.preventDefault();
  resetImperialSystemForm();
}

function handleMetricFormSubmission(event) {
  event.preventDefault();
  calculateBmiMetricSystem();
}

function resetMetricSystemFormSubmission(event) {
  event.preventDefault();
  resetMetricSystemForm();
}

window.addEventListener("load", function() {
  document.querySelector("form#chooseSystem").addEventListener("submit", handleUserChoiceFormSubmission);
  document.querySelector("form#imperialSystem").addEventListener("submit", handleImperialFormSubmission);
  document.querySelector("form#metricSystem").addEventListener("submit", handleMetricFormSubmission);
  document.querySelector("form#imperialSystem").addEventListener("submit", resetImperialSystemFormSubmission());
  document.querySelector("form#metricSystem").addEventListener("submit", resetMetricSystemFormSubmission());
});