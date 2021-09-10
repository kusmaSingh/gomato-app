import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import classes from './Header.module.css';
import mealsImage  from '../../assets/meals.jpg'
import HeaderCartButton from "./HeaderCartButton";
const Header =(props)=>{
    return (
      <Fragment>
        <header className={classes.header}>
          <h1>Gomato Meals</h1>
         <HeaderCartButton/>
        </header>
        <div className={classes["main-image"]}>
          <img src={mealsImage} alt="A table full of delicious food!" />
        </div>
      </Fragment>
    );
    
}
export default Header;