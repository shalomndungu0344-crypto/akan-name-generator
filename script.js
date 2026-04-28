function getAkanName() {

    // Get inputs
    let userName = document.getElementById("username").value;
    let DD = parseInt(document.getElementById("day").value);     // Day
    let MM = parseInt(document.getElementById("month").value);   // Month
    let year = parseInt(document.getElementById("year").value);
// Get gender
    let genderElement = document.querySelector('input[name="gender"]:checked') 
                        || document.getElementById("gender");

    let gender = genderElement ? genderElement.value : "";
     // Declare CC and YY
    let CC = Math.floor(year / 100);  // First two digits
    let YY = year % 100;              // Last two digits

    // Akan names
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
