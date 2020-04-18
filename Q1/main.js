// JavaScript Document

let main = document.querySelectorAll('main');
let submitButton = document.querySelector('input[type=submit]');
let body = document.querySelector('body');

submitButton.addEventListener('click', function() {
  let personName = document.querySelector('input[type=text]').value;
  let para = document.createElement('p'); 
  para.innerHTML = '<h3>Hey there ' + personName + '! Thanks for stopping by!</h3>'; 
  main.appendChild(para);
  body.setAttribute('class', 'meow'); 
  console.log('=^..^='); 
}); 