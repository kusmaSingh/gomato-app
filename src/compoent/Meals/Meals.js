import { Fragment } from "react/cjs/react.production.min";
import AvailableMeals from "./AvailableMeals";
import MealsSummery from "./MealsSummery";

const Meals =() =>{
    return (
<Fragment>
    <MealsSummery/>
    <AvailableMeals/>
</Fragment>
    )
}
export default Meals;