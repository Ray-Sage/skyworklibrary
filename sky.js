let getStarted = document.getElementById("getStarted").addEventListener('click', ()=>{
    window.location.href="register.html";
});


let one = document.getElementById("one");
let two = document.getElementById("two");
//let helloS = document.getElementById("helloS");

function change(){
        
    
    one.classList.toggle("me1");
    setTimeout(()=>{
        two.classList.toggle("me2");
    },1000)
    
    
};


setInterval(change, 2000);



let header = document.querySelector("nav");


let lastScrollY = window.scrollY;

window.addEventListener('scroll', ()=>{
    
    let currentScrollY = window.scrollY;
    
    if(lastScrollY < currentScrollY && currentScrollY > 100) {
        header.classList.add("hideTop");
    } 
    
     if(lastScrollY > currentScrollY) {
        header.classList.remove("hideTop");
        
    }
    lastScrollY = currentScrollY;
})


let ham = document.querySelector(".ham");
let aside = document.querySelector("aside");
const close = document.querySelector(".close");

close.addEventListener('click', ()=>{
    aside.classList.toggle('showMenu');
})

ham.addEventListener('click', ()=>{
        
        
        aside.classList.toggle('showMenu');
    
});


let changeC = document.querySelector(".topBarMenu");

function changedC(){
    setInterval(()=>{
        changeC.classList.toggle("colorChange");
    }, 10000)
    
}

changedC();



let submit = document.getElementById("submit");
submit.addEventListener("click", ()=>{
    alert ("Congrats! Your message has been sent successfuly. We shall get back to you as soon as possible.");
})