(function() {
  emailjs.init("sPfkQCoLok_2KePzj"); // coloque sua Public Key aqui SUA_PUBLIC_KEY
})();

const form = document.getElementById("contact-form");
const status = document.getElementById("status");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  emailjs.sendForm(
    "service_fplhsc9",   // coloque aqui SEU_SERVICE_ID
    "template_wu7e0i9",  // coloque aqui SEU_TEMPLATE_ID
    this
  )
  .then(function() {
      status.innerHTML = "Mensagem enviada com sucesso!";
      form.reset();
  }, function(error) {
      status.innerHTML = "Erro ao enviar. Tente novamente.";
  });
});