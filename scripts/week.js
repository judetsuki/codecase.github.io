const getCurrentWeek = () => {
    let currentDate = new Date();
    let firstDay = new Date(currentDate.getFullYear(),0,1)
    let pastDay = (currentDate - firstDay ) / 86400000
    let currentWeekDay = Math.ceil((pastDay +firstDay.getDay()+1)/7)
    return currentWeekDay
}
const evenWeek = () => {
    let currentWeek = getCurrentWeek()
    return currentWeek % 2 === 0
}
let currentWeek = getCurrentWeek()
let weekType = evenWeek()? 'I': 'II';

document.write(`Неделя ${weekType}`)