import { useId } from 'react'
import { useNavigate } from 'react-router-dom';
import BascketFooter from "../../Components/BascketFooter";
import MenuItem from "../../Components/MenuItem";

const twentyFiveItems = 'a'.replaceAll('a', 'aaaaa').replaceAll('a', 'aaaaa').split('')

export default () => {
    const navigate = useNavigate()

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '.5rem',
            padding: '.5rem',
            paddingBottom: 'calc(.5rem + 53px)'
        }}>
            {twentyFiveItems.map(() => <MenuItem onClick={()=>navigate('/item')} key={useId()} />)}
            <BascketFooter onClick={() => navigate('/bascket')} />
        </div>

    )
}