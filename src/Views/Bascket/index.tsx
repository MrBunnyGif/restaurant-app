import BascketFooter from "../../Components/BascketFooter";
import CloseButton from "../../Components/CloseButton";
import ItemsList from "../../Components/ItemsList";
import { useNavigate } from "react-router-dom";

export default () => {
    const navigate = useNavigate()

    return (
        <>
            <CloseButton onClick={() =>navigate('/menu')} />
            <ItemsList items={['qwe', 'asd', 'zxc', '123', 'rty']} />
            <BascketFooter  inBascket />
        </>
    )
}