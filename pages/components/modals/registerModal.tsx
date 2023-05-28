"use client";

import axios from "axios";

import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import { useState, useCallback } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import useRegisterModal from "../../hooks/useRegisterModal";
import { Modal } from "./view";

export default function RegisterModal() {
  const [isLoading, setIsLoading] = useState(false);

  const registerModal = useRegisterModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("/api/register", data)
      .then(() => {
        registerModal.onClose();
      })
      .catch((error) => {
        console.log("error : ", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = <div className="flex flex-col gap-4"></div>;
  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Modal is open now"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
    />
  );
}
