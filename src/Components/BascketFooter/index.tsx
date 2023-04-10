import { useSelector } from 'react-redux'
import { divType } from '../../types/components'
import Button from '../Button'
import { RootState } from '../../store'
import { useEffect } from 'react'
import { Product } from '../../types/redux'
export default (props: divType) => {
	const bascket = useSelector((state: RootState) => state.globalActions.currentBascket)

	const sumBascketPrices = (products: Product[] | undefined): string => {
		let total = 0;
		if (products?.length)
			products.forEach(product => total += product.price)
		return total.toLocaleString("pt-BR", {
			style: "currency",
			currency: "BRL",
		});
	}

	return (
		<footer style={{
			backgroundColor: 'tomato',
			position: 'fixed',
			bottom: '0',
			right: '0',
			left: '0',
			padding: '1rem 0.5rem',
			display: 'flex',
			justifyContent: 'space-between'
		}} onClick={props.onClick}>
			<div>
				{props.inBascket ?
					<></>
					:
					<span style={{
						marginRight: '1rem'
					}}>{bascket?.products.length || 0} Items</span>
				}
				<span>{sumBascketPrices(bascket?.products)}</span>
			</div>
			<Button />
		</footer >
	)
}