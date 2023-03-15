import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Navbar from './Component/Nabar/Navbar';
import About from './Component/About';
import Footer from './Component/Footer';
import Payment_channel from './Component/Payment_channel';
import PolicyStatement from './Component/Statement/PolicyStatement';
import Notfound from './Component/Notfound';
import PaymentOverview from './Component/Statement/PaymentOverview';


function App() {
  return (
    <div className='App'>
         
          <Navbar/>
          <Routes>
              <Route path='/' element={<Home />}>Home</Route>
              <Route path='/about' element={<About />}>Home</Route>
              <Route path='/Payment-channel' element={<Payment_channel />}>Payment Channel</Route>
              <Route path='/Policy-information' element={<PolicyStatement />}>Payment Channel</Route>
              <Route path='/payment_overview=:id=:name=:amount' element={<PaymentOverview />}>Payment Overview</Route>
        <Route path='*' element={<Notfound />}>signup</Route>
        
      

              
          </Routes>
         <Footer></Footer>

    </div>
  );
}

export default App;
