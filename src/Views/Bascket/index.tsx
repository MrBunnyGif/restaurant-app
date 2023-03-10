import BascketFooter from "../../Components/BascketFooter";
import CloseButton from "../../Components/CloseButton";
import ItemsList from "../../Components/ItemsList";

export default () => (
    <>
        <CloseButton />
        <ItemsList items={['qwe', 'asd', 'zxc', '123', 'rty']} />
        <BascketFooter inBascket />
    </>
)