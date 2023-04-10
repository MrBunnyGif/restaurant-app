import { useSelector } from "react-redux";
import BascketFooter from "../../components/BascketFooter";
import CloseButton from "../../components/CloseButton";
import ItemsList from "../../components/ProductsList";
import { RootState } from "../../store";
import { Product } from "../../types/redux";

export default () => {
	const bascket = useSelector((state: RootState) => state.globalActions.currentBascket)

	const getBascketProductsNames = (products: Product[]): string[] => {
		return products.map(product => product.title)
	}

	return (
		<>
			<CloseButton />
			{bascket?.products.length ?
				<ItemsList items={getBascketProductsNames(bascket?.products)} />
				:
				<>
					<br />
					<br />
					<h4 style={{ marginLeft: '1rem' }}>Nenhum produto adicionado</h4>
				</>

			}
			{/* <BascketFooter inBascket /> */}
		</>
	)
}