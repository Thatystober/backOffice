import {ButtonHTMLAttributes} from 'react';

import '../styles/buttonBase.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps){
    return(
        <div className="content-button">
            <button className="button" {...props}/>
        </div>
       
    )
}