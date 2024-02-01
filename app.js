function displaySlider() {
    document.getElementById("percentageValue").value = document.getElementById("percentage").value + "%";
};
displaySlider();
function displayToSlider() {
    document.getElementById("percentage").value = document.getElementById("percentageValue").value
};

function calculate() {
    alert("Result");
    document.getElementById("resultBox").innerText = 0.01 * (parseInt(document.getElementById("numberInput").value) * parseInt(document.getElementById("percentageValue").value));
}