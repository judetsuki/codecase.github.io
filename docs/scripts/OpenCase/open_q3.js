import { text_q3_1 , text_q3_2 , text_q3_3 , text_q3_4 , text_q3_5 , text_q3_6, text_q3_7 } from "../tasks.js";
const cells = 61 //количество предметов (скорость рулетки)

// From 0.001 to 100
const items = [
  {nameQ3: 'iPhone', img: '../images/iPhone.png',taskTextQ3 : text_q3_1, chance: 14.29},
  {nameQ3: 'Keyboard', img: '../images/keyboard.png',taskTextQ3 : text_q3_2, chance: 14.29},
  {nameQ3: 'Headphones', img: '../images/headphones.png',taskTextQ3 : text_q3_3, chance: 14.29},
  {nameQ3: 'Pivo', img: '../images/pivo.png',taskTextQ3 : text_q3_4, chance: 14.29},
  {nameQ3: 'butterfly', img: '../images/butterfly.png',taskTextQ3 : text_q3_5, chance: 14.29},
  {nameQ3: 'jini', img: '../images/jini.png',taskTextQ3 : text_q3_6, chance: 14.29},
  {nameQ3: 'vini', img: '../images/vinipuh.png',taskTextQ3 : text_q3_7, chance: 14.29},
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
        if (item.nameQ3 === reqItem) {  
          result = item;
        }
      });
      return result;
    }
    const result = compareNames(items, data1.nameQ3); // сравниваем имя выпавшего элемента с именами предметов
    localStorage.setItem('dataToPass3', JSON.stringify(result)); // сохраняем данные в localStorage
    const dataToPass = JSON.parse(localStorage.getItem('dataToPass3'));
    console.log(dataToPass3) // получаем данные из localStorage
    
    
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
