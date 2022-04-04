import './App.css';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import ListUsers from './components/ListUsers';
import CreateUserComponent from './components/CreateUserComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponents from './components/FooterComponents';
import Map from './components/Map';
import Homepage from './components/Homepage';
import About from './components/About';
import Contact from './components/ContactUs';
import User from './components/User';
import Login from './components/Login';
import Certificate from './components/Certificate';
import BloodTestLog from './components/BloodTestLog';
import BloodTestLogData from './components/BloodTestLogData';
import DonorValidation from './components/DonorValidation';
import DonorValidationData from './components/DonorValidationData';
import ForgotP from './components/ForgotPasswordComponent'; 
import Cart from './components/Cart';
import Payment from './components/Payment';
import CreateUserAdmin from './components/CreateUserAdmin';


function App() {
  return (
    <div>
      <HeaderComponent/>
      <BrowserRouter>
         <Routes>
          <Route path="/" exact element={<Homepage/>}/>
          <Route path="/about" exact element={<About/>}/>
          <Route path="/contact" exact element={<Contact/>}/>
          <Route path="/users" exact element={<ListUsers/>}/>
          <Route path="/CreateUserComponent" exact element={<CreateUserComponent/>}/>
          <Route path="/CreateUserAdmin" exact element={<CreateUserAdmin/>}/>
          <Route path="/map" exact element={<Map/>}/>
          <Route path="/user" exact element={<User/>}/>
          <Route path="/Login" exact element={<Login/>}/>
          <Route path="/Certificate" exact element={<Certificate/>}/>
          <Route path="/ForgotP" exact element={<ForgotP/>}/>
          <Route path="/Cart" exact element={<Cart/>}/>
          <Route path="/Payment" exact element={<Payment/>}/>
          <Route path="/BloodTestLog" exact element={<BloodTestLog/>}/>
          <Route path="/BloodTestLogData" exact element={<BloodTestLogData/>}/>
          <Route path="/DonorValidation" exact element={<DonorValidation/>}/>
          <Route path="/DonorValidationData" exact element={<DonorValidationData/>}/>
         </Routes>
      </BrowserRouter>
      <FooterComponents/>
    </div>
  );
}

export default App;
