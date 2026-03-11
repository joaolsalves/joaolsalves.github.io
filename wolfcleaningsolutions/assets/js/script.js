// MENU

const toggle = document.getElementById("menu-toggle")
const nav = document.getElementById("nav")
const links = document.querySelectorAll("nav a")

toggle.onclick = () =>{
nav.classList.toggle("active")
}

// Fechar menu ao clicar em qualquer link (mobile)
links.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

// HEADER SCROLL

window.addEventListener("scroll", () =>{

const header = document.getElementById("header")

header.classList.toggle("scrolled", window.scrollY > 50)

})

// REVEAL

function reveal(){

const reveals = document.querySelectorAll(".reveal")

reveals.forEach(el=>{

const top = el.getBoundingClientRect().top

if(top < window.innerHeight - 100){

el.classList.add("active")

}

})

}

window.addEventListener("scroll", reveal)


// TESTIMONIALS

const testimonials = [

{nome:"John Peterson",texto:"Amazing cleaning service. My Airbnb guests love it."},

{nome:"Sarah Williams",texto:"Very professional and fast turnover cleaning."},

{nome:"Michael Brown",texto:"They removed all pet hair perfectly."},

{nome:"Emily Johnson",texto:"Best cleaning service for Airbnb hosts."},

{nome:"David Wilson",texto:"Reliable and punctual team."},

{nome:"Olivia Martinez",texto:"My apartments never looked so clean."},

{nome:"Daniel Anderson",texto:"Great attention to detail."},

{nome:"Sophia Taylor",texto:"Guests always compliment the cleanliness."},

{nome:"James Thomas",texto:"Very easy communication and negotiation."},

{nome:"Isabella Moore",texto:"Highly recommended cleaning service."}

]

let index = 0

function showTestimonial(){

document.getElementById("t-text").innerText = testimonials[index].texto
document.getElementById("t-name").innerText = testimonials[index].nome

index++

if(index >= testimonials.length){

index = 0

}

}

setInterval(showTestimonial,10000)

showTestimonial()


// EMAILJS

(function(){
emailjs.init("YOUR_PUBLIC_KEY")
})()

document.getElementById("contact-form").addEventListener("submit",function(e){

e.preventDefault()

emailjs.sendForm(
"YOUR_SERVICE_ID",
"YOUR_TEMPLATE_ID",
this
).then(()=>{

alert("Message sent!")

})

})