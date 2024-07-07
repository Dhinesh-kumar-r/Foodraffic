import React, { useContext } from 'react';
import "../Modal/Modal.css";
import { IoMdClose } from "react-icons/io";
import { StoreContext } from '../../Context/Context';

const Modal = () => {
    const { openModal, setOpenModal } = useContext(StoreContext);
    return (
        <>
            {openModal && (
                <div className="modalOverlay">
                    <div className="modalContainer">
                        <div className="modalHeader">
                            <span className="closeIconContainer">
                                <IoMdClose className='closeIcon' onClick={() => setOpenModal(false)} />
                            </span>
                        </div>
                        <div className="modalTitle">
                            <span className="title">LogIn</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;
