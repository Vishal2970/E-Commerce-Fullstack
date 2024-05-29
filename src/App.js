import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home";
import { NavBar } from "./Components/NavBar";
// import { Footer } from "./Components/Footer";
import { Login } from "./Pages/Login";
import { SignUp } from "./Pages/SignUp";
import { About } from "./Pages/About";
import { ContactUs } from "./Pages/ContactUs";
import { LoginMode } from "./Pages/LoginMode";
function App() {
  return (
    <BrowserRouter>
      <NavBar isVisible={true}/>
      <Routes>
        <Route path="/" element={<Home Name ="Vishal"/>} />
        <Route path="/loginmode" element={<LoginMode />} />
        <Route path="/login/:color" element={<Login />} />
        <Route path="/signup/:color" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;