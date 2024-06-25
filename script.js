let a = ""; //first number
let b = ""; //second number
let sign = ""; //математична операція
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "x", "/"];

// Екран
let screen = document.querySelector(".cals-screen p");

function clearAll() {
  a = "";
  b = "";
  sign = "";
  finish = false;
  screen.textContent = 0;
}

document.querySelector(".element-ac").addEventListener("click", () => {
  clearAll();
});

document.querySelector(".elements").addEventListener("click", (event) => {
  // У обробнику події перевіряється, чи елемент, на якому сталася подія, має певні класи.
  // Якщо певний event у секції .elements при кліці не має певний клас .btn то return у цьому коді використовується для того, щоб вийти з функції,
  if (!event.target.classList.contains("btn")) return;
  // Якшо нажата кнопка .clearAll ac ( чи має цільовий елемент клас 'element-ac')
  /* Якщо елемент, на якому відбулася подія (event.target), має клас element-ac, виконується return. Знову ж таки, це означає, що функція завершується і більше нічого не робить. */
  if (event.target.classList.contains("element-ac")) return;

  screen.textContent = "";

  // Отримуємо нажату кнопку - зчитуємо текст
  const key = event.target.textContent;

  // Якшо натиснута клавіша 0-9 або . звносимо цифри в секцію
  if (digit.includes(key)) {
    if (b === "" && sign === "") {
      a += key;
      screen.textContent = a;
    } else if (a !== "" && b !== "" && finish) {
      b = key;
      finish = false;
      screen.textContent = b;
    } else {
      b += key;
      screen.textContent = b;
    }
  }
  // Якщо натиснута клавіша + - * /
  if (action.includes(key)) {
    sign = key;
    screen.textContent = sign;
    return;
  }

  //   Нажата =

  if (key === "=") {
    if (b === "") b = a;
    switch (sign) {
      case "+":
        a = +a + +b;
        break;

      case "-":
        a = a - b;
        break;

      case "x":
        a = a * b;
        break;

      case "/":
        a = a / b;
        break;
    }
    finish = true;
    screen.textContent = a;
  }
});
