import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
/*
import Home from './../pages/Home';
import ListaTran from './../pages/ListaTran';
import Checkout from './../pages/checkout';
*/

function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				{/*
          <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/comprar" element={<Checkout />} />
      <Route path="/lista_de_compras" element={<ListaTran/>} />
    */}
			</Routes>
		</BrowserRouter>
	);
}

export default AppRoutes;
