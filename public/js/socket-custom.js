var socket = io();

// Escuchar
socket.on("connect", () => {
  console.log("Conectado al servidor");
});

socket.on("disconnect", () => {
  console.log("Perdimos conexión con el servidor");
});

// Enviar información
socket.emit(
  "enviarMensaje",
  {
    // usuario: "Carlos",
    mensaje: "Hola Mundo",
  },
  (resp) => {
    console.log("Respuesta server:", resp);
  }
);

// Escuchar información
socket.on("enviarMensaje", (mensaje) => {
  console.log("Servidor:", mensaje);
});