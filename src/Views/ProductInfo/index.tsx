import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import BascketFooter from "../../Components/BascketFooter";
import CloseButton from "../../Components/CloseButton";
import { getProductInfo, getProductsList } from "../../services";
import { Product } from "../../types/Redux";
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../store'
import MenuItem from "../../Components/MenuItem";
import { addProductsToBascket, createProductsList, globalActions } from "../../slice";
import AddProduct from "../../Components/AddProduct";

export default () => {
	const { id } = useParams();
	const [product, setProduct] = useState<Product>()
	const dispatch = useDispatch()
	const productsList = useSelector((state: RootState) => {
		if (!state.globalActions.productsList.length)
			getProductsList()
				.then((res: any) => dispatch(createProductsList(res.data.products)))
				.catch(err => console.error(err))
		return state.globalActions.productsList
	})
	const navigate = useNavigate()

	useEffect(() => {
		if (!id)
			return
		getProductInfo(id)
			.then((res: any) => setProduct(res.data))
			.catch(err => console.error(err))
	}, [id])

	if (!product)
		return <></>

	return (
		<>
			<CloseButton />
			<div style={{
				padding: '.5rem',
				paddingBottom: 'calc(.5rem + 55px)'
			}}>
				<img width={'100%'} height={350} src={product.images[0]} />
				<h3>{product.title || 'Carregando produto...'}</h3>
				<p>{product.description}</p>
				<h4>Também pedido com este item</h4>
				<div style={{
					display: "flex",
					overflow: 'auto',
					padding: '.5rem'
				}}>
					{productsList.map((product, i) => (
						<div key={product.id} style={i + 1 < productsList.length ? { marginRight: '1rem' } : undefined}>
							<MenuItem {...product} onClick={() => navigate(`/item/${product.id}`)} key={product.id} />
						</div>
					))}
				</div>
				<AddProduct addProducts={q => dispatch(addProductsToBascket({ product: product, quantity: q }))} />
				<BascketFooter />
			</div>
		</>
	)
}