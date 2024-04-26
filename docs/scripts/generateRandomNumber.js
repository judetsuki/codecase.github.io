const generateNumber = () => {
    let randomNumber = Math.floor(Math.random() * 50) + 1; 
    document.getElementById("numberDiv").innerHTML = randomNumber; 
}