'use client';
import axios from 'axios'
import {  AiFillGithub } from 'react-icons/ai';
import { FcGoogle,  } from "react-icons/fc"
import { useState } from 'react';
import {
    FieldValues,
    SubmitHandler,
    useForm
} from "react-hook-form";
import useRegisterModal from '@/app/hooks/useRegisterModal';
import Modal from '../Modal/Modal';
import Heading from '../../Misc/Heading/Heading';
import Input from '../../Misc/Input/Input';
import { toast } from 'react-hot-toast';
import { ButtonComponent } from '../../Misc';
import { signIn } from 'next-auth/react';
const RegisterModal = () => {
    const RegisterModal = useRegisterModal();
    const [isLoading, setisLoading] = useState(false);
    const { register, handleSubmit, formState: { errors, } } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    })
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setisLoading(true);
        axios.post('/api/register', data).then(() => {
            RegisterModal.onClose()
        }).catch((error) => {
            toast.error("Something went wrong.")
        }).finally(() => {
            setisLoading(false)
        })
    }
    const BodyContent = (
        <div className='flex flex-col gap-4'>
            <Heading

                title="Welcome to Airbnb Clone Website"
                subtitle='Create an Account below' />
            <Input id= "email" label="Email" register={register} isDisabled={isLoading} errors={errors} required />
            <Input id="name" label="Name" register={register} isDisabled={isLoading} errors={errors} required />
            <Input id="password" label="Password" type="Password" register={register} isDisabled={isLoading} errors={errors} required />


        </div>
    )
    const FooterContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr />
            <ButtonComponent outline={true} text='Continue with Github' icon={AiFillGithub} onClick={() => signIn('github')} />
            <div className="text-neutral-500 text-center mt-4 font-light">
                <div className='justify-center flex flex-row items-center gap-2'><div>Already have an account?</div> <div className="text-neutral-800 cursor-pointer hover:underline" onClick={RegisterModal.onClose}>Login</div> </div>
            </div>

        </div>
    )
    return (<Modal
        isDisabled={isLoading}
        isOpen={RegisterModal.isOpen}
        title="Register"
        actionLabel='Continue'
        onClose={RegisterModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={BodyContent}
        footer={FooterContent}
    />);
}

export default RegisterModal;