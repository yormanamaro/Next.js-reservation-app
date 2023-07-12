"use client"; // Para denotar y especificar que esta molecula trabajara desde el cliente y no del server.
import React, { Children } from "react"
import ContainerProps from "./interfaces/container.interfaces";

const Container: React.FC<ContainerProps>= ({ children }) => {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4"> 
      {children}
    </div>
  )
}

export default Container