function appendValue(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = '';
}

function deleteChar() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch (e) {
    alert("Invalid Expression");
  }
}
