const element = document.querySelector('#my-element');
console.log(element);
const tealColor = window.getComputedStyle(element).getPropertyValue('--teal');
console.log('Teal color:', tealColor);