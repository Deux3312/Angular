var student = {
    name: "",
    type: "student"
}
document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded(event) {
    document.getElementById('fullName').addEventListener("keyup", keyUp);
}

function keyUp(event) {
    calculateNumericOutput();
}

function calculateNumericOutput() {
    student.name = document.getElementById('fullName');
    var totalNameValue = 0;
    for (let i = 0; i < student.name.length; i++) {
        totalNameValue += student.name.charCodeAt(i);

    }
    var output = "Total Numeric value of person's name is " + totalNameValue;
    document.getElementById('output').innerHTML = output;
}