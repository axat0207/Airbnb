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
import useLoginModal from "@/app/hooks/loginModal";
import { signIn } from "next-auth/react";
import {useRouter} from 'next/navigation'
const LoginModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  
  


  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    
    signIn('credentials',{
        ...data,
        redirect: false
    })
    .then(
        (callback)=>{
            setIsLoading(false);
            if(callback?.ok){
                toast.success('Logged In')
                router.refresh();
                loginModal.onClose();
            }

            if(callback?.error){
                toast.error(callback.error)
            }
        }
    )
  };

  const bodyContent = (
    <>
      <div className="flex flex-col gap-4">
        <Heading title="Welcome Back" subtitle="Login to your    Account" />
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
        onClick={() => signIn('google')}
      />
      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => signIn('github')}
      />
      <div className="flex flex-row justify-center items-center gap-2">
        <div className="text-neutral-500 text-center mt-4 font-light">
          Create an Account?
        </div>
        <div onClick={()=>{loginModal.onClose; registerModal.onOpen}} className="text-neutral-800 cursor-pointer hover:underline text-center mt-4 font-light">
          SignUp
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Modal
        disabled={isLoading}
        isOpen={loginModal.isOpen}
        title="Login"
        actionLabel="Continue"
        onClose={loginModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        footer={footerContent}
      />
    </>
  );
};
export default LoginModal;
