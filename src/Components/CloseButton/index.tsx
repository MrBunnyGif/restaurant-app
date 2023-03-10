export default () => (
    <button
        style={{
            transform: 'rotate(45deg)',
            position: 'fixed',
            top: '1rem',
            left:'1rem',
            boxShadow:'1px 1px black'
        }}
        onClick={() => alert('close')}
    > + </button>
)