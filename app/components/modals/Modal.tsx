"use client";

import { useState, useEffect, useCallback } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";

export default function Modal({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabeld,
    secondaryAction,
    secondaryActionLabel,
}: {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabeld?: boolean;
    secondaryAction?: () => {};
    secondaryActionLabel?: string;
}) {
    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen]);

    const handleClose = useCallback(() => {
        if (disabeld) return;

        setShowModal(false);

        setTimeout(() => {
            onClose();
        }, 300);
    }, [disabeld, onClose]);

    const handleSubmit = useCallback(() => {
        if (disabeld) return;

        onSubmit();
    }, [disabeld, onSubmit]);

    const handelSecondsaryAction = useCallback(() => {
        if (disabeld || !secondaryAction) return;

        secondaryAction();
    }, [disabeld, secondaryAction]);

    if (!isOpen) {
        return null;
    }

    return (
        <>
            <div className="flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none 
            bg-neutral-800/70">
                <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full md:h-auto">
                    <div className={`transition duration-300 h-full 
                    ${showModal ? 'translate-y-0' : 'translate-y-full'}
                    ${showModal ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="h-full md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full 
                        bg-white outline-none" aria-modal>
                            <div className="flex items-center p-6 rounded-t justify-center relative border-b" role="header">
                                <button className="p-1 border-0 hover:opacity-70 transition absolute left-9"
                                onClick={handleClose}>
                                    <IoMdClose size={18} />
                                </button>
                                <h2>{title}</h2>
                            </div>
                            <div className="p-6 relative flex-auto">
                                {body}
                            </div>
                            <div role="footer" className="flex flex-col gap-2 p-6">
                                <div className="flex items-center gap-4 w-full">
                                    {secondaryAction && secondaryActionLabel && (
                                        <Button 
                                            outline
                                            label={secondaryActionLabel}
                                            disabled={disabeld}
                                            onClick={handelSecondsaryAction}
                                        />
                                    )}
                                    
                                    <Button 
                                        label={actionLabel}
                                        disabled={disabeld}
                                        onClick={handleSubmit}
                                    />
                                </div>
                                {footer}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}