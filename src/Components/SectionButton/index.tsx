import { useNavigate } from "react-router-dom";

export default () => {
    const navigate = useNavigate();

    return (
        <button
            style={{
                position: 'fixed',
                right: '1rem',
                top: '1rem'
            }}
            onClick={() => navigate('/section')}>Menu</button>
    )
}