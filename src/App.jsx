import React, { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

 import About from "./pages/About";
 import Contact from "./pages/Contact";
// import Portfolio from "./pages/Portfolio";
// import Resume from "./pages/Resume";

const App = () => {
  const [currentPage, setCurrentPage] = useState("About");
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
  };
  return (
    <div>
      {/* <Header /> */}
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="my-4">
        {renderPage()}
        </main>
      <Footer />
    </div>
  );
  // 

  
 
  
};

export default App;
