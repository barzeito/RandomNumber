const result = document.getElementById("result");
const error = document.getElementById("error");

function generateNumber() {
    let min = +document.getElementById("min").value;
    let max = +document.getElementById("max").value;

    if (min > max) {
        error.innerText = "Minimum can't be higher then Maximum!"
        result.innerText = "";
        return;
    }

    if (min == max) {
        ++max
        document.getElementById("max").value = max;
        generateNumber();
        return;
    }

    let generate = Math.floor(Math.random() * (max - min + 1)) + min;
    let time = new Date();
    let formattedTime = time.toLocaleString();
    result.innerText =
        `Result:
        ${generate}
        Min: ${min} Max: ${max}
        ${formattedTime}`
}