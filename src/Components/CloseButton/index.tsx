import { ButtonHTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";

export default (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
    const navigate = useNavigate();

    return (
        <button
            style={{
                transform: 'rotate(45deg)',
                position: 'fixed',
                top: '1rem',
                left: '1rem',
                boxShadow: '1px 1px black'
            }}
            onClick={() => navigate(-1)}
            {...props}> + </button>
    )
}