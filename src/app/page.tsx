import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbars from "@/components/Navbars";
import Skills from "@/components/Skills";
import Works from "@/components/works";


export default function Home() {
  return (
  <>
  <div className=" w-[90%] mx-auto">
  <Navbars/>
  <Hero/>
  <Skills/>
  <Works/>
  <Contact/>
  <Footer/>
  </div>
 
  </>
  );
}
