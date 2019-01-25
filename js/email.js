function sendEmail() {
  nombre = $("#form-name").val();
  email = $("#form-email").val();
  telefono = $("#form-phone").val();
  mensaje = $("#form-message").val();

  if(nombre!="" && email!="" && telefono!="" && mensaje!="") {

    body = nombre + " ha rellenado el formulario de contacto de la web, los datos son los siguientes.<br><br><p><strong>Nombre:</strong> " + nombre + "</p><p><strong>Email:</strong> " + email + "</p><p><strong>Teléfono:</strong> " + telefono + "</p><br><p><strong>Motivo de la consulta:</strong><br> " + mensaje + "</p>";

    var template_params = {
        "reply_to": email,
        "message_html": body
    }

    var service_id = "default_service";
    var template_id = "plantilla_contacto";

    emailjs.send(service_id, template_id, template_params, "user_0t6pKfOxfc5URBHNxCPaUkkk")
        .then(function(response) {
        /*console.log('SUCCESS!', response.status, response.text);*/
        $("#alert-ok").removeClass("d-none");
            document.getElementById("contact-form").reset();
    }, function(error) {
        /*console.log('FAILED...', error);*/
        $("#alert-ko").removeClass("d-none");
    });
  }
}