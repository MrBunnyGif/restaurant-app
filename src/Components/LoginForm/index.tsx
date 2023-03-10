import Input from "../Form/Input"
import logo from '../../logo.svg'
import Buton from "../Buton"

export default () => {
    return (
        <div style={{
            position: 'fixed',
            top: '50%',
            left: '0',
            right: '0',
            transform: 'translate(0%, calc(-50% - 75px))',
            textAlign:'center'
        }}>
            <img width={200} src={logo} className="App-logo" alt="logo" />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '70%',
                margin: 'auto'
            }}>
                <Input placeholder="email" />
                <Input placeholder="password" />
                <Buton />
            </div>
        </div>
    )
}