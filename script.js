let input = document.querySelector(".input");
let buttons = document.querySelectorAll(".number-opt, .operator-opt");
const equalButton = document.querySelector(".operator-opt:last-child");

let str = "";
let bracket = 1; // Toggle between '(' and ')'

// List of operators 
const operators = ["+", "-", "*", "/"];

// Checking if last char is an operator
function endsWithOperator(s) {
    return operators.includes(s.slice(-1));
}

// Checking balanced parentheses
function isBalancedBrackets(s) {
    let open = 0;
    for (let char of s) {
        if (char === "(") open++;
        else if (char === ")") open--;
        if (open < 0) return false; // closing before open
    }
    return open === 0;
}

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let value = e.target.textContent.trim();

        // Multiplication sign definition
        if (value === "X") {
            value = "*";
        }

        // Clear All
        if (value === "AC") {
            str = "";
            input.value = "";
            bracket = 1;
            return;
        }

        // Clear last character
        if (value === "C") {
            str = str.slice(0, -1);
            input.value = str;
            return;
        }

        // Evaluate

        // Keyboard -> Enter
        document.addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
                e.preventDefault();
                equalButton.click();
            }
        });

        // Button "="
        if (value === "=") {
            if (str.trim() === "") {
                input.value = "";
                return;
            }

            if (endsWithOperator(str)) {
                input.value = "Error";
                str = "";
                return;
            }

            if (!isBalancedBrackets(str)) {
                input.value = "Error";
                str = "";
                return;
            }

            try {
                let result = eval(str);
                console.log(`${str} = ${result}`);
                input.value = result;
                str = result.toString();
            } catch {
                input.value = "Error";
                str = "";
            }
            return;
        }

        // Brackets toggle
        if (value === "( )") {
            if (bracket === 1) {
                str += "(";
                bracket = 2;
            } else {
                str += ")";
                bracket = 1;
            }
            input.value = str;
            return;
        }

        // Percentage
        if (value === "%") {
            // Find last number segment in str
            const match = str.match(/(\d+\.?\d*)$/);
            if (match) {
                const numberStr = match[1];
                const numberValue = parseFloat(numberStr) / 100;
                str = str.slice(0, match.index) + numberValue.toString();
                input.value = str;
            }
            return;
        }

        // Preventing multiple operators in a row
        if (operators.includes(value)) {
            if (str === "") {
                // operator allowed at first char only if minus
                if (value !== "-") return;
            }
            if (endsWithOperator(str)) {
                // replacing last operator with new one
                str = str.slice(0, -1);
            }
            str += value;
            input.value = str;
            return;
        }

        // Preventing multiple decimals
        if (value === ".") {
            // Spliting by operators
            let parts = str.split(/[\+\-\*\/\%\(\)]/);
            let lastPart = parts[parts.length - 1];
            if (lastPart.includes(".")) {
                return;
            }
            str += value;
            input.value = str;
            return;
        }

        // Append
        if (!isNaN(value)) {
            str += value;
            input.value = str;
            return;
        }
    });
});
