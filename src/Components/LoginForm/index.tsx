import Input from "../Form/Input"
import logo from '../../logo.svg'
import Buton from "../Buton"

export default () => {
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <Input />
            <Input />
            <Buton />
        </div>
    )
}