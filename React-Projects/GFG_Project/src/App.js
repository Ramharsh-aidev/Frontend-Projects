import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import CircleAnimation from './components/CircleAnimation';
import SubHeading from './components/SubHeading';
import Features from './components/Features';
import AboutPyhack from './components/AboutPyhack';
import AboutPyImg from './components/AboutPyImg';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Navbar /><br></br>
            <Banner></Banner><br></br><br></br><br></br><br></br>
            <CircleAnimation /><br></br><br></br>
            <SubHeading 
                title="Workshop Features" 
                borderColor1="green" 
                borderColor2="blue" 
                textColor1="white" 
                textColor2="green" 
            /><br></br>
            <Features /><br></br><br></br>
            <SubHeading 
                title="About PyHack" 
                borderColor1="green" 
                borderColor2="blue" 
                textColor1="white" 
                textColor2="green" 
            />
            <AboutPyhack /><br></br>
            <AboutPyImg />
            <SubHeading 
                title="FAQ" 
                borderColor1="green" 
                borderColor2="blue" 
                textColor1="white" 
                textColor2="green" 
            />
            <FAQ />
            <Footer />
        </div>
    );
}

export default App;