import { useEffect, useId } from 'react'
import { useNavigate } from 'react-router-dom';
import BascketFooter from "../../Components/BascketFooter";
import SectionButton from '../../Components/SectionButton';
import MenuItem from "../../Components/MenuItem";
import { getProductsList } from '../../services';
import { useDispatch, useSelector } from 'react-redux'
import { createProductsList } from '../../slice';
import type { RootState } from '../../store'

const twentyFiveItems = 'a'.replaceAll('a', 'aaaaa').replaceAll('a', 'aaaaa').split('')

export default () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const productsList = useSelector((state: RootState) => state.products.productsList)

	useEffect(() => {
		getProductsList()
			.then((res: any) => dispatch(createProductsList(res.data.products)))
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
				{productsList.length ?
					productsList.map(product => <MenuItem {...product} onClick={() => navigate(`/item/${product.id}`)} key={product.id} />)
					:
					<h2>Carregando produtos...</h2>
				}
				<BascketFooter onClick={() => navigate('/bascket')} />
			</div>
		</>
	)
}