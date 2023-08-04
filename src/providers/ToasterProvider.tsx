// Se crea un componente de notificaciones
"use client"; // Para denotar y especificar que esta molecula trabajara desde el cliente y no del server.
import { Toaster } from "react-hot-toast";
import React from "react";

const ToasterProvider = () => {
  return <Toaster /> // inyeccion de componente toaster
}

export default ToasterProvider