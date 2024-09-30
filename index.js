var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.ariaValue;

slider.oninput = function() {
    output.innerHTML = this.value;
}