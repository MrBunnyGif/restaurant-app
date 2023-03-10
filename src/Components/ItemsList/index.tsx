import { useId } from 'react'

const BascketItem = (props: { name: string }) => (
    <div style={{
        width: '100%',
        justifyContent: 'space-between',
        display: 'flex'
    }}>{props.name} - Quant. <input type="checkbox" disabled /> </div>
)

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