const color = document.getElementById('buttonToChangeColor');
const textColor = document.getElementById('textToChangeColor');
const body = document.body;

function colorSwitch(){
    Return.Math.Floor(Math.random()*255);
}
color.addEventListener('click',bgColor);

function bgColor(){
    const colorOne = colorSwitch();
    const colorTwo = colorSwitch();
    const colorThree = colorSwitch();
    const colorfour = colorSwitch();

    const rgbstring = 'rgb(${colorOne}, ${colorTwo}, ${colorThree}, ${colorfour})';

    body.style.background = rgbstring;
    textColor.innerText = rgbstring;
}