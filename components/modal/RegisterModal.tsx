"use client";
import { useState, useCallback } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "@/app/hooks/useregisterModal";
import axios from "axios";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import toast from "react-hot-toast";
import Button from "../Button";

const RegisterModal = () => {
  const registerModal = useRegisterModal();

  const [isLoading, setIsLoading] = useState(false);

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
        toast.error("Something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <>
      <div className="flex flex-col gap-4">
        <Heading title="Welcome to Airbnb" subtitle="Create an Account" />
        <Input
          required
          register={register}
          error={errors}
          id="email"
          label="Email"
          disabled={isLoading}
        />
        <Input
          required
          register={register}
          error={errors}
          id="name"
          label="Name"
          disabled={isLoading}
        />
        <Input
          required
          type="password"
          register={register}
          error={errors}
          id="password"
          label="Password"
          disabled={isLoading}
        />
      </div>
    </>
  );
  const footerContent = (
    <div className="flex  flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => ""}
      />
      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => ""}
      />
      <div className="flex flex-row justify-center items-center gap-2">
        <div className="text-neutral-500 text-center mt-4 font-light">
          Already have an account?
        </div>
        <div onClick={registerModal.onClose} className="text-neutral-800 cursor-pointer hover:underline text-center mt-4 font-light">
          Login
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Modal
        disabled={isLoading}
        isOpen={registerModal.isOpen}
        title="Register"
        actionLabel="Continue"
        onClose={registerModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        footer={footerContent}
      />
    </>
  );
};
export default RegisterModal;