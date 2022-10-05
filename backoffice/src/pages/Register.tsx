import { Box } from "../components/Box";
import { Button } from "../components/ButtonBase";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import '../server';

import { useEffect, useState } from "react";

interface IFormInputs {
    email: string,
    name: number,
    password: string,
    confirmPassword: string
}

const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email é obrigatório')
      .email('Email é inválido'),
    name: Yup.string().required('Nome completo é obrigatório'),
    password: Yup.string()
      .required('Senha é obrigatório')
      .min(6, 'A senha deve ter pelo menos 6 caracteres')
      .max(40, 'A senha não deve exceder 40 caracteres'),
    confirmPassword: Yup.string()
      .required('É obrigatório confirmar a senha')
      .oneOf([Yup.ref('password'), null], 'Senha não corresponde')
});

interface iSubmitStates {
    email: string,
    name: string,
    password: string,
    confirmPassword: string
}

export default function Register(){  
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
        resolver: yupResolver(validationSchema)
    });
    
    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>();
    const [confirmPassword, setConfirmPassword] = useState<string>();

    const [users, setUsers] = useState<iSubmitStates[]>([]);

    useEffect(() => {
        fetch('/api/users')
            .then(res => res.json())
            .then(json => setUsers(json.users))
            .catch(err => console.log(err))
    }, []);


    const mockUser = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        try{
            const res = await fetch('/api/users/', { method: 'POST', body: JSON.stringify({ email, name, password, confirmPassword }) })
            const resJson = await res.json();

            setUsers([...users, resJson.user]);
            setEmail("")
            setName("")
            setPassword("")
            setConfirmPassword("")

            console.log(users)
        } catch (err) {
            console.log(err);
        }
    }

    let onSubmitValidation = () => {
        if(validationSchema){
            handleSubmit((data) =>{console.log(data)})
        }else{
            mockUser
        }
    }

    
    return (
       
        <main className="container">
            <div className="box-content">
                <Box>
                    <h1>Registre uma Conta</h1>
                    <form action="" onSubmit={onSubmitValidation}>
                        <input type="email" {...register('email')} placeholder="email@email.com" value={email}
                            onChange ={e => setEmail(e.target.value)}
                        />
                        <div className="invalid-feedback">{errors.email?.message}</div>

                        <input type="text" {...register('name')} placeholder="Maria da Silva" value={name}
                            onChange ={e => setName(e.target.value)}
                        />
                        <div className="invalid-feedback">{errors.name?.message}</div>

                        <input type="password" {...register('password')} placeholder="xxxxxx" value={password}
                            onChange ={e => setPassword(e.target.value)}
                        />
                        <div className="invalid-feedback">{errors.password?.message}</div>

                        <input type="password" {...register('confirmPassword')} placeholder="xxxxxx" 
                            value={confirmPassword}  onChange ={e => setConfirmPassword(e.target.value)}
                        />
                        <div className="invalid-feedback">{errors.confirmPassword?.message}</div>

                        <Button type="submit" >Criar</Button>
                    </form>
                </Box>
            </div>
        </main>
    );
}
