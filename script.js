function getAkanName() {
  // Get inputs
  let userName = document.getElementById("username").value;
  let DD = parseInt(document.getElementById("day").value); // Day
  let MM = parseInt(document.getElementById("month").value); // Month
  let year = parseInt(document.getElementById("year").value);
  // Get gender
  let genderElement =
    document.querySelector('input[name="gender"]:checked') ||
    document.getElementById("gender");

  let gender = genderElement ? genderElement.value : "";

  // VALIDATION

  // Declare CC and YY
  let CC = Math.floor(year / 100); // First two digits
  let YY = year % 100; // Last two digits

  // Akan names
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
  // Declare d and calculate
  let d = Math.floor(
    (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7,
  );

  // Fix negative values
  if (d < 0) {
    d = (d + 7) % 7;
  }
  // Get Akan name
  let akanName;

  if (gender === "male") {
    akanName = maleNames[d];
  } else {
    akanName = femaleNames[d];
  }

  // Display result
  document.getElementById("result").textContent =
    userName + ", your Akan name is: " + akanName;
}