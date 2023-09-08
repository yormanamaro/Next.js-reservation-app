"use client"; // Para denotar y especificar que esta molecula trabajara desde el cliente y no del server.
import React, { useState, useEffect } from "react"; // importamosm hook
import ClientProcessorProps from "@modules/clientProcessor/interfaces/clientProcessor.interface";

const ClientProcessor: React.FC<ClientProcessorProps> = ({ children}) => {
  // estado local
  const [hastMopunted, setHastMopunted] = useState(false); // para controlar las cargas

  useEffect(() => {
    setHastMopunted(true);
  }, []);

  if (!hastMopunted) {
    return null;
  }

  return<div>{children}</div>;
};

export default ClientProcessor

// Este verificador se inyecta en el layout