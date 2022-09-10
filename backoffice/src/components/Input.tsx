import { InputHTMLAttributes } from "react";
import '../styles/input.scss';

type input = InputHTMLAttributes<HTMLButtonElement>;

export default function Input(props:input){
    return (
        <div id="inputComponent">
            <label htmlFor="">
                <input className="input" type={props.type} placeholder={props.placeholder}/>
            </label>
        </div>
    );
}