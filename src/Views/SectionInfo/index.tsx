import { useId } from 'react'
import Button from "../../components/Button";
import BascketProduct from '../../components/BascketProduct'
import BascketFooter from '../../components/BascketFooter';
import { useNavigate } from "react-router-dom";
import CloseButton from '../../components/CloseButton';
import Auth from '../../Auth';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
const logo = require("../../logo.svg") as string;

const itemsBoxStyle = {
	outline: '1px solid tomato',
	maxHeight: '100px',
	overflow: 'auto',
	paddingRight: '.5rem'
}


export default () => {
	const navigate = useNavigate();
	const bascket = useSelector((state: RootState) => state.globalActions.currentBascket)

	const handleFinish = () => {
		Auth.finishSection()
			.then(() => navigate('/'))
			.catch(error => { throw new Error(error) })
	}

	return (
		<>
			<CloseButton />

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
					<Button onClick={handleFinish} />
				</div>

				<div>
					{bascket?.status === 'on-kitchen' ?
						<>
							<h3>Itens a serem entregues à mesa</h3>
							<div style={itemsBoxStyle}>
								{bascket?.products.map(product => (
									<BascketProduct key={useId()} name={product.title} />
								))}
							</div>
						</>
						:
						<></>
					}
				</div>

				<div>
					<h3>Itens já entregues à mesa</h3>
					<div style={itemsBoxStyle}>
						{['4', '5', '6', '7', '8', '9', '10'].map(i => (
							<BascketProduct key={useId()} name={i} />
						))}
					</div>
				</div>
			</div>
			{/* <BascketFooter /> */}
		</>
	)
}