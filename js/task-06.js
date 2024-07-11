// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", OnBlur);

function OnBlur(evt) {
  const inputEl = evt.currentTarget;
  //   console.log(inputEl.value);
  console.log(inputEl.dataset.length);
  console.dir(inputEl.value.length);

  if (Number(inputEl.dataset.length) === Number(inputEl.value.length)) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
    console.log(true);
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
