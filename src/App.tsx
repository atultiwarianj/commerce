import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './Component/Navbar';
import Product from './Component/Product';
import Cart from './Component/Cart';
import Error from './Component/Error';
import Details from './Component/Details';


const App = ()=>{
  
  return (
    <>
    <Navbar />
    
     <Routes>
     {/* <Route exact path='/details/:id' element= {<Details />} /> */}
      <Route path='/' element= {<Product />} />
     <Route path='/details/:id' element= {<Details />} />
      <Route path='/cart' element= {<Cart />} />
      <Route path='*' element= {<Error />} />
     
     
     </Routes>
    </>
  );
}

export default App;
