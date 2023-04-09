import { useId } from 'react'
import BascketProduct from '../BascketProduct'


export default (props: { items: any[] }) => (
    <div style={{
        padding: '0.5rem',
        paddingTop: '3rem'
    }}>
        {props.items.map(i => (
            <BascketProduct key={useId()} name={i} />
        ))}
    </div>
)