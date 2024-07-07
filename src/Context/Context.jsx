import { createContext, useState } from "react";

export const StoreContext = createContext();

export const ModalProvider = ({ children }) => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <StoreContext.Provider value={{ openModal, setOpenModal }}>
            {children}
        </StoreContext.Provider>
    );
};
