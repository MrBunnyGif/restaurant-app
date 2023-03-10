const BascketItem = (props: { name: string }) => (
    <li>
        <div style={{
            width: '100%',
            justifyContent: 'space-between',
            display: 'flex'
        }}>{props.name} - Quant. - <input type="checkbox" /> </div>
    </li>
)

export default (props: { items: any[] }) => (
    <ul>
        {props.items.map(i => (
            <BascketItem name={i} />
        ))}
    </ul>
)