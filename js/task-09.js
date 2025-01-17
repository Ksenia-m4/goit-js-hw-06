// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.

const btnEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");
btnEl.addEventListener("click", onClick);

function onClick() {
  const color = getRandomHexColor();
  spanEl.textContent = color;
  document.body.style.background = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
