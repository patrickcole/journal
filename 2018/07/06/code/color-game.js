"use strict";

let difficulty = 6;
init();

function init(){
  
  build(difficulty);
  document.querySelector('#reset').addEventListener('click', destroy);
  document.querySelector('#modeEasy').addEventListener('click', () => {
    setDifficulty(3);
    destroy();
  });
  document.querySelector('#modeHard').addEventListener('click', () => {
    setDifficulty(6);
    destroy();
  });
}

function setDifficulty(val){ 
  
  difficulty = val;
}

function build(num){

  document.querySelector('h1').style.backgroundColor = "steelblue";

  let randomIndex = Math.floor(Math.random() * num);
  let workspaceFragment = document.createDocumentFragment();
  for ( let buildIndex = 0; buildIndex < num; buildIndex++ ){

    let stageButton = document.createElement('button');
    stageButton.setAttribute('type', 'button');
    stageButton.classList.add('stage__btn');
    stageButton.style.backgroundColor = randomRGBColor();
    stageButton.addEventListener('click', handleColorSelection);

    if ( buildIndex === randomIndex ){
      stageButton.setAttribute('data-correct', 'true');
      document.querySelector('#colorValue').innerHTML = stageButton.style.backgroundColor;
      document.querySelector('#message').innerHTML = `Select the color that matches the rgb value.`;
    } else {
      stageButton.setAttribute('data-correct', 'false');
    }
    
    workspaceFragment.appendChild(stageButton);
  }

  document.querySelector('#stage').appendChild(workspaceFragment);
}

function handleColorSelection(evt){

  let selected = evt.currentTarget;
  if ( selected.getAttribute('data-correct') === 'true'){
    correct( selected.style.backgroundColor);
  } else {
    incorrect( selected );
  }
}

function incorrect( element ){

  document.querySelector('#message').innerHTML = `Incorrect!`;
  element.style.backgroundColor = "rgb(100, 100, 100)";
}

function correct( color ){

  document.querySelector('#message').innerHTML = `Correct!`;
  document.querySelector('h1').style.backgroundColor = color;
  document.querySelectorAll('.stage__btn').forEach( (element) => {
    element.style.backgroundColor = color;
    element.removeEventListener('click', handleColorSelection);
  });
}

function destroy(){

  document.querySelectorAll('.stage__btn').forEach( (element) => {

    element.removeEventListener('click', handleColorSelection);
    element.parentNode.removeChild(element);
  });

  build(difficulty);
}

function randomRGBColor(){
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}