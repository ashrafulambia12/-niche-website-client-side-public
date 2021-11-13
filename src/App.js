import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Services from './Pages/Services/Services';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AddService from './Pages/Services/AddService';
import Navigation from './Pages/Shared/Navigation/Navigation';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Footer/Footer';
import Booking from './Pages/Booking/Booking';
import Orders from './Pages/Orders/Orders';
import MakeAdmin from './Pages/MakeAdmin/MakeAdmin';
import Dashboard from './Pages/Dashboard/Dashboard';
import Pay from './Pages/Pay/Pay';
import Review from './Pages/Review/Review';
import Checkout from './Pages/Checkout/Checkout';
import OrderItems from './Pages/OrderItems/OrderItems';
import SingleOrder from './Pages/Orders/SingleOrder';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/services">
              <Services />
            </Route>
            <PrivateRoute exact path="/service/:_id">
              <Services />
            </PrivateRoute>
            <Route exact path="/addService">
              <AddService />
            </Route>
            <Route exact path="/review">
              <Review />
            </Route>
            <PrivateRoute exact path="/booking">
              <Booking />
            </PrivateRoute>
            <PrivateRoute exact path="/booking/:_id">
              <Booking />
            </PrivateRoute>
            <Route exact path="/orders">
              <Orders />
            </Route>
            <Route exact path="/order/:_id">
              <OrderItems />
            </Route>
            <Route exact path="/singleOrder">
              <SingleOrder />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/checkout/:_id">
              <Checkout />
            </Route>
            <Route exact path="/makeAdmin">
              <MakeAdmin />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/pay">
              <Pay />
            </Route>
            <Route exact path="/placeorder">
              <PlaceOrder />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
