// Se crea un componente de notificaciones esto es para que cuando se registre un usuario este lance un mensaje
"use client"; // Para denotar y especificar que esta molecula trabajara desde el cliente y no del server.
import { Toaster } from "react-hot-toast"; // Libreria para ese componente
import React from "react";

const ToasterProvider = () => {
  return <Toaster /> // inyeccion de componente toaster
};

export default ToasterProvider

// Es decir si el registro dio algun error o algo por el estilo