"use client"; // Para denotar y especificar que esta molecula trabajara desde el cliente y no del server.
import ButtonProps from "@modules/button/interfaces/button.interfaces"; // importo la interfaz del boton 
import React from "react"

const Button: React.FC<ButtonProps> =({ label, onClick, disabled, outline, small, icon: Icon }) => (
  <button disabled={disabled} onClick={onClick} className={`relative disabled:opacity-70 disabled:cursos-not-allowed rounded-lg hover:opacity-80 transition w-full ${outline ? "bg-white": "bg-rose-500"} ${outline ? "bg-black": "bg-rose-500"} ${outline ? "text-black": "text-white"} ${small ? "py-1": "py-3"} ${small ? "text-sm": "text-md"} ${small ? "font-light": "font-semibold"} ${small ? "border-[1px]": "border-2"} `}>
    {Icon && (
      <Icon
        size={24}
        className="absolute left-4 top-3"
      />
    )}
    {label}
  </button>
)



export default Button