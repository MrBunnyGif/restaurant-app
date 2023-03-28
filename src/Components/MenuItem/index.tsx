import { divType } from "../../types/Components";
import { Product } from "../../types/Redux";

export default (props: divType & Product) => (
    <div style={{ outline: '1px solid tomato' }}
        onClick={props.onClick}
    >
        <img width={'100%'} height="175" src={props.thumbnail} />
        <footer style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '.5rem'
        }}>
            <span>{props.title.slice(0, 10)}</span>
            <span>{props.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
        </footer>
    </div>
)