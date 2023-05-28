import React from "react";
import { Modal } from "./components/modals";
import RegisterModal from "./components/modals/registerModal";
import useRegisterModal from "./hooks/useRegisterModal";

export default function Layout() {
  const registerModal = useRegisterModal();
  return (
    <>
      <button
        onClick={registerModal.onOpen}
        className="p-2 w-full bg-red-700 text-white text-semibold"
      >
        Click to open Modal
      </button>
      <RegisterModal />
    </>
  );
}
