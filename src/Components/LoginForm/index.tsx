import Input from "../Form/Input"
import logo from '../../logo.svg'
import Buton from "../Buton"

export default () => {
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '70%',
                margin: 'auto'
            }}>
                <Input placeholder="email"  />
                <Input placeholder="password" />
                <Buton />
            </div>
        </div>
    )
}