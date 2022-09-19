import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Page/Header/Header';
import Products from './Page/ProductList/Products';

function App() {
  return (
    <div className="App">
        <Header/>
        
        <Routes>
          <Route path='/' element={ <Products/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
