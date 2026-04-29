// 1. Select the form and reset elements
let formSubmit = document.getElementById("form-id");
let resetForm = document.getElementById("reset-form");

// 2. Event Listeners
formSubmit.addEventListener("submit", handleForm);
formSubmit.addEventListener("submit", displayName);
resetForm.addEventListener("click", hideName);

/**
 * FORMULA CALCULATION FUNCTION
 * Uses the formula: d = ((cc/4 - 2*cc - 1) + ((5*yy)/4) + ((26*(mm+1))/10) + DD) % 7
 */
function calculateAkanName() {
  // Capture values
  let fullName = document.getElementById("full-name").value;
  let gender = document.getElementById("gender").value;
  let birthDate = document.getElementById("birth-date").value;

  // Arrays for days and names
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];
  const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
  ];

  // Split date components
  let dateParts = birthDate.split("-");
  let year = parseInt(dateParts[0]);
  let mm = parseInt(dateParts[1]);
  let dd = parseInt(dateParts[2]);

  /**
   * FORMULA LOGIC ADJUSTMENTS:
   * For Zeller-based formulas, Jan (1) and Feb (2) are counted as 13 and 14
   * of the previous year to make the math work correctly.
   */
  if (mm <= 2) {
    mm += 12;
    year -= 1;
  }

  let cc = Math.floor(year / 100);
  let yy = year % 100;

  // Applying your specific formula
  // We use Math.floor to ensure we work with whole numbers from the divisions
  let d =
    (Math.floor(cc / 4) -
      2 * cc -
      1 +
      Math.floor((5 * yy) / 4) +
      Math.floor((26 * (mm + 1)) / 10) +
      dd) %
    7;

  // Normalize result: if 'd' is negative, add 7 to keep it in the 0-6 range
  let dayIndex = Math.floor(d < 0 ? d + 7 : d);

  // Return the result string based on gender
  if (gender === "female") {
    return `Hey ${fullName}, you were born on a ${days[dayIndex]}. Your Akan name is ${femaleNames[dayIndex]}.`;
  } else {
    return `Hey ${fullName}, you were born on a ${days[dayIndex]}. Your Akan name is ${maleNames[dayIndex]}.`;
  }
}

// 3. Prevent form refresh
function handleForm(event) {
  event.preventDefault();
}

// 4. Validation and Display Logic
function displayName() {
  let fullName = document.getElementById("full-name").value;
  let birthDate = document.getElementById("birth-date").value;
  let results = document.getElementById("results");

  // VALIDATION: Ensure inputs are not empty
  if (fullName.trim() === "" || birthDate === "") {
    results.textContent =
      "Error: Please provide both your name and birth date.";
    results.style.color = "red";
  } else {
    // If valid, calculate and show name
    let message = calculateAkanName();
    results.textContent = message;
    results.style.color = "black";
  }
}

// 5. Clear display on reset
function hideName() {
  document.getElementById("results").textContent = "";
}
