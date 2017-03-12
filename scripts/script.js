// Задача - поставить актуальное время на сайте
// 1. Получить контейнер в котором будет находится время
// 2. Получить актуальное время
// 3. Присвоить контейнеру актуально время
function getCurrentTime() {
  var time = new Date();
  // Текущий год
  var year = time.getFullYear();
  // Текущий месяц
  var month = time.getMonth() + 1;
  if (month < 10) month = '0' + month;
  // Текущий день
  var days = time.getDate();
  // Текущий часы
  var hours = time.getHours();
  var seconds = time.getSeconds();
  // Текущий минуты
  var minutes = time.getMinutes();
  var currentTime = year + '/' + days + '/' + month + ' ' + hours + ':' + minutes + ':' + seconds + ' MSK';
  return currentTime;
}

console.log(getCurrentTime())

var container = document.querySelector('.time')
container.innerText = getCurrentTime();

var logo = document.querySelector('.logo');

logo.addEventListener('mouseover', function(){
  console.log('Навели мышью!')
})
