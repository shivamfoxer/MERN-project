import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './Screens/Homescreen'
import ProductScreen from './Screens/Productscreen'
import CartScreen from './Screens/CartScreen'
import LoginScreen from './Screens/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen'
import ProfileScreen from './Screens/ProfileScreen'
import ShippingScreen from './Screens/ShippingScreen'
import PaymentScreen from './Screens/PaymentScreen'
import PlaceOrderScreen from './Screens/PlaceOrderScreen'
import OrderScreen from './Screens/OrderScreen'
import UserListScreen from './Screens/UsersListScreen'
import UserEditScreen from './Screens/UserEditScreen'
function App() {
  return (
   <Router>
     
   <Header></Header>
   <main className='py-3'>
  <Container>
     <Route path='/order/:id' component={OrderScreen} />
      <Route path='/shipping' component={ShippingScreen} />
      <Route path='/payment' component={PaymentScreen} />
      <Route path='/placeorder' component={PlaceOrderScreen} />
      <Route path='/login' component={LoginScreen} />
      <Route path='/register' component={RegisterScreen} />
      <Route path='/profile' component={ProfileScreen} />
      <Route path='/product/:id' component={ProductScreen} />
      <Route path='/cart/:id?' component={CartScreen} />
      <Route path='/admin/userlist' component={UserListScreen} />
      <Route path='/admin/user/:id/edit' component={UserEditScreen} />
      <Route exact path='/' component={HomeScreen} />
      
  </Container>
   </main>
   <Footer></Footer>
   
   </Router>
  )
}

export default App;
