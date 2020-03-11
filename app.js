const number = Number(prompt("Please enter a number: "));

function value(number) {
    if (number > 0) {
        output = `${number} is positive`;
}

    else {
        if (number < 0) {
            output = `${number} is negative`;
    }
        else {
            output = `${number} is zero`;
    }
}
return output;
}

const outputDiv = document.getElementById('output')
outputDiv.innerHTML = value(number)