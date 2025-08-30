document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault(); // evita recargar la página

    // obtener los valores
    let nombre = document.getElementById("nombre").value;
    let domicilio = document.getElementById("Domicilio").value;
    let telefono = document.getElementById("Telefono").value;
    let pedido = document.getElementById("pedido").value;

    // tu número de WhatsApp
    let numero = "5491164227116";

    // mensaje con saltos de línea (%0A)
    let mensaje = `*Nuevo Pedido*%0A
👤 Nombre: ${nombre}%0A
🏠 Domicilio: ${domicilio}%0A
📞 Teléfono: ${telefono}%0A
🛒 Pedido: ${pedido}`;

    // armar URL de WhatsApp
    let url = `https://wa.me/${numero}?text=${mensaje}`;

    // abrir WhatsApp en nueva pestaña
    window.open(url, "_blank");
});