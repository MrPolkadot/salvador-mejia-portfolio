import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import { Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </>
    
  )

    

}












// const App = () => {
//   const [currentPage, setCurrentPage] = useState("About");
//   const renderPage = () => {
//     if (currentPage === "About") {
//       return <About />;
//     }
//     if (currentPage === "Contact") {
//       return <Contact />;
//     }
//     if (currentPage === "Portfolio") {
//       return <Portfolio />;
//     }
//     if (currentPage === "Resume") {
//       return <Resume />;
//     }
//   };
//   return (
//     <>
//     <div>
//       <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
//       <main className="pt-6 mt-4">
//         {renderPage()}
//         </main>
      
//     </div>
//       <Footer />
//       </>
//   );
//   // 

  
 
  
// };

export default App;
