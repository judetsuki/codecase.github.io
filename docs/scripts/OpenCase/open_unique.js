import { text_q6_1 , text_q6_2 , text_q6_3 , text_q6_4 , text_q6_5 , text_q6_6 , text_q6_7 } from "../tasks.js";
import {testCases_q6_1 , testCases_q6_2 , testCases_q6_3 , testCases_q6_4 , testCases_q6_5 , testCases_q6_6 , testCases_q6_7} from "../tasks.js"
import {function_name_q6_1 , function_name_q6_2 , function_name_q6_3 , function_name_q6_4 , function_name_q6_5 , function_name_q6_6 , function_name_q6_7} from "../tasks.js"
import {userFunction_q6_1 , userFunction_q6_2, userFunction_q6_3 , userFunction_q6_4 , userFunction_q6_5 , userFunction_q6_6 , userFunction_q6_7} from "../tasks.js"
import {text_example_q6_1 , text_example_q6_2 , text_example_q6_3 , text_example_q6_4 , text_example_q6_5 , text_example_q6_6 , text_example_q6_7} from "../tasks.js"
import {second_example_q6_1 , second_example_q6_2 , second_example_q6_3 , second_example_q6_4 , second_example_q6_5 , second_example_q6_6 , second_example_q6_7} from "../tasks.js"
import { text_q5_1 , text_q5_2 , text_q5_3 , text_q5_4 , text_q5_5 , text_q5_6 , text_q5_7 , text_q5_8 } from "../tasks.js";
import { second_example_q5_1, second_example_q5_2, second_example_q5_3, second_example_q5_4, second_example_q5_5, second_example_q5_6, second_example_q5_7, second_example_q5_8 } from "../tasks.js";
import { text_example_q5_1, text_example_q5_2, text_example_q5_3, text_example_q5_4, text_example_q5_5, text_example_q5_6, text_example_q5_7, text_example_q5_8 } from "../tasks.js";
import { function_name_q5_1, function_name_q5_2, function_name_q5_3, function_name_q5_4, function_name_q5_5, function_name_q5_6, function_name_q5_7, function_name_q5_8 } from "../tasks.js";
import { test_q5_1, test_q5_2, test_q5_3, test_q5_4, test_q5_5, test_q5_6, test_q5_7, test_q5_8 } from "../tasks.js";
import { userFunction_q5_1, userFunction_q5_2, userFunction_q5_3, userFunction_q5_4, userFunction_q5_5, userFunction_q5_6, userFunction_q5_7, userFunction_q5_8 } from "../tasks.js";
import { text_q4_1 , text_q4_2 , text_q4_3 , text_q4_4 , text_q4_5 , text_q4_6 } from "../tasks.js";
import { second_example_q4_1, second_example_q4_2, second_example_q4_3, second_example_q4_4, second_example_q4_5, second_example_q4_6 } from "../tasks.js";
import { test_q4_1, test_q4_2, test_q4_3, test_q4_4, test_q4_5, test_q4_6 } from "../tasks.js";
import { userFunction_q4_1, userFunction_q4_2, userFunction_q4_3, userFunction_q4_4, userFunction_q4_5, userFunction_q4_6 } from "../tasks.js";
import { text_example_q4_1, text_example_q4_2, text_example_q4_3, text_example_q4_4, text_example_q4_5, text_example_q4_6 } from "../tasks.js";
import { function_name_q4_1, function_name_q4_2, function_name_q4_3, function_name_q4_4, function_name_q4_5, function_name_q4_6 } from "../tasks.js";

const cells = 61 //количество предметов (скорость рулетки)

// From 0.001 to 100
const items = [
  {nameUnique: 'SumMix', img: '../images/Task_Icons/q6/q6_1.png',taskTextUnique : text_q6_1,SecondExampleUnique : second_example_q6_1 ,exampleUnique : text_example_q6_1 ,testsUnique : testCases_q6_1  ,FuncNameUnique: function_name_q6_1, FuncArgsUnique : userFunction_q6_1, chance: 10.29},
  {nameUnique: 'PowersOfTwo', img: '../images/Task_Icons/q6/q6_2.png',taskTextUnique : text_q6_2,SecondExampleUnique : second_example_q6_2 ,exampleUnique : text_example_q6_2 ,testsUnique : testCases_q6_2 ,FuncNameUnique: function_name_q6_2, FuncArgsUnique : userFunction_q6_2, chance: 10.29},
  {nameUnique: 'Multiply', img: '../images/Task_Icons/q6/q6_3.png',taskTextUnique : text_q6_3,SecondExampleUnique : second_example_q6_3 ,exampleUnique : text_example_q6_3 ,testsUnique : testCases_q6_3 ,FuncNameUnique: function_name_q6_3, FuncArgsUnique : userFunction_q6_3 , chance: 10.29},
  {nameUnique: 'All Nines', img: '../images/Task_Icons/q5/q5_1.png',taskTextUnique : text_q5_1,SecondExampleUnique : second_example_q5_1 ,exampleUnique : text_example_q5_1 ,testsUnique : test_q5_1 ,FuncNameUnique: function_name_q5_1,FuncArgsUnique : userFunction_q5_1, chance: 10.29},
  {nameUnique: 'String reverse slicing 101', img: '../images/Task_Icons/q5/q5_3.png',taskTextUnique : text_q5_3,SecondExampleUnique : second_example_q5_3 ,exampleUnique : text_example_q5_3 , testsUnique : test_q5_3 , FuncNameUnique : function_name_q5_3,FuncArgsUnique: userFunction_q5_3, chance: 10.29},
  {nameUnique: 'Ones and Zeros', img: '../images/Task_Icons/q5/q5_2.png',taskTextUnique : text_q5_2,SecondExampleUnique : second_example_q5_2 ,exampleUnique : text_example_q5_2 ,testsUnique : test_q5_2 ,FuncNameUnique: function_name_q5_2, FuncArgsUnique: userFunction_q5_2, chance: 10.29},
  {nameUnique: 'Persistent Bugger', img: '../images/Task_Icons/q4/q4_1.png',taskTextUnique : text_q4_1, SecondExampleUnique : second_example_q4_1 ,exampleUnique : text_example_q4_1 ,testsUnique : test_q4_1 ,FuncNameUnique: function_name_q4_1,FuncArgsUnique : userFunction_q4_1, chance: 10.29},
  {nameUnique: 'Even or Odd Accessor', img: '../images/Task_Icons/q4/q4_2.png',taskTextUnique : text_q4_2,SecondExampleUnique : second_example_q4_2 ,exampleUnique : text_example_q4_2 ,testsUnique : test_q4_2 ,FuncNameUnique: function_name_q4_2,FuncArgsUnique : userFunction_q4_2, chance: 10.29},
  {nameUnique: 'Sort the odd', img: '../images/Task_Icons/q4/q4_3.png',taskTextUnique : text_q4_3,SecondExampleUnique : second_example_q4_3 ,exampleUnique : text_example_q4_3 ,testsUnique : test_q4_3 ,FuncNameUnique: function_name_q4_3,FuncArgsUnique : userFunction_q4_3, chance: 10.29},
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
        if (item.nameUnique === reqItem) {  
          result = item;
        }
      });
      return result;
    }
    const result = compareNames(items, data1.nameUnique); // сравниваем имя выпавшего элемента с именами предметов
    localStorage.setItem('dataToPassUnique', JSON.stringify(result)); // сохраняем данные в localStorage
    const dataToPass = JSON.parse(localStorage.getItem('dataToPassUnique'));
    console.log(dataToPass) // получаем данные из localStorage
    
    
  }, 5000);

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