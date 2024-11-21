const conatainer =document.querySelector(".container");
const toggle =document.querySelector(".toggle");

toggle.addEventListener("click", ()=>{
    conatainer.classList.toggle("dark") ? (toggle.
        firstElementChild.className ="far fa-moon"): 
        (toggle.firstElementChild.className ="far fa-sun")
})
