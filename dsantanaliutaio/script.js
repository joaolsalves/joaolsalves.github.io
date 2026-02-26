// menu mobile
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("nav-menu");
const links = document.querySelectorAll("nav a");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Fechar menu ao clicar em qualquer link (mobile)
links.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});

// dark mode
const toggleTheme = document.getElementById("toggle-theme");
toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// animação ao scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

// EmailJS
(function () {
  emailjs.init("jWevohjJ6L0oSMso4"); // coloque sua Public Key aqui SUA_PUBLIC_KEY
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_q9dx70p",  // coloque aqui SEU_SERVICE_ID
    "template_y760guc", // coloque aqui SEU_TEMPLATE_ID
    this
  ).then(() => {
    document.getElementById("form-status").innerText = "Mensagem enviada com sucesso!";
    this.reset();
  }, () => {
    document.getElementById("form-status").innerText = "Erro ao enviar mensagem.";
  });
});
