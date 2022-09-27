import './styles/app.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Contact from './components/contact/Contact';
import Cart from './components/cart/Cart';
import Shipping from './components/cart/Shipping';
import PaymentSuccess from './components/cart/PaymentSuccess';
import ConfirmOrder from './components/cart/ConfirmOrder';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
import MyOrders from './components/myOrders/MyOrders';
import OrderDetails from './components/myOrders/OrderDetails';

import './styles/header.scss';
import './styles/home.scss';
import './styles/founder.scss';
import './styles/menu.scss';
import './styles/footer.scss';
import './styles/contact.scss';
import './styles/cart.scss';
import './styles/shipping.scss';
import './styles/confirmOrder.scss';
import './styles/paymentSuccess.scss';
import './styles/login.scss';
import './styles/profile.scss';
import './styles/table.scss';
import './styles/orderdetails.scss';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header isAuthenticated={true} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/shipping' element={<Shipping />} />
          <Route path='/confirmorder' element={<ConfirmOrder />} />
          <Route path='/paymentsuccess' element={<PaymentSuccess />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/myorders' element={<MyOrders />} />
          <Route path='/order/:id' element={<OrderDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
