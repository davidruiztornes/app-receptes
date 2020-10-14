import React from 'react';
import style from './Recepte.module.css';
const Recepte = ({title,calories,image,ingredients}) => {
    return(
        <div className={style.resepte}>
            <h1>{title}</h1>
            <ul>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <p>Calories: {Math.round(calories)}</p>
            <img src={image} alt=""/>
        </div>
    )
}
export default Recepte;