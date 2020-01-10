

let button=document.querySelectorAll('button');
let drumKeys=document.querySelector('.drum')

//click handler

for(i=0;i<button.length;i++){
    button[i].addEventListener("click", handleClick)
}

function handleClick(){
    let buttonInner = this.innerHTML;
    makeMusic(buttonInner);
    buttonAnimation(buttonInner);
    
}
//key handler
let keyPress=(event)=>{
    makeMusic(event.key);
    buttonAnimation(event.key);

}
document.addEventListener('keydown',keyPress)

//music function

let makeMusic=(key)=>{
    console.log(event);
    switch(key){
    case 'w': let tom1= new Audio('sounds/tom-1.mp3');
    tom1.play();
    break;
    case 'a': let tom2= new Audio('sounds/tom-2.mp3');
    tom2.play();
    break;
    case 's': let tom3= new Audio('sounds/tom-3.mp3');
    tom3.play();
    break;
    case 'd': let tom4= new Audio('sounds/tom-4.mp3');
    tom4.play();
    break;
    case 'j': let snare= new Audio('sounds/snare.mp3');
    snare.play();
    break;
    case 'k': let kick= new Audio('sounds/kick-bass.mp3');
    kick.play();
    break;
    case 'l': let crash= new Audio('sounds/crash.mp3');
    crash.play();
    break;
    
    default: console.log(event.key);
        
    break;
    }

}
    
let buttonAnimation=(currentKey)=>{
    let activeButton=document.querySelector(`.${currentKey}`);
    activeButton.classList.add('pressed')

    setTimeout(function(){
        activeButton.classList.remove('pressed')
    },100);

}
