import { Box } from "../components/Box";
import { Button } from "../components/ButtonBase";
import Input from '../components/Input';

import { useForm } from "react-hook-form";
import { useRef, useState } from "react";


export default function Register(){  
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    return (
        <main className="container">
            <div className="box-content">
                <Box>
                    <h1>Registre uma Conta</h1>
                    <form action="" onSubmit={handleSubmit((data) => console.log(data))}>
                        {/* <Input type="email" placeholder="E-mail" required label={""} {...register("email")}></Input> */}
                        <Input type="text" placeholder="Nome Completo" {...register("name")} label={""}></Input>
                        {/* <Input type="password" placeholder="Senha" required name={""} label={"firstPassword"}></Input>
                        <Input type="password" placeholder="Confirmar Senha" required name={""} label={"secondPassword"}></Input> */}
                        
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
