import { ButtonHTMLAttributes } from "react";

export default (props: ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button
        style={{
            transform: 'rotate(45deg)',
            position: 'fixed',
            top: '1rem',
            left: '1rem',
            boxShadow: '1px 1px black'
        }}
        onClick={() => alert('close')}
    {...props}> + </button>
)