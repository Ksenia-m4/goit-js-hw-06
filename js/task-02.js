// Напиши скрипт, который для каждого элемента массива ingredients:
//1. Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

// oldschool =>
// const elements = [];
// for (let i = 0; i < ingredients.length; i += 1) {
//   const item = document.createElement("li");
//   item.textContent = ingredients[i];
//   item.classList.add("item");
//   elements.push(item);
// }

// list.append(...elements);

const elements = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");
  return item;
});

// console.log(elements);
list.append(...elements);
