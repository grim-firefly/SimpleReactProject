import React from 'react';
import Navbar from './Component/NavBar/Navbar';
import HeroCaption from './Component/HeroCaption/HeroCaption';
import Footer from './Component/Footer/Footer';
import './App.css';
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroCaption />
      <Footer />
    </div>
  );
}

export default App;
