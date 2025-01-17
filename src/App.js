import React from 'react';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer'; // Import Footer
import Header from './components/Header';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Stats from './components/Stats';
import Team from './components/Team';
import WorkProcess from './components/WorkProcess';

import TimeLine from './components/TimeLine'


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AboutUs />
        <Stats/> 
        
        <TimeLine/>
        
        <WorkProcess/>
        <Team/>
        <Footer /> {/* Include Footer */}

      </main>
    </div>
  );
}

export default App;