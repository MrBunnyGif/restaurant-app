import BascketFooter from "../../Components/BascketFooter";
import CloseButton from "../../Components/CloseButton";
import MenuItem from "../../Components/MenuItem";

export default () => (
	<>
		<CloseButton />
		<div style={{
			padding: '.5rem',
			paddingBottom: 'calc(.5rem + 55px)'
		}}>
			<img width={'100%'} src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
			<h3>Nome do item</h3>
			<h4>Também pedido com este item</h4>
			<div style={{
				display: "flex",
				overflow: 'auto',
				padding: '.5rem'
			}}>
				{[1, 2, 3, 4, 5].map(i => (
					<div key={i} style={i !== 5 ? { marginRight: '1rem' } : undefined}>
						<span>Produto aqui</span>
						{/* <MenuItem /> */}
					</div>
				))}
			</div>
			<BascketFooter />
		</div>
	</>
)