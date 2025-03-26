import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ProductsHome } from './features/products-home/products-home';
import { Home } from './features/landing/home';
import { Login } from './features/auth/login';
import { Register } from './features/auth/register';
import { Layout } from './features/dashboard/layout';
import { Clients } from './features/dashboard/clients/clients';
import { Products } from './features/dashboard/products/products';
import { Formclient } from './features/dashboard/clients/formclient';
import { FormProducts } from './features/dashboard/products/formproduct';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<ProductsHome />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

      {/* Rutas anidadas dentro de /dashboard */}
      <Route path='/dashboard' element={<Layout />}>
        <Route path='products' element={<Products />}>
          <Route path='new' element={<FormProducts />} />
        </Route>
        <Route path='clients' element={<Clients />}>
          <Route path='new' element={<Formclient />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;