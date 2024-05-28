import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home";
import { NavBar } from "./Components/NavBar";
// import { Footer } from "./Components/Footer";
import { Login } from "./Pages/Login";
import { SignUp } from "./Pages/SignUp";
import { About } from "./Pages/About";
import { ContactUs } from "./Pages/ContactUs";
function App() {
  return (
    <BrowserRouter>
      <NavBar isregister="true"/>
      <Routes>
        <Route path="/" element={<Home Name ="Vishal"/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;