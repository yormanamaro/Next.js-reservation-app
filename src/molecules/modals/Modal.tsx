"use client"; // Para denotar y especificar que esta molecula trabajara desde el cliente y no del server.
import { useState, useEffect, useCallback } from "react"
import Button from "@modules/button/Button"; // boton
import { IoMdClose } from "react-icons/io"; // Componente de icono de react para cerrar el modeal
import ModalProps from "@modules/modals/interfaces/modal.interface";

const Modal: React.FC<ModalProps> = ({ // props la estructura de datos que se va a recibir
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled
  }) => {

  const [showModal, setShowModal] = useState(isOpen); // estado local isopen

  useEffect(() => {
    setShowModal(isOpen); // esto va a manejar el muestreo del modal 
  }, [isOpen])

  const handleClose = useCallback(() => { // para manejar cierres y envios 
    if (disabled) {
      return;
    } 
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]); 


  const handleSubmite = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  },[disabled, onSubmit]);

  if (!isOpen) {
    return null;
  };

    return 
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70 ">
        <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
          {
            /*content */
          }
          <div className={`translate duration-300 h-full ${showModal ? "translete-y-0" : "translate-y-full"} ${showModal ? "opacity:100" : "opacity:0"} `}> 
            <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {
                /*header */
              }
              <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
                <button className="p-1 border-0 hover:opacity-70 transition absolute left-9" onClick={handleClose}>
                  <IoMdClose size={20} />
                </button>
                <div className="text-lg font-semibold">{title}</div>
              </div>
              {/*body */}
              <div className="relative p-6 flex-auto">{body}</div>
              {/*footer */}
              <div className="flex flex-col gap-2 p-6">
                <div className="flex flex-row items-center gap-4 w-full">
                  <Button disable={disabled} label={actionLabel} onClick={handleSubmite} />
                </div>
                {footer}
              </div>
            </div>    
          </div>
        </div>
      </div>
    </>
    
};

export default Modal