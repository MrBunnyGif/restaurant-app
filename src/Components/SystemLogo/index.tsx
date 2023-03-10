import logo from '../../logo.svg'

export default () => (
    <footer style={{
        position: 'fixed',
        bottom: '0',
        left: '0',
        right: '0',
        textAlign:'center'
    }}>
        <img width={100} src={logo} className="App-logo" alt="logo" />
    </footer>
)