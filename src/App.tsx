import React from 'react';
import './App.css';
import {Navbar} from "./Components/Navbar";
import {Footer} from "./Components/Footer";
import {Header} from "./Components/Header";
import {Profile} from "./Components/Profile";
import {Maincontent} from "./Components/Maincontent";



const App =() => {
    return (
        <div>
            <Header/>
            <Maincontent/>
            <Footer/>
        </div>
    );
}

export default App;
