import classes from './Input.module.css';
const Input =(props) =>{
    return <div className=  {classes.input}>
<label>{props.label}</label>
<input />

    </div>
}
export default Input;
