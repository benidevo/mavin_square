import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Featured from './components/featured/index'

import './App.css';

const App = () => {
    return (
        <div className="App">
            <Header />
            <>
                <Featured />
            </>
            <Footer />
        </div>
    )
}

export default App;
