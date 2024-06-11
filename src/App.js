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
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar isVisible={true} />
        <Routes>
          <Route path="/" element={<Home Name="Unknown" title="Home" />} />
          <Route path="/loginmode" element={<LoginMode title="Login - Options" />} />
          <Route path="/login/:color" element={<Login title="Login" />} />
          <Route path="/signup/:color" element={<SignUp title="Register" />} />
          <Route path="/about" element={<About title="About" />} />
          <Route path="/contactus" element={<ContactUs title="Contact - Us" />} />
          <Route path="*" element={<PageNotFound title="Page Not Found" />} />
        </Routes>
      </BrowserRouter>
      <Footer color='#6322f0' />
    </>
  );
}

export default App;
