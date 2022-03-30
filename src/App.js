import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';
import About from './components/About/About';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/inventory' element={<Inventory />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
