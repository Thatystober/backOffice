import { Button } from "../components/ButtonBase";
import Input from '../components/Input';


export default function Register(){
    return (
        <>
            <Input type="text" placeholder="E-mail"></Input>
            <Button type="submit">Criar</Button>
        </>
    );
}