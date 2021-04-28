import logo from './logo.svg';
import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";





function App() {
 
  // Using useState, set the default value for currentPage to 'Home'
  const [currentPage, handlePageChange] = useState('About');


  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
      switch (currentPage) {
        case 'About':
          return <About />;
        case 'Portfolio':
          return <Portfolio />;
        case 'Contact':
          return <Contact />;
        case 'Resume':
          return <Resume />;
        default:
          return <About />;
      }
  };  

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
      <main class="hero-banner">
      <div>{renderPage(currentPage)}</div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
