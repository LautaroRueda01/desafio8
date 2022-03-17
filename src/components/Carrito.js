import { useContext } from "react"
import { contexto } from "./miContexto"

const Carrito = () => {

    const {carrito,total,setCarrito} = useContext(contexto)

    const handleClick = () => {
        
    }

    return (
        <div>
            <h2>Carrito</h2>
            {carrito.map(producto => (
                <div key={producto.id}>
                    <p>{producto.nombre}</p>
                    <p>{producto.cantidad} x {producto.precio}</p>
                    <p>Total Parcial: {producto.cantidad * producto.precio}</p>
                    <button onClick={handleClick}>Borrar</button>
                </div>
            ))}
        </div>
    )
}

export default Carrito;

