import About from "./components/About";
import EmailSection from "./components/EmailSection";
import Experience from "./components/Experience";
// import Footer from "./components/Footer";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Tech from "./components/Tech";

export default function Home() {
  return (
   <main className="flex flex-col min-h-screen  bg-[#121212]  ">
    <Navbar/>
      <div className="container mx-auto mt-24 px-12 py-4">
        <Hero/>
        <About/>
        <Tech/>
        <Project/>
        <Experience/>
        <EmailSection/>
      </div>
        <Footer/>
   </main>
  );
}
