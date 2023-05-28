"use client";

import { useState, useEffect, useCallback } from "react";

import { IoMdClose } from "react-icons/io";

interface ModalsProps {
  isOpen?: boolean;
  disabled?: boolean;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
  actionLabel: string;
  onClose: () => void;
  onSubmit: () => void;
}

export const Modal: React.FC<ModalsProps> = ({
  isOpen,
  disabled,
  title,
  body,
  footer,
  secondaryAction,
  secondaryActionLabel,
  actionLabel,
  onClose,
  onSubmit,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }
    secondaryAction();
  }, [disabled, secondaryAction]);
  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed flex justify-center items-center overflow-x-hidden overflow-y-auto inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
      <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/6 my-6 mx-auto h-full lg:h-auto md:h-auto">
        {/* content */}
        <div
          className={`
        translate duration-300 h-full
        ${showModal ? "translate-y-0" : "translate-y-full"}
        ${showModal ? "opacity-100" : "opacity-0"}
        `}
        >
          <div
            className="translate
          h-full lg:h-auto md:h-auto border0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
          >
            {/* HEADER */}
            <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
              <button
                onClick={handleClose}
                className="p-1 border-0 hover:opacity-70 transition absolute left-9"
              >
                <IoMdClose size={28} />
              </button>
              <div className="text-lg font-semibold">{title}</div>
            </div>
            {/* BODY */}
            <div className="relative flex-auto">{body}</div>
            {/* FOOTER */}
            <div className="flex flex-col gap-2 p-6">
              <div className="flex flex-row items-center justify-center gap-4 w-full">
                You can see content of modal
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
