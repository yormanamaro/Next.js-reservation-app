"use client"; // Para denotar y especificar que esta molecula trabajara desde el cliente y no del server.
import { useState, useEffect, useCallback } from "react"
import Button from "@modules/button/Button";
import { IoMdClose } from "react-icons/io";
import ModalProps from "@modules/modals/interfaces/modal.interface";

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled
}) => {

  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {

  }, [])

  const handleClose = () => {
    //
  };

  const handleSubmite = () => {
    //
  };

    return <div>Hello i am Modal</div>
};

export default Modal