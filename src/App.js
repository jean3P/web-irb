import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/pages/Home'
import AboutUs from "./components/pages/AboutUs";
import Believe from "./components/pages/Believe";
import ContactUs from "./components/pages/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        {/*<HeroSection/>*/}
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path={"/aboutUs"} exact element={<AboutUs/>}/>
          <Route path={"/believe"} exact element={<Believe/>}/>
          <Route path={"/contactUs"} exact element={<ContactUs/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
