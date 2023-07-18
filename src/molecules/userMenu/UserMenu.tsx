"use client"; // Para denotar y especificar que esta molecula trabajara desde el cliente y no del server.
import React from "react"
import { useState } from "react"; // importamos hook
import { AiOutlineMenu } from "react-icons/ai"; // importamos elemento de icono
import Avatar from "@modules/avatar/Avatar"; // importamos molecula que se va a usar en userMenu.
import MenuItem from "@modules/menuItem/MenuItem"; // importamos molecula a usario
import useRegisterModal from "@custom-hooks/userRegisterModal";

const UserMenu = () => {

  const registerModal = useRegisterModal(); // nos traemos el coustom hook creado
  const [isOpen, setIsOpen] = useState(false);

  // toogle de apertura
  const toogleOpen = () => {
    // toogle pendiente de hacer
  };

  return (
    <div className="relative">
      <div>
        
      </div>
    </div>
  )

}

export default UserMenu