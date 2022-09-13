import { InputHTMLAttributes } from "react";
import '../styles/input.scss';

type input = InputHTMLAttributes<HTMLButtonElement>;
// type label = {
//     name: string
// };

// type Props = input & label;

export default function Input(props:input) {
    return (
        <div id="inputComponent">
            <label htmlFor=""></label>
            <input className="input" type={props.type} placeholder={props.placeholder} required={props.required}/>
        </div>
    );
}