"use client"; // Para denotar y especificar que esta molecula trabajara desde el cliente y no del server.
import MenuItemProps from "./interfaces/menuItemProps.interfaces";
import React from "react"


const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => (
  <div onClick={onClick} className="px-4 py-3 hover:bg-neutral-100 transition font-semibold">
    {label}
  </div>
)

export default MenuItem
