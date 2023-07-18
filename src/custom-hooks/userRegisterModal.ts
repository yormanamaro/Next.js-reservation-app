import { create } from "zustand"; // importamos un manejador de estado. p[ermitira inicializar la configuracion de estado.
import RegisterModalStore from "./interfaces/registerModal.interfaces";


const useRegisterModal = create<RegisterModalStore>(set => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));

export default useRegisterModal;