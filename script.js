const display = document.getElementById("display");

/* ---------- Core Functions ---------- */

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        if (display.value.trim() === "") return;

        const result = eval(display.value);

        if (!isFinite(result)) {
            throw new Error("Math error");
        }

        display.value = result;
    } catch {
        display.value = "Error";
        setTimeout(clearDisplay, 1000);
    }
}

/* ---------- Keyboard Support ---------- */

document.addEventListener("keydown", (e) => {
    if ("0123456789+-*/.%".includes(e.key)) {
        appendValue(e.key);
    } 
    else if (e.key === "Enter") {
        calculateResult();
    } 
    else if (e.key === "Backspace") {
        deleteLast();
    } 
    else if (e.key === "Escape") {
        clearDisplay();
    }
});
