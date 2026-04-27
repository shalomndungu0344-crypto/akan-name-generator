function getAkanName() {

    // Get inputs
    let userName = document.getElementById("username").value;
    let day = parseInt(document.getElementById("day").value);
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);

    let gender = document.querySelector('input[name="gender"]:checked');