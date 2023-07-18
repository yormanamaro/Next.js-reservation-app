// Se deja una interfaz exportable que es la que va a servir para el registro de usuarios y carrito

export default interface RegisterModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}