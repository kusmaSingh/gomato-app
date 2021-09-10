import './App.css';
import { Fragment } from 'react';
import Header from './compoent/Layout/Header'
import Meals from './compoent/Meals/Meals';
function App() {
  return (
   <Fragment>
     <Header></Header>
     <main>
       <Meals/>
     </main>
   </Fragment>
  );
}

export default App;
