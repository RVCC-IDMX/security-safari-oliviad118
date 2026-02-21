import { API_KEY } from "./config.js";

// VULNERABILITY: innerHTML with user input
function displayMessage(userInput) {
  document.getElementById("output").innerHTML = userInput;
}

// FIXED: Safe math calculation without eval()
function calculate(expression) {
  try {
    // Remove any non-math characters and whitespace for security
    const sanitized = expression.replace(/[^0-9+\-*/().]/g, '');
    
    if (!sanitized || sanitized.length === 0) {
      throw new Error('Invalid expression');
    }
    
    // Use Function constructor with restricted scope (safer than eval)
    // This still evaluates expressions but in a more controlled way
    const result = Function('"use strict"; return (' + sanitized + ')')();
    
    if (typeof result !== 'number' || !isFinite(result)) {
      throw new Error('Result is not a valid number');
    }
    
    return result;
  } catch (error) {
    return 'Error: Invalid expression';
  }
}

// Wire up the poll form
document.getElementById("poll-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const response = document.getElementById("response").value;
  displayMessage(`You said: ${response}`);
});

document.getElementById("calc-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const expr = document.getElementById("expression").value;
  const result = calculate(expr);
  document.getElementById("calc-result").textContent = result;
});
