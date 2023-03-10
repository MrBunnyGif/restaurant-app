import BascketFooter from "../../Components/BascketFooter";
import MenuItem from "../../Components/MenuItem";

const twentyFiveItems = 'a'.replaceAll('a', 'aaaaa').replaceAll('a', 'aaaaa').split('')

export default () => (
    <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '.5rem',
        padding: '.5rem'
    }}>
        {twentyFiveItems.map(i => <MenuItem />)}
        <BascketFooter />
    </div>

)