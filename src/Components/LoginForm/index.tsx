import Input from "../Form/Input"
import Buton from "../Button"
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import Auth from "../../Auth";
const logo = require("../../logo.svg") as string;

export default () => {
	const navigate = useNavigate();
	const [nameValue, setNameValue] = useState<string>('')
	const [numberValue, setNumberValue] = useState<string>('')

	const handleStartSection = () => {
		Auth.startSection(nameValue, numberValue)
			.then(() => navigate('/menu'))
			.catch(err => { throw new Error(err) })
	}

	return (
		<div style={{
			position: 'fixed',
			top: '50%',
			left: '0',
			right: '0',
			transform: 'translate(0%, calc(-50% - 75px))',
			textAlign: 'center'
		}}>
			<img width={200} src={logo} className="App-logo" alt="logo" />
			<div style={{
				display: 'flex',
				flexDirection: 'column',
				maxWidth: '70%',
				margin: 'auto'
			}}>
				<Input onChange={v => setNameValue(v.target.value)} placeholder="Nome" />
				<Input onChange={v => setNumberValue(v.target.value)} type="number" placeholder="N° de pessoas" />
				<Buton disabled={!nameValue?.length || !numberValue?.length} onClick={handleStartSection} />
			</div>
		</div>
	)
}