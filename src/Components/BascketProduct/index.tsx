export default (props: { name: string }) => (
    <div style={{
        width: '100%',
        justifyContent: 'space-between',
        display: 'flex'
    }}>{props.name} - Quant. <input type="checkbox" disabled /> </div>
)