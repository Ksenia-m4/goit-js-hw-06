// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

const inputEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onClick);

function onClick(evt) {
  nameEl.textContent = evt.currentTarget.value;
  if (nameEl.textContent === "") {
    nameEl.textContent = "Anonymous";
  }
}
