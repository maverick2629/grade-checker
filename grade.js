let grade1 = document.getElementById("grade1");
let grade2 = document.getElementById("grade2");
let grade3 = document.getElementById("grade3");
let grade4 = document.getElementById("grade4");

let errorMessage = document.getElementById("errorMessage");

let calculateButton = document.getElementById("calculate");
let resetButton = document.getElementById("reset");
let darkmode = document.getElementById("darkmode");

let gradeShow = document.getElementById("gradeShow");
let statusShow = document.getElementById("statusShow");



calculateButton.addEventListener("click", function () {

let grades = [
    grade1.value,
    grade2.value,
    grade3.value,
    grade4.value
];

gradeShow.innerText = "Average: --";
statusShow.innerText = "Academic Status: --";
errorMessage.innerText = "";


for (let i = 0; i < grades.length; i++) {

    if (grades[i] === "") {
        errorMessage.innerText = "Please fill all the fields";
        return;

    } else if (isNaN(Number(grades[i]))) {
        errorMessage.innerText = "Please enter a valid number";
        return;

    } else if (Number(grades[i]) < 0 || Number(grades[i]) > 100) {
        errorMessage.innerText =
            "Please enter a grade between 0 and 100";
        return;
    }
}


let total = 0;

for (let i = 0; i < grades.length; i++) {
    total += Number(grades[i]);
}

let average = total / grades.length;

gradeShow.innerText = "Average: " + average.toFixed(2);


if (average >= 90) {

    statusShow.innerText =
        "Academic Status: President's Lister (High Distinction)";

} else if (average >= 80) {

    statusShow.innerText =
        "Academic Status: Dean's Lister (Good Standing)";

} else if (average >= 75) {

    statusShow.innerText =
        "Academic Status: Passed (Regular Standing)";

} else {

    statusShow.innerText =
        "Academic Status: Academic Probation";
}


});


resetButton.addEventListener("click", function () {


grade1.value = "";
grade2.value = "";
grade3.value = "";
grade4.value = "";

errorMessage.innerText = "";

gradeShow.innerText = "Average: --";
statusShow.innerText = "Academic Status: --";


});



darkmode.addEventListener("click", function () {


if (darkmode.innerText === "Dark Mode") {

    document.body.classList.add("dark");

    darkmode.innerText = "Light Mode";

} else {

    document.body.classList.remove("dark");

    darkmode.innerText = "Dark Mode";
}


});
