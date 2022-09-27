import { InputHTMLAttributes, useState } from "react";
import { useForm } from "react-hook-form";
import '../styles/input.scss';

type input = InputHTMLAttributes<HTMLButtonElement>;
type label = {
    label: string,
    error?: string,
    name?: string,
};

type Props = input & label;

export default function Input(props:Props) {
    const { register} = useForm();
    return (
        <div id="inputComponent">
            <label htmlFor={props.label}></label>
            <input className="input" type={props.type} placeholder={props.placeholder} required={props.required} {...register("name")} name={props.name} />
            {props.error && <div>{props.error}</div>} 
        </div>
    );
}