import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home";
import { NavBar } from "./Components/NavBar";
import { Footer } from "./Components/Footer";
import { Login } from "./Pages/Login";
import { SignUp } from "./Pages/SignUp";
import { About } from "./Pages/About";
import { ContactUs } from "./Pages/ContactUs";
import { LoginMode } from "./Pages/LoginMode";
import PageNotFound from "./Pages/PageNotFound";
import { Toaster } from 'react-hot-toast';
import Profile from "./Pages/userPages/Profile";
import Cart from "./Pages/userPages/Cart";
import PrivateRoute from "./Components/Routes/PrivateRoute";
function App() {
  return (
    <>
      <BrowserRouter>
      <Toaster/>
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home Namee="Unknown" title="Home" />} />
            <Route path="/loginmode" element={<LoginMode title="Login - Options" />} />
            <Route path="/login/:color" element={<Login title="Login" />} />
            <Route path="/signup/:color" element={<SignUp title="Register" />} />
            <Route path="/about" element={<About title="About" />} />
            <Route path="/profile" element={<PrivateRoute/>}>
              <Route path="" element={<Profile title="Profile" />} />
            </Route>
            <Route path="/cart" element={<PrivateRoute/>}>
              <Route path="" element={<Cart title="Cart" />} />
            </Route>
            <Route path="/contactus" element={<ContactUs title="Contact - Us" />} />
            <Route path="*" element={<PageNotFound title="Page Not Found" />} />
          </Routes>
        </div>
      </BrowserRouter>

      <Footer color='#6322f0' />
    </>
  );
}

export default App;
