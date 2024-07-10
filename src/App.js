
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Components/Main';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    // <Router> 
    //   <div className="App"> 
    //     <Routes>
    //       <Route path="/" element={<Main />} /> 
    //       <Route path="/" element={<Header />} /> 
    //       <Route path="/" element={<Footer />} /> 
    //     </Routes>
    //   </div>
    // </Router>
    <>
     <Header></Header>
     <Navbar></Navbar>
     <Main></Main>
     <Footer></Footer>
    </>
   
  );
}

export default App;
