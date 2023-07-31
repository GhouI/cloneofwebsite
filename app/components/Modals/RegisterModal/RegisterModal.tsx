'use client'; 
import axios from 'axios'
import { AiFillGithub } from 'react-icons/ai';
import {FcGoogle} from "react-icons/fc"
import { useState, useCallback } from 'react';
import { 
  FieldValues, 
  SubmitHandler,
  useForm
} from "react-hook-form";
import useRegisterModal from '@/app/hooks/useRegisterModal';
import Modal from '../Modal/Modal';
import Heading from '../../Misc/Heading/Heading';
const RegisterModal = () => {
    const RegisterModal = useRegisterModal(); 
    const [isLoading, setisLoading] = useState(false);
    const {register, handleSubmit, formState : {errors,}} = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    })
    const onSubmit: SubmitHandler<FieldValues> = (data) =>{
        setisLoading(true); 
        axios.post('/api/register', data).then(() =>{
            RegisterModal.onClose()
        }).catch((error) =>{
            console.error(error);
        }).finally(() =>{
            setisLoading(false)
        })
    }
    const Body = (
        <div className='flex flex-col gap-4'>
           <Heading /> 
        </div>
    )
    return (<Modal 
        isDisabled={isLoading}
        isOpen={RegisterModal.isOpen}
        title="Register"
        actionLabel='Continue'
        onClose={RegisterModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={Body}
    />);
}
 
export default RegisterModal;