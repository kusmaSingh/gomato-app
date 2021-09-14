import './App.css';
import { Fragment } from 'react';
import Header from './component/Layout/Header'
import Meals from './component/Meals/Meals';
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
