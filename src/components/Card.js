// Esto es un componente Tonto!!! 
import React from 'react'

//ArrowFuction tiene implicito un return asi que no es necesario ponerlo solo usar parentesis

const Card = ({name,catchPhrase}) => (
    <div className="cardStyle">
        <img src={{uri:"https://avatars3.githubusercontent.com/u/29002976?s=400&u=162a3266866c089404e113c204e8af61c08195a1&v=4"}} className="imgStyle" />
        <span>Nombre: {name}</span>
        <span>Frase: {catchPhrase}</span>
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