import { Button } from "../components/ButtonBase";
import Input from '../components/Input'; 
import '../styles/register.scss'

export default function Register(){
    return (
        <main className="container">
            <div id="pageRegister">
                <h1>Registre uma Conta</h1>
                <form action="">
                    <Input type="e-mail" placeholder="E-mail" required></Input>
                    <Input type="text" placeholder="Nome Completo" required></Input>
                    <Input type="password" placeholder="Senha" required></Input>
                    <Input type="password" placeholder="Confirmar Senha" required></Input>

                    <Button type="submit">Criar</Button>
                </form>
                
            </div>
        </main>
            
    );
}