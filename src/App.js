import React from 'react';

import './commonResources/css/bootstrap.css';
import './commonResources/css/styles.css'
import Header from './components/Header';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
// import Main from './components/Main';
import Footer from './components/Footer';





function App() {
  return (
    <div >
     <Header />
     <FirstComponent />
     <SecondComponent />
     {/* <Main /> */}
     <Footer />
    </div>
  );
}

export default App;
