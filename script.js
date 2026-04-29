// select the form element and resetbutton from the html using its id "form-id" and "reset-form"
let formSubmit = document.getElementById("form-id");
let resetForm = document.getElementById("reset-form");

// add event listeners to the form and reset button to listen for submit and click events respectively
formSubmit.addEventListener("submit", displayName);
formSubmit.addEventListener("submit", handleForm);
resetForm.addEventListener("click", hideName);

// function to calculate the akan name based on the form input values and return a message with the akan name and the day of the week the user was born on
function getAkanName() {
  //extract the values currently selected in the input fields

  let fullName = document.getElementById("full-name").value;
  let gender = document.getElementById("gender").value;
  let birthDate = document.getElementById("birth-date").value;

  //to note: javascript stores days in an array where sunday is equal to index 0
  const days = ["Sunday", "Monday", "Tuedsay", "Wednesday", "Thursday", "Friday", "Saturday"]
    
  //akan names stored in an array the names are stored in index corresponding to the days list

  const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    

  const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
    
  // split the birth date into an array of year, month and day and convert the string values to integers to create a date object and get the day of the week the user was born on
  let birthDay = birthDate.split("-");

  // create a formal js date object
  // we subtract 1 from the month because JS months are 0-indexed (0 for January, 1 for February, etc.)
  let birthday = new Date(
    parseInt(birthDay[0]),
    parseInt(birthDay[1]) - 1,
    parseInt(birthDay[2]),
  );

  // getDay() returns a number (0-6) representing the day of the week
  let day1 = birthday.getDay();

  // Check the gender and return a formatted string using the name from the correct array index
  if (gender === "female") {
    if (gender === "female") {
      return `Hey ${fullName}, you were born on a ${days[day1]}.
    your Akan name is ${femaleNames[day1]} `;
    } else {
      return `Hey ${fullName}, you were born on a ${days[day1]}.
    your Akan name is ${maleNames[day1]} `;
    }
  }

  //prevents form from submitting hence prevents form refresh
  function handleForm(event) {
    event.preventDefault();
  }

  //displays results of the getAkanName function
  function displayName() {
    message = getAkanName();
    results = document.getElementById("results");
    results.textContent = message;
  }
  //this function clears the results when the user wants to start over
  function hideName() {
    results = document.getElementById("results");
    results.textContent = "";
  }
}
