const inputArea = document.querySelector("#number-input");
const resultArea = document.querySelector("#resultArea");

const calculate = () => {
    let inputValue = Number(inputArea.value);
    resultArea.innerHTML = "";
    if (inputValue <= 0 || isNaN(inputValue)) {
        resultArea.innerHTML = "<p>Please enter a positive integer.</p>";
        return;
    }
    
    let steps = [];
    while (inputValue > 1) {
        let isEven = inputValue % 2 === 0;
        let nextValue = isEven ? inputValue / 2 : inputValue * 3 + 1;
        steps.push(`${inputValue} ${isEven ? '/ 2' : '* 3 + 1'} = ${nextValue} (${isEven ? 'Even' : 'Odd'})`);
        inputValue = nextValue;
    }
    steps.push(`Final Number: ${inputValue}`);
    
    let delay = 500;
    steps.forEach((stepText, index) => {
        setTimeout(() => {
            let step = document.createElement("p");
            step.classList.add("step");
            if (index === steps.length - 1) step.classList.add("final");
            step.textContent = stepText;
            resultArea.appendChild(step);
        }, index * delay);
    });
};

const reset = () => {
    inputArea.value = "";
    resultArea.innerHTML = "";
};