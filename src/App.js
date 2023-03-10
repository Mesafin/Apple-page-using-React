import React from 'react';

import './commonResources/css/bootstrap.css';
import './commonResources/css/styles.css';



import Header from './components/Header';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import FourthSection from './components/FourthSection';
import FifthSection from './components/FifthSection';
import SixthSection from './components/SixthSection';
import Footer from './components/Footer';






function App() {
  return (
    <div >
     <Header />
     <FirstSection />
     <SecondSection />
     <ThirdSection />
     <FourthSection />
     <FifthSection />
     <SixthSection />
     <Footer />
     
    </div>
  );
}

export default App;
