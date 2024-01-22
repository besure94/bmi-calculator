import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function hideBmiResultsOnImperialFormReset() {
  document.querySelector("p#showCalculationImperial").setAttribute("class", "hidden");
}

function hideBmiResultsOnMetricFormReset() {
  document.querySelector("p#showCalculationMetric").setAttribute("class", "hidden");
}

function resetImperialSystemForm() {
  document.getElementById("imperialSystem").reset();
}

function resetMetricSystemForm() {
  document.getElementById("metricSystem").reset();
}

window.addEventListener("load", function() {
  document.querySelector("form#chooseSystem").addEventListener("submit", function(event) {
    event.preventDefault();
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
  });

  document.querySelector("form#imperialSystem").addEventListener("submit", function(e) {
    e.preventDefault();
    const heightInFeet = document.querySelector("#feet").value;
    const heightInInches = document.querySelector("#inches").value;
    const weightInPounds = document.querySelector("#pounds").value;
    const feetToInches = heightInFeet * 12;
    const heightTotal = parseInt(feetToInches) + parseInt(heightInInches);
    const bmiResult = ((weightInPounds / heightTotal**2) * 703).toFixed(1);
    document.querySelector("p#showCalculationImperial").removeAttribute("class", "hidden");
    document.querySelector("p#showCalculationImperial").innerText = `Your BMI is ${bmiResult}.`;

    document.getElementById("resetForm").addEventListener("click", function (resetEvent) {
      resetEvent.preventDefault();
      resetImperialSystemForm();
      hideBmiResultsOnImperialFormReset();
    });
  });

  document.querySelector("form#metricSystem").addEventListener("submit", function(submitMetricEvent) {
    submitMetricEvent.preventDefault();
    const heightInCm = document.querySelector("#centimeters").value;
    const weightinKg = document.querySelector("#kilograms").value;
    const calculateBmi = ((weightinKg / heightInCm**2) * 10000).toFixed(1);
    document.querySelector("p#showCalculationMetric").removeAttribute("class", "hidden");
    document.querySelector("p#showCalculationMetric").innerText = `Your BMI is ${calculateBmi}.`;

    document.getElementById("resetButton").addEventListener("click", function(resetMetricEvent) {
      resetMetricEvent.preventDefault();
      resetMetricSystemForm();
      hideBmiResultsOnMetricFormReset();
    });
  });
});