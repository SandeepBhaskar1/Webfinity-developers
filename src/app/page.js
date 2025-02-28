import Navbar from "./components/navbar";
import Home from "./components/home"
import AboutUs from "./components/aboutus"
import WhatWeDo from "./components/whatwedo"
import Footer from "./components/footer"
import Contact from "./components/contact"


export default function Main() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutUs />
      <WhatWeDo />
      <Contact />
      <Footer />

      <img src='/whatsapp.png' className='whatsapp' />
    </>
  );
}
