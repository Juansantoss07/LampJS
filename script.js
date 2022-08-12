const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isLampBroken(){
  return lamp.src.indexOf('quebrada') > -1
}

function lampOn(){
  if(!isLampBroken ()){
    turnOn.style.boxShadow =  'inset -3px -3px 7px rgb(108, 119, 9), inset 3px 3px 5px rgb(108, 119, 9)'
    turnOff.style.boxShadow = ' -3px 3px 1px rgb(108, 119, 9), 3px 4px 1px rgb(108, 119, 9)'
    lamp.src = './imgs/ligada.jpg';
  }
}

function lampOff(){
  if(!isLampBroken()){
    turnOff.style.boxShadow =  'inset -3px -3px 7px rgb(108, 119, 9), inset 3px 3px 5px rgb(108, 119, 9)'
    turnOn.style.boxShadow = '-3px 3px 1px rgb(108, 119, 9), 3px 4px 1px rgb(108, 119, 9)'
    lamp.src = './imgs/desligada.jpg';
  }
}

function lampBroken(){
  lamp.src = './imgs/quebrada.jpg'
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);