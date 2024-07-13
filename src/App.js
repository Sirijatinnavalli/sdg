import React from 'react';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer'; // Import Footer
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AboutUs />
        <Footer /> {/* Include Footer */}

      </main>
    </div>
  );
}

export default App;