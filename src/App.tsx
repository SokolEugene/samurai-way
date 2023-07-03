import React from 'react';
import './App.css';

import {Footer} from "./Components/Footer";
import {Header} from "./Components/Header";

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
