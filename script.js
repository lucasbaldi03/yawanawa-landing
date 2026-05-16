const form = document.querySelector("#contact-form");
const status = document.querySelector(".form-status");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  status.textContent = "Contato registrado. Em uma versao publicada, esta mensagem seria enviada para a equipe responsavel.";
  form.reset();
});
