//get form and use submit event to run the akan name function
let formSubmit = document.getElementById("form-id");
let resetForm = document.getElementById("reset-form");

formSubmit.addEventListener("submit", displayName);
formSubmit.addEventListener("submit", handleForm);
resetForm.addEventListener("click", hideName);

function getAkanName() {
  //capture form input values

  let fullName = document.getElementById("full-name").value;
  let gender = document.getElementById("gender").value;
  let birthDate = document.getElementById("birth-date").value;

  //to note: javascript stores days in a list like array where sunday is equal to index 0
  const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
   
  //akan names stored in an array the names are stored in index corresponding to the days list

  const maleNames = ["Kwasi", "kwadwo", "kwabena", "kwaku", "yaw", "kofi", "kwame"];
   
  const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    

  /* splits date input use the arguments to create a javascript date object
where the get day method returns a number that represents day of the week.
refer to above comments */
  let birthDay = birthDate.split("-");
  let birthday = new Date(
    parseInt(birthDay[0]),
    parseInt(birthDay[1]) - 1,
    parseInt(birthDay[2]),
  );
  let day1 = birthday.getDay();

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
//sets the text in the results div to empty when reset is clicked
function hideName() {
  results = document.getElementById("results");
  results.textContent = "";
}
