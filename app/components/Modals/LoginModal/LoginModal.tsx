'use client';
import axios from 'axios'
import {signIn} from 'next-auth/react'
import {  AiFillApple, AiFillFacebook, AiFillGithub } from 'react-icons/ai';
import { FcGoogle,  } from "react-icons/fc"
import { useState, useCallback } from 'react';
import {
    FieldValues,
    SubmitHandler,
    useForm
} from "react-hook-form";
import useLoginModal from '@/app/hooks/useLoginModal';
import Modal from '../Modal/Modal';
import Heading from '../../Misc/Heading/Heading';
import Input from '../../Misc/Input/Input';
import { toast } from 'react-hot-toast';
import { ButtonComponent } from '../../Misc';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import { Router } from 'next/router';
import {useRouter} from 'next/navigation'
const LoginModal = () => {
    const router = useRouter();
    const registerModal = useRegisterModal();
    const loginmodal = useLoginModal();
    const [isLoading, setisLoading] = useState(false);
    const { register, handleSubmit, formState: { errors, } } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: '',
        }
    })
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setisLoading(true);

        signIn('credentials', {
            ...data, 
            redirect: false, 
        })
        .then((callback) =>{
            setisLoading(false)
            if(callback?.ok){
                toast.success("Logged in")
                router.refresh();
                loginmodal.onClose(); 
                
            }

            if(callback?.error){
                toast.error(callback.error)
            }
        })
    }
    const BodyContent = (
        <div className='flex flex-col gap-4'>
            <Heading

                title="Welcome back"
                subtitle="Login to account!"
                 />
            <Input id="email" label="Email" register={register} isDisabled={isLoading} errors={errors} required />
            <Input id="password" label="Password" type="Password" register={register} isDisabled={isLoading} errors={errors} required />


        </div>
    )
    const FooterContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr />
            <ButtonComponent outline={true} text='Continue with Github' icon={AiFillGithub} onClick={() => signIn('github')} />
            <div className="text-neutral-500 text-center mt-4 font-light">
                <div className='justify-center flex flex-row items-center gap-2'><div>Already have an account?</div> <div className="text-neutral-800 cursor-pointer hover:underline" onClick={loginmodal.onClose}>Login</div> </div>
            </div>

        </div>
    )
    return (<Modal
        isDisabled={isLoading}
        isOpen={loginmodal.isOpen}
        title="Login"
        actionLabel='Continue'
        onClose={loginmodal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={BodyContent}
        footer={FooterContent}
    />);
}

export default LoginModal;