import './App.css';
import Header from './components/Header/Header.js';
import ContactUs from './components/ContactUs/ContactUs.js';
import AboutUs from './components/AboutUs/AboutUs.js';
import Footer from './components/Footer/Footer.js';
import { Route, Routes } from 'react-router-dom';
import Products from './components/Products/Products';
import Home from './components/Home/Home';
import PricingTable from './components/PricingTable/PricingTable.js';
import { Toaster } from 'sonner';

const App = () => (
//  onmount start scroll from top

  
  <div className="App flex flex-col h-screen ">
    <div className="content flex-1">
     <Header />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kontakt" element={<ContactUs path="contact"/>} />
      <Route path="/o-nas" element={<AboutUs />} />
      <Route path="/nasza-oferta" element={<Products />} />
      <Route path="/cennik" element={<PricingTable/>}/>
      <Route path="/products" element={<Products/>}/>
    </Routes>
    </div>
    <Footer/>
    <Toaster richColors  />
  </div>
  
);

export default App;
