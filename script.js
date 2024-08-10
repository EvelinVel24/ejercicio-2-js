// Mostrar el menú al usuario y guardar la opción seleccionada
var opcion = prompt("¡Hola! Soy Eva, tu asistente virtual del Servicio al Cliente de Metel. Estoy aquí para ayudarte en lo que necesites.\nEscribe el número de la opción que buscas: \n1.- Boletas y Pagos \n2.- Señal y llamadas \n3.- Oferta comercial \n4.- Otras consultas");

// Funciones para cada opción del menú principal
function boletasYPagos() {
    // Menú secundario para la opción Boletas y Pagos
    var subopcion = prompt("Seleccione una opción:\n1.- Ver boleta\n2.- Pagar cuenta");

    // Manejar la opción seleccionada en el menú secundario
    switch (subopcion) {
        case "1":
            alert("Haga clic para descargar su boleta.");
            break;
        case "2":
            alert("Usted está siendo transferido. Espere por favor.");
            break;
        default:
            alert("Opción no válida. Por favor, seleccione 1 o 2.");
            break;
    }
}

function senalYllamadas() {
    // Menú secundario para la opción Señal y llamadas
    var subopcion = prompt("Seleccione una opción:\n1.- Problemas con la señal\n2.- Problemas con las llamadas");

    // Manejar la opción seleccionada en el menú secundario
    switch (subopcion) {
        case "1":
        case "2":
            // Solicitar al usuario que escriba su solicitud
            var solicitud = prompt("A continuación, escriba su solicitud:");
            alert(`Estimado usuario, su solicitud: "${solicitud}" ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos.`);
            break;
        default:
            alert("Opción no válida. Por favor, seleccione 1 o 2.");
            break;
    }
}

function ofertaComercial() {
    // Solicitar al usuario si desea recibir más información
    var respuesta = prompt("¡Mentel tiene una oferta comercial acorde a tus necesidades! Para conocer más información y ser asesorado personalmente por un ejecutivo escribe \"SI\" y un ejecutivo te llamará. De lo contrario, ingresa \"NO\".");

    if (respuesta.toUpperCase() === "SI") {
        alert("Un ejecutivo se contactará con usted.");
    } else if (respuesta.toUpperCase() === "NO") {
        alert("Gracias por preferir nuestros servicios.");
    } else {
        alert("Opción no válida. Por favor, ingresa \"SI\" o \"NO\".");
    }
}

function otrasConsultas() {
    // Solicitar al usuario que escriba su consulta
    var consulta = prompt("A continuación, escriba su consulta:");
    alert(`Estimado usuario, su consulta: "${consulta}" ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos.`);
}

// Manejar la opción seleccionada del menú principal
switch (opcion) {
    case "1":
        boletasYPagos();
        break;
    case "2":
        senalYllamadas();
        break;
    case "3":
        ofertaComercial();
        break;
    case "4":
        otrasConsultas();
        break;
    default:
        alert("Opción no válida. Por favor, selecciona una opción del 1 al 4.");
        break;
}
