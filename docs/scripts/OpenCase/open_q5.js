import { text_q5_1 , text_q5_2 , text_q5_3 , text_q5_4 , text_q5_5 , text_q5_6 , text_q5_7 , text_q5_8 } from "../tasks.js";
import { second_example_q5_1, second_example_q5_2, second_example_q5_3, second_example_q5_4, second_example_q5_5, second_example_q5_6, second_example_q5_7, second_example_q5_8 } from "../tasks.js";
import { text_example_q5_1, text_example_q5_2, text_example_q5_3, text_example_q5_4, text_example_q5_5, text_example_q5_6, text_example_q5_7, text_example_q5_8 } from "../tasks.js";
import { function_name_q5_1, function_name_q5_2, function_name_q5_3, function_name_q5_4, function_name_q5_5, function_name_q5_6, function_name_q5_7, function_name_q5_8 } from "../tasks.js";
import { test_q5_1, test_q5_2, test_q5_3, test_q5_4, test_q5_5, test_q5_6, test_q5_7, test_q5_8 } from "../tasks.js";
import { userFunction_q5_1, userFunction_q5_2, userFunction_q5_3, userFunction_q5_4, userFunction_q5_5, userFunction_q5_6, userFunction_q5_7, userFunction_q5_8 } from "../tasks.js";
const cells = 61 //количество предметов (скорость рулетки)
const items = [
  {nameQ5: 'All Nines', img: '../images/Task_Icons/q5/q5_1.png',taskTextQ5 : text_q5_1,SecondExampleQ5 : second_example_q5_1 ,exampleQ5 : text_example_q5_1 ,testsQ5 : test_q5_1 ,FuncNameQ5: function_name_q5_1,FuncArgsQ5 : userFunction_q5_1, chance: 12.29},
  {nameQ5: 'Ones and Zeros', img: '../images/Task_Icons/q5/q5_2.png',taskTextQ5 : text_q5_2,SecondExampleQ5 : second_example_q5_2 ,exampleQ5 : text_example_q5_2 ,testsQ5 : test_q5_2 ,FuncNameQ5: function_name_q5_2, FuncArgsQ5: userFunction_q5_2, chance: 12.29},
  {nameQ5: 'String reverse slicing 101', img: '../images/Task_Icons/q5/q5_3.png',taskTextQ5 : text_q5_3,SecondExampleQ5 : second_example_q5_3 ,exampleQ5 : text_example_q5_3 , testsQ5 : test_q5_3 , FuncNameQ5 : function_name_q5_3,FuncArgsQ5: userFunction_q5_3, chance: 12.29},
  {nameQ5: 'Find the missing element between two arrays', img: '../images/Task_Icons/q5/q5_4.png',taskTextQ5 : text_q5_4,SecondExampleQ5 : second_example_q5_4 ,exampleQ5 : text_example_q5_4 , testsQ5: test_q5_4 ,FuncNameQ5 : function_name_q5_4,FuncArgsQ5: userFunction_q5_4, chance: 12.29},
  {nameQ5: 'Even numbers in an array', img: '../images/Task_Icons/q5/q5_5.png',taskTextQ5 : text_q5_5,SecondExampleQ5 : second_example_q5_5 ,exampleQ2 : text_example_q5_5 ,testsQ5 : test_q5_5 ,FuncNameQ5: function_name_q5_5, FuncArgsQ5: userFunction_q5_5, chance: 12.29},
  {nameQ5: 'Digitize', img: '../images/Task_Icons/q5/q5_6.png',taskTextQ5 : text_q5_6,SecondExampleQ5 : second_example_q5_6 ,exampleQ5 : text_example_q5_6 ,testsQ5 : test_q5_6 ,FuncNameQ5: function_name_q5_6,FuncArgsQ5: userFunction_q5_6, chance: 12.29},
  {nameQ5: 'Find the divisors!', img: '../images/Task_Icons/q5/q5_7.png',taskTextQ5 : text_q5_7,SecondExampleQ5 : second_example_q5_7 ,exampleQ5 :text_example_q5_7 ,testsQ5 : test_q5_7 ,FuncNameQ5: function_name_q5_7, FuncArgsQ5: userFunction_q5_7, chance: 12.29},
  {nameQ5: 'Relatively Prime Numbers', img: '../images/Task_Icons/q5/q5_8.png', taskTextQ5 : text_q5_8,SecondExampleQ5 : second_example_q5_8, exampleQ5 : text_example_q5_8, testsQ5 : test_q5_8, FuncNameQ5: function_name_q5_8, FuncArgsQ5: userFunction_q5_8, chance: 12.29},
]
// создать отдельный файл с текстом заданий, и импортировать их в const items
function getItem() {
  let item;
  const totalChances = items.reduce((acc, curr) => acc + curr.chance, 0) ;

  while (!item) {
    const chance = Math.floor(Math.random() * totalChances);
    let cumulativeChance = 0;
    
    for (const elm of items) {
      cumulativeChance += elm.chance;
      if (chance < cumulativeChance) {
        item = elm;
        break;
      }
    }
  }

  return item;
}

function generateItems() {
  document.querySelector('.list').remove()
   document.querySelector('.scope').innerHTML = `
     <ul class="list"></ul>
   `
  
  const list = document.querySelector('.list')

  for (let i = 0; i < cells; i++) {
    const item = getItem()
    
    const li = document.createElement('li')
    li.setAttribute('data-item', JSON.stringify(item))
    li.classList.add('list__item')
    li.innerHTML = `
      <img src="${item.img}" alt="" />
    `

    list.append(li)
  }
}

generateItems()

let isStarted = false
let isFirstStart = true
let item
let resultContainer
let resultTitle
let resultImage
let data1;
function start() {
  
  const startButton = document.getElementById('startButton');
  startButton.disabled = true; // Disable the button
  startButton.style.display = 'none'; // Скрываем кнопку "Крутить"

  if (isStarted) return;
  else isStarted = true;

  if (!isFirstStart) generateItems();
  else isFirstStart = false;
  const list = document.querySelector('.list');

  setTimeout(() => {
    list.style.left = '50%';
    list.style.transform = 'translate3d(-50%, 0, 0)';
  }, 0);

  item = list.querySelectorAll('li')[30]; // получаем 30-й подсвеченный элемент
  resultContainer = document.getElementById('resultContainer'); // получаем контейнер для результата
  resultTitle = document.getElementById('resultTitle'); // получаем заголовок результата
  resultImage = document.getElementById('resultImage');   // получаем изображение результата

  setTimeout(() => {
    data1 = JSON.parse(item.getAttribute('data-item'));
    //resultTitle.textContent = data1.name; // выводим имя выпавшего элемента
    //resultImage.src = data1.img; // выводим изображение выпавшего элемента

    function compareNames(object, reqItem) {
      let result;
      object.forEach((item) => {
        if (item.nameQ5 === reqItem) {  
          result = item;
        }
      });
      return result;
    }
    const result = compareNames(items, data1.nameQ5); // сравниваем имя выпавшего элемента с именами предметов
    
    localStorage.setItem('dataToPass5', JSON.stringify(result)); // сохраняем данные в localStorage

    const dataToPass = JSON.parse(localStorage.getItem('dataToPass5'));
    console.log(dataToPass) // получаем данные из localStorage
    
    
  }, 5000);
  resultContainer.style.display = 'block';

  list.addEventListener('transitionend', () => {
    isStarted = false;
    item.classList.add('active');
    //const data = JSON.parse(item.getAttribute('data-item').name);
  }, {once: true});
  list.addEventListener('transitionend', () => {
    isStarted = false;
    item.classList.add('active');
    const data = JSON.parse(item.getAttribute('data-item'));


    startButton.disabled = false; // Enable the button
    function showGoToTaskButton() {
      const goToTaskButton = document.getElementById('goToTaskButton');
      goToTaskButton.style.display = 'inline-block';
    }
    showGoToTaskButton(); // Show the "Go to task" button
  }, {once: true});
}
const a = document.querySelector('.start');
a.addEventListener('click', start);
history.pushState({ page: 1 }, "Title 1", "?page=1");

// Обрабатываем событие popstate для восстановления состояния предыдущей страницы
window.addEventListener('popstate', function(event) {
    if (event.state) {
        // Восстановление состояния предыдущей страницы
        console.log("Возвращение на предыдущую страницу");
    }
});


// добавить сохранение кнопки 

window.addEventListener('resize', function() {
  // Получаем элементы, которые нужно зафиксировать
  var fixedElements = document.querySelectorAll('.fixed-element');

  // Проходим по каждому элементу и устанавливаем им позицию fixed
  for (var i = 0; i < fixedElements.length; i++) {
    var element = fixedElements[i];
    element.style.position = 'fixed'; // Зафиксируем позицию элемента
  }
});
