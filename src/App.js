import { Routes, Route } from "react-router-dom";

import { Header, Footer } from "./sections/index";
import { Home, Services, ContactUs, AboutUs, Error } from "./Pages/index";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        {/* <Route path="/Dashboard" element={<Dashboard />} /> */}
        <Route path="*" exact={true} element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
