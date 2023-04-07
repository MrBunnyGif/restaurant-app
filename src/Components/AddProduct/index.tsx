import { useState } from "react"

<button>+</button>
export default (props:
  { addProducts: (v: number) => void }
) => {
  const [quantity, setQuantity] = useState<number>(1)

  return (
    <div style={{
      position: 'fixed',
      right: '1rem',
      bottom: '4rem',
      backgroundColor: 'white',
      padding: '.5rem',
      borderRadius: '.5rem'
    }}>
      <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
      <input title="Quantidadde" value={quantity} style={{
        maxWidth: '1rem',
        textAlign: 'center',
        marginLeft: '.5rem'
      }} type="number" disabled />
      <button disabled={quantity === 0} style={{ marginLeft: '.5rem' }} onClick={() => quantity > 0 ? setQuantity(prev => prev - 1) : null}>-</button>

      <button style={{ marginLeft: '1rem' }} onClick={() => props.addProducts(quantity)}>Adicionar</button>
    </div>
  )
}