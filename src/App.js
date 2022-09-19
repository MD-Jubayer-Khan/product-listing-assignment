import { Route, Routes } from 'react-router-dom';
import './App.css';
import CheckOut from './Page/CheckOutPage/CheckOut';
import Header from './Page/Header/Header';
import Products from './Page/ProductList/Products';

function App() {
  return (
    <div className="App">
        <Header/>
        
        <Routes>
          <Route path='/' element={ <Products/>}></Route>
          <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>

        </Routes>
    </div>
  );
}

export default App;
