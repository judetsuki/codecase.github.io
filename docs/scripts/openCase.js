const cells = 61 //количество предметов (скорость рулетки)

// From 0.001 to 100
const items = [
  {name: 'iPhone', img: './images/iPhone.png', chance: 14.29},
  {name: 'Keyboard', img: './images/keyboard.png', chance: 14.29},
  {name: 'Headphones', img: './images/headphones.png', chance: 14.29},
  {name: 'Pivo', img: './images/pivo.png', chance: 14.29},
  {name: 'butterfly', img: './images/butterfly.png', chance: 14.29},
  {name: 'jini', img: './images/jini.png', chance: 14.29},
  {name: 'vini', img: './images/vinipuh.png', chance: 14.29},
]

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

  const item = list.querySelectorAll('li')[30]; // подсвечиваемый элемент
  const resultContainer = document.getElementById('resultContainer');
  const resultTitle = document.getElementById('resultTitle');
  const resultImage = document.getElementById('resultImage');
  setTimeout(() => {
    resultTitle.textContent = JSON.parse(item.getAttribute('data-item')).name // подсвечиваемый элемент который выпал
  resultImage.src = JSON.parse(item.getAttribute('data-item')).img // подсвечиваемый элемент который выпал
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
    function showGoToTaskButton(prizeName) {
      const goToTaskButton = document.getElementById('goToTaskButton');
      goToTaskButton.style.display = 'inline-block';
    }
    showGoToTaskButton(); // Show the "Go to task" button
  }, {once: true});
  list.addEventListener('transitionend', () => {
    isStarted = false;
    item.classList.add('active');
    const data = JSON.parse(item.getAttribute('data-item'));


    startButton.disabled = false; // Enable the button
       // Show the "Go to task" button
 // Reset the flag
  }, {once: true});
  list.addEventListener('transitionend', () => {
    isStarted = false;
    item.classList.add('active');
  document.getElementById('startButton').style.display = 'none'

    startButton.disabled = false; // Enable the button
    
  }, {once: true});
}
function compareNames(object, reqItem) {
  let result;
  object.forEach((item) => {
    if (item.name === reqItem) {  
      result = item;
    }
  });
  return result;
}
// доделать эту функцию /\
const goToTaskButton = document.getElementById('goToTaskButton');

goToTaskButton.addEventListener('click', () => {
  startButton.textContent = 'Крутить';
  document.getElementById('goToTaskButton').style.display = 'none'; // Hide the "Go to task" button
});
const startButton = document.getElementById('startButton');



startButton.addEventListener('click', () => {
  startButton.textContent = 'Крутить';
  document.getElementById('goToTaskButton').style.display = 'none'; // Hide the "Go to task" button
});

window.addEventListener('resize', function() {
  // Получаем элементы, которые нужно зафиксировать
  var fixedElements = document.querySelectorAll('.fixed-element');

  // Проходим по каждому элементу и устанавливаем им позицию fixed
  for (var i = 0; i < fixedElements.length; i++) {
    var element = fixedElements[i];
    element.style.position = 'fixed'; // Зафиксируем позицию элемента
  }
});


/*let dataTransfer = resultTitle;
localStorage.setItem(dataTransfer);*/