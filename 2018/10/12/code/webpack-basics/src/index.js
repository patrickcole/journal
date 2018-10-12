import { AlertBox } from './alert-box/alert-box';
import writeText from './write-text/write-text';

const alertUser = new AlertBox();

document.addEventListener('DOMContentLoaded', () => {
  
  let alertButton = document.getElementById('js-button');
  alertButton.addEventListener('click', alertUser.sayHi);

  let pTagButton = document.getElementById('js-write-text-button');
  let pTag = document.querySelector('p');

  pTagButton.addEventListener('click', () => {
    writeText(pTag);
  });
});