import { InputHTMLAttributes, useState } from "react";
import '../styles/input.scss';

type input = InputHTMLAttributes<HTMLButtonElement>;
type label = {
    label: string,
    error?: string,
    name: any
};

type Props = input & label;

export default function Input(props:Props) {
    return (
        <div id="inputComponent">
            <label htmlFor={props.label}></label>
            <input className="input" type={props.type} placeholder={props.placeholder} required={props.required} name={props.name} />
            {props.error && <div>{props.error}</div>} 
        </div>
    );
}