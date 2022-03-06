const button= document.querySelector('button');
const nav= document.querySelector('nav');
const p= document.querySelector('nav');
button.addEventListener('click',()=>{
    nav.classList.toggle('nav-slide');
    p.classList.toggle('fade');

})
