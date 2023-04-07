import { useId } from 'react'
import BascketItem from '../BascketProduct'


export default (props: { items: any[] }) => (
    <div style={{
        padding: '0.5rem',
        paddingTop: '3rem'
    }}>
        {props.items.map(i => (
            <BascketItem key={useId()} name={i} />
        ))}
    </div>
)