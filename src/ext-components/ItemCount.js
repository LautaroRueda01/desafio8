import { useState } from "react"

const ItemCount = ({initial, stock,onAdd}) => {

    let [estado, setEstado] = useState(initial)

    const handleSumar = () => {
        if(estado < stock){
            setEstado(estado + 1)
        }
    }

    const handleRestar = () => {
        if(estado > initial){
            setEstado(estado - 1)
        }
        
    }
    
    const handleAgregar = () => {
        onAdd(estado)
    }

    return (
        <div>
            <p>Mi Contador va : {estado}</p>
            <button onClick={handleSumar}>sumar</button>
            <button onClick={handleAgregar}>confirmar cantidad seleccionada</button>
            <button onClick={handleRestar}>restar</button>
        </div>
    )
}

export default ItemCount;