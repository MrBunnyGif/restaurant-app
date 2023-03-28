import { useEffect, useId } from 'react'
import { useNavigate } from 'react-router-dom';
import BascketFooter from "../../Components/BascketFooter";
import SectionButton from '../../Components/SectionButton';
import MenuItem from "../../Components/MenuItem";
import { getProductsList } from '../../services';

const twentyFiveItems = 'a'.replaceAll('a', 'aaaaa').replaceAll('a', 'aaaaa').split('')

export default () => {
	const navigate = useNavigate()

	useEffect(() => {
		getProductsList()
			.then((data) => console.log(data))
			.catch(err => console.log(err))
	}, [])

	return (
		<>
			<SectionButton />

			<div style={{
				display: 'grid',
				gridTemplateColumns: '1fr 1fr',
				gap: '.5rem',
				padding: '.5rem',
				paddingBottom: 'calc(.5rem + 53px)'
			}}>
				{twentyFiveItems.map(() => <MenuItem onClick={() => navigate('/item')} key={useId()} />)}
				<BascketFooter onClick={() => navigate('/bascket')} />
			</div>
		</>
	)
}