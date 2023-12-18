import './App.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Layout from './Components/Layouts/Layout';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import StoreContent from './Components/StoreContent/StoreContent';
import Signup from './pages/Signup';
import Store from './pages/Store';
import PageNotFound from './pages/PageNotFound';
import Contact from './pages/Contact';
import Login from './pages/Login';
import DashboardAddProduct from './Components/AdminDashboard/DashboardAddProduct';
import DashboardProduct from './Components/AdminDashboard/DashboardProduct';
import Profile from './pages/Profile';
import ProductCustomization from './Components/AdminDashboard/ProductCustomization';
import { useDispatch, useSelector } from 'react-redux';
import AdminLayout from './Components/Layouts/AdminLayout';
import DashboardHome from './Components/AdminDashboard/DashboardHome';
import { LogOut } from './Components/RTK/Slices/CartSlice';
import DashboardOrders from './Components/AdminDashboard/DashboardOrders';
import StatusOrder from './Components/AdminDashboard/dashStatusOrder/StatusOrder';
import ProductsOrder from './Components/AdminDashboard/orderDetails/ProductsOrder';
import OrderInformation from './Components/AdminDashboard/orderDetails/OrderInformation';
import DashboardUsers from './Components/AdminDashboard/DashboardUsers';
function App() {
  // 
  const isLogin = useSelector(state => state.cart.isLogin)
  const isAdmin = useSelector(state => state.cart.isAdmin)
  const dispatch = useDispatch()
  setTimeout(() => {
    dispatch(LogOut())
    window.localStorage.clear()
  }, 1000 * 60 * 60);

  return (
    <div className="App position-relative overflow-hidden ">
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='e-commerce' element={<Home />} />
          <Route path='products/:category' element={<StoreContent />} />
          <Route path='productDetails/:id' element={<ProductDetails />} />
          {!isLogin && <Route path='login' element={<Login />} />}
          <Route path='signup' element={<Signup />} />
          <Route path='store' element={<Store />} />
          <Route path='products/:category' element={<Store />} />
          <Route path='store/search' element={<Store />} />
          <Route path='store/search/:search' element={<Store />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path='contact' element={<Contact />} />
          {isLogin &&<Route path='profile' element={<Profile />} />}
          {isLogin && isAdmin && <Route path='admin' element={<AdminLayout />}>
            <Route path='home' element={<DashboardHome />} /> 
            <Route path='products' element={<DashboardProduct />} />
            <Route path='products/:id' element={<ProductCustomization />} />
            <Route path='addProducts' element={<DashboardAddProduct />} />
            <Route path='orders' element={<DashboardOrders />} />
            <Route path='orders/:id' element={<StatusOrder />} />
            <Route path='orders/products/:id' element={<ProductsOrder />} />
            <Route path='orders/information/:id' element={<OrderInformation />} />
            <Route path='orders/users' element={<DashboardUsers />} />
          </Route>}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
