/* HEADER SCROLL */
window.addEventListener("scroll", () => {
    document.getElementById("header").classList.toggle("scrolled", window.scrollY > 50);
});

/* MENU */
const toggle = document.getElementById("toggle");
const menu = document.getElementById("menu");
toggle.onclick = () => menu.classList.toggle("active");
document.querySelectorAll("#menu a").forEach(link => {
    link.onclick = () => menu.classList.remove("active");
});

/* ANIMAÇÃO AO ROLAR */
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
    });
}, { threshold: 0.2 });
sections.forEach(sec => observer.observe(sec));

/* DEPOIMENTOS */
const depoimentos = [
    "Sonoridade impecável – Eduardo Almeida",
    "Acabamento refinado – Mariana Lopes",
    "Meu cello ganhou nova vida – Carlos Mendes",
    "Precisão técnica admirável – Fernanda Rocha",
    "Excelência artesanal – Ricardo Martins",
    "Recomendo a todos músicos – Juliana Prado",
    "Ajuste perfeito – André Farias",
    "Qualidade superior – Beatriz Campos",
    "Detalhes impressionantes – Paulo Nogueira",
    "O melhor luthier que já conheci – Camila Torres"
];

let i = 0;
const box = document.getElementById("testimonial");
function trocar() {
    box.style.opacity = 0;
    setTimeout(() => {
        box.innerText = depoimentos[i];
        box.style.opacity = 1;
        i = (i + 1) % depoimentos.length;
    }, 500);
}
trocar();
setInterval(trocar, 8000);

/* EMAILJS */
(function () { emailjs.init("QM5b6Ndnj1rjTGdJ_"); })();
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    emailjs.sendForm("service_597788m", "template_xpcf3bb", this)
        .then(() => alert("Mensagem enviada!"),
            () => alert("Erro ao enviar."));
});
