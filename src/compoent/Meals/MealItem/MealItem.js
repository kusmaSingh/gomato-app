import classes from './MealItem.module.css';
import React from 'react';
import MealItemForm from './MealsItemForm';

const MealItem =(props) =>{
   // const price = `${props.price.toFixed(2)}`;
    return (
      <li className={classes.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.meal.description}</div>
          <div className={classes.meal.price} >  {classes.meal.price}    </div>
        </div>
        <div>
            <MealItemForm/>
        </div>
      </li>
    );

}
export default MealItem;