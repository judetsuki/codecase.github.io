// const getRandomOption = () => {
//   const option = [
//     "./images/cases/q1 case.png",
//     "./images/cases/q2 case.png",
//     "./images/cases/q3 case.png",
//     "./images/cases/q4 case.png",
//     "./images/cases/q5 case.png",
//     "./images/cases/q6 case.png",
//   ];
//   const today = new Date();
//   const nextDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
//   const filteredOption = nextDay.getDay() === 1 ? option.filter((_, i) => i !== 0) : option;

//   // Проверяем, есть ли уже выбранный кейс в локальном хранилище
//   let selectedImagePath = localStorage.getItem('selectedImagePath');
  
//   if (!selectedImagePath || new Date(selectedImagePath) < nextDay) {
//     // Если нет или он устарел, выбираем новый кейс
//     const randomIndex = Math.floor(Math.random() * filteredOption.length);
//     selectedImagePath = filteredOption[randomIndex];
//     localStorage.setItem('selectedImagePath', selectedImagePath);
//   }

//   return selectedImagePath;
// };

// const imgElement = document.querySelector(".day_case");
// imgElement.src = getRandomOption();
/* const selectedImage = localStorage.getItem("selectedImage");
  const link = document.querySelector(".rer");
  if (!selectedImage || new Date(selectedImage) < nextDay) {
    const randomIndex = Math.floor(Math.random() * filteredOption.length);
    const selectedImage = filteredOption[randomIndex];
    console.log(selectedImage);
    localStorage.setItem("selectedImage", nextDay.toISOString());
    localStorage.setItem("selectedImagePath", selectedImage);
    
  }
  const s = localStorage.getItem("selectedImagePath");
  const newImage = document.createElement('img')
  newImage.src = s
  link.appendChild(newImage)
  console.log(s);
  return s
};

const imgElement = document.querySelector(".day_case");
imgElement.src = getRandomOption();*/


// --------------------------------------------------------------
let filteredOption
let randomIndex
const getRandomOption = () => {
  const option = [
    { name: "q1", img: "./images/cases/q1 case.png", link: "./CaseOpenPage/case_open_page_q1.html" },
    { name: "q2", img: "./images/cases/q2 case.png", link: "./CaseOpenPage/case_open_page_q2.html" },
    { name: "q3", img: "./images/cases/q3 case.png", link: "./CaseOpenPage/case_open_page_q3.html" },
    { name: "q4", img: "./images/cases/q4 case.png", link: "./CaseOpenPage/case_open_page_q4.html" },
    { name: "q5", img: "./images/cases/q5 case.png", link: "./CaseOpenPage/case_open_page_q5.html" },
    { name: "q6", img: "./images/cases/q6 case.png", link: "./CaseOpenPage/case_open_page_q6.html" },
  ];

  const today = new Date();
  const nextDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
   filteredOption = nextDay.getDay() === 1 ? option.filter((_, i) => i !== 0).map(item => item.link) : option.map(item => item.link)

  // Проверяем, есть ли уже выбранный кейс в локальном хранилище
  let selectedImagePath = localStorage.getItem("selectedImagePath");

  if (!selectedImagePath || new Date(selectedImagePath) < nextDay) {
    // Если нет или он устарел, выбираем новый кейс
     randomIndex = Math.floor(Math.random() * filteredOption.length);
    selectedImagePath = filteredOption[randomIndex].img;
    localStorage.setItem("selectedImagePath", selectedImagePath);
    console.log(filteredOption.length);
  }
  return selectedImagePath;
};

const imgElement = document.querySelector(".day_case");
imgElement.src = getRandomOption();

let aElement = document.querySelector(".day");


















