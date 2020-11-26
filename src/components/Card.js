// Esto es un componente Tonto!!! 
import React from 'react'

//ArrowFuction tiene implicito un return asi que no es necesario ponerlo solo usar parentesis

const Card = ({img,name,phone}) => (
    <div className="cardStyle">
        <img src={img} className="imgStyle" />
        <span>Nombre: {name}</span>
        <span>Telefono: {phone}</span>
    </div>
);

// Este es un ejemplo de arrowFunction con llaves que lleva forzoso un return 
// const Card2 = () => {
//     return (
//     <div>


//     </div>
//     )
// }

export default Card;