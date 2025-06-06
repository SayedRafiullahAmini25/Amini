let text = document.querySelector('.intro');
let textContent = "Welcome To Amini Web-Page...";
let i = 0;

function type(){
    if(i < textContent.length){
        text.innerHTML += textContent.charAt(i);
        i++;
        setTimeout(type , 100);
    }
}
type();