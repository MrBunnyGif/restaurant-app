import { useId } from 'react'
import logo from '../../logo.svg'
import Button from "../../Components/Button";
import BascketItem from '../../Components/BascketItem'
import BascketFooter from '../../Components/BascketFooter';

const itemsBoxStyle = {
	outline: '1px solid tomato',
	maxHeight: '100px',
	overflow: 'auto',
	paddingRight: '.5rem'
}

export default () => (
	<>
		<div style={{
			padding: '1rem'
		}}>
			<div style={{
				outline: '1px solid red',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-around'
			}}>
				<img width={100} src={logo} className="App-logo" alt="logo" />
				<Button />
			</div>

			<div>
				<h3>Itens a serem entregues à mesa</h3>
				<div style={itemsBoxStyle}>
					{['1', '2', '3'].map(i => (
						<BascketItem key={useId()} name={i} />
					))}
				</div>
			</div>

			<div>
				<h3>Itens já entregues à mesa</h3>
				<div style={itemsBoxStyle}>
					{['4', '5', '6', '7', '8', '9', '10'].map(i => (
						<BascketItem key={useId()} name={i} />
					))}
				</div>
			</div>
		</div>
		<BascketFooter />
	</>
)