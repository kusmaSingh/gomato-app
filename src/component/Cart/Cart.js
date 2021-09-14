
import classes from "./Cart.module.css";
const cartitems = <ul>{ [{id : 'c1', name : 'Maggie', amount : 2 , price : 5.99}].map(item =><li>{item.name}</li>)}</ul>
return <div>
    {cartitems} 
    <div className={classes.total}>
        <span>Total Amount </span> 
        <span>
            64.23
        </span>
        </div>
    <div className ={classes.action}>
<button className= {classes['button--alt']}>Close</button>
<button className={classes.button}>Order</button>
    </div>
</div>
}
export default Cart;