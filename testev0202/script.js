// menu mobile
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
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
  emailjs.init("SUA_PUBLIC_KEY");
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "SEU_SERVICE_ID",
    "SEU_TEMPLATE_ID",
    this
  ).then(() => {
    document.getElementById("form-status").innerText = "Mensagem enviada com sucesso!";
    this.reset();
  }, () => {
    document.getElementById("form-status").innerText = "Erro ao enviar mensagem.";
  });
});
