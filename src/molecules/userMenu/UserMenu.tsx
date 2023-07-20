"use client"; // Para denotar y especificar que esta molecula trabajara desde el cliente y no del server.
import React, { useState, useCallback } from "react" // importamos hook
import { AiOutlineMenu } from "react-icons/ai"; // importamos elemento de icono
import Avatar from "@modules/avatar/Avatar"; // importamos molecula que se va a usar en userMenu.
import MenuItem from "@modules/menuItem/MenuItem"; // importamos molecula a usario
import useRegisterModal from "@custom-hooks/userRegisterModal";

const UserMenu = () => {

  const registerModal = useRegisterModal(); // nos traemos el coustom hook creado
  const [isOpen, setIsOpen] = useState(false);

  // toogle de apertura
  const toogleOpen = useCallback(() => { // Para cambio del estado
    setIsOpen(value => !value)
  }, []);

  // Creacion de interfaz
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div onClick={() => {}} className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
          Pon tu espacio en Airbnb
        </div>
        <div onClick={toogleOpen} className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-100 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
          <AiOutlineMenu /> 
          <div className="hidden md:block">
            <Avatar /> 
          </div>
        </div>
      </div>
        {
          isOpen && (
            <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
              <div className="flex flex-col cursor-pointer">
                <>
                  <MenuItem onClick={registerModal.onOpen} label="Registrate" />
                  <MenuItem onClick={() => {}} label="Iniciar Sesion"/>
                </>
              </div>
            </div>
          )
        }
    </div>
  );
};

export default UserMenu