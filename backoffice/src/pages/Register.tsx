import { Box } from "../components/Box";
import { Button } from "../components/ButtonBase";
import Input from '../components/Input';

import { useForm } from "react-hook-form";
import { useState } from "react";


export default function Register(){      
    return (
        <main className="container">
            <div className="box-content">
                <Box>
                    <h1>Registre uma Conta</h1>
                    <form action="">
                        <Input type="email" placeholder="E-mail" required name={""}></Input>
                        <Input type="text" placeholder="Nome Completo" required name={""}></Input>
                        <Input type="password" placeholder="Senha" required name={"firstPassword"}></Input>
                        <Input type="password" placeholder="Confirmar Senha" required name={"secondPassword"}></Input>

                        <Button type="submit">Criar</Button>
                    </form>
                </Box>
            </div>
        </main>
    );
}