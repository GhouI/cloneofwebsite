import {create} from 'zustand'

interface ReigsterStoreModal {
    isOpen: boolean; 
    onOpen: () => void;
    onClose: () => void; 
}

const useRegisterModal = create<ReigsterStoreModal>((set) =>({
    isOpen: false,
    onOpen: () => set({isOpen: true}), 
    onClose: () => set({isOpen: false})
}))

export default useRegisterModal;