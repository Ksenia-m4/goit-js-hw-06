// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
//1. Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
//2. Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
//3. Обновляй интерфейс новым значением переменной counterValue.

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");

decrementBtn.addEventListener("click", handlerDecrement);
incrementBtn.addEventListener("click", handlerIncrement);

let step = 0;

function handlerDecrement() {
  step -= 1;
  valueEl.textContent = step;
}

function handlerIncrement() {
  step += 1;
  valueEl.textContent = step;
}
