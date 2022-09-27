import { Box } from "../components/Box";
import { Button } from "../components/ButtonBase";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export default function Register(){  
    const validationSchema = Yup.object().shape({
        email: Yup.string()
          .required('Email é obrigatório')
          .email('Email é inválido'),
        name: Yup.string().required('Nome completo is required'),
        password: Yup.string()
          .required('Password é obrigatório')
          .min(6, 'Password must be at least 6 characters')
          .max(40, 'Password must not exceed 40 characters'),
        confirmPassword: Yup.string()
          .required('Confirm Password is required')
          .oneOf([Yup.ref('password'), null], 'Confirm Password does not match')
    });

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });
    
    return (
        <main className="container">
            <div className="box-content">
                <Box>
                    <h1>Registre uma Conta</h1>
                    <form action="" onSubmit={handleSubmit((data) => console.log(data))}>
                        <input type="email" {...register('email')} placeholder="email@email.com"/>
                        <div className="invalid-feedback">{errors.email?.message}</div>


                        {/* <input type="email" {...register("email", {required: true})} placeholder="email@email.com" />
                        {errors.email && "Email Address is required"}
                        <input type="text" {...register("name", {required: true})} placeholder="Maria Silva"/>
                        {errors.email && "Email Address is required"}
                        <input type="password" /> */}
                        <Button type="submit">Criar</Button>
                    </form>
                </Box>
            </div>
        </main>
    );
}

function handleSubmit(onSubmit: any): import("react").FormEventHandler<HTMLFormElement> | undefined {
    throw new Error("Function not implemented.");
}
