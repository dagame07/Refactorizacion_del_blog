//Configuramos el boton de alerta
document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formularioContacto");
  const contenedorAlerta = document.getElementById("contenedorAlerta");

  if (formulario) {
    formulario.addEventListener("submit", function (evento) {
      evento.preventDefault(); 

      contenedorAlerta.innerHTML = `
        <div class="alert alert-success alert-dismissible fade show" role="alert">
          <strong>¡Su mensaje ha sido enviado con éxito!</strong> Pronto nos pondremos en contacto.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      `;

      formulario.reset();
    });
  }
});
