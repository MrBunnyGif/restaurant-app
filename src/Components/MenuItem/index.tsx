import { divType } from "../../types/Components";
import { Product } from "../../types/Redux";

export default (props: divType & Product) => (
    <div style={{
        outline: '1px solid tomato'
    }}>
        <img width={'100%'} src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
        <footer style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '.5rem'
        }}>
            <span>Nome aqui</span>
            <span>Preço aqui</span>
        </footer>
    </div>
)