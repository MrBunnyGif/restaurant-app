import Button from '../Button'

export default (props: { inBascket?: boolean }) => (
    <footer style={{
        backgroundColor: 'tomato',
        position: 'fixed',
        bottom: '0',
        right: '0',
        left: '0',
        padding: '1rem 0.5rem',
        display: 'flex',
        justifyContent: 'space-between'
    }}>
        <div>
            {props.inBascket ?
                <></>
                :
                <span style={{
                    marginRight: '1rem'
                }}>N° Items</span>
            }
            <span>R$ Total</span>
        </div>
        <Button />
    </footer >
)