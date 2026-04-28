function getAkanName() {
  // Get inputs
  let userName = document.getElementById("username").value;
  let DD = parseInt(document.getElementById("day").value);
  let MM = parseInt(document.getElementById("month").value);
  let year = parseInt(document.getElementById("year").value);

  

  // Get gender
  let genderElement = document.querySelector('input[name="gender"]:checked');
  let gender = genderElement ? genderElement.value : "";

  // Century and year parts
  let CC = Math.floor(year / 100);
  let YY = year % 100;

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

  // Calculate day index
  let d =
    (DD +
      Math.floor((13 * (MM + 1)) / 5) +
      YY +
      Math.floor(YY / 4) +
      Math.floor(CC / 4) -
      2 * CC) %
    7;

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
