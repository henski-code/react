import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Wykres from './Wykres';

const Wilgotnosc = (props) => {
    if (props.odczyty.pogoda) {
        return (
            <div id="container">
                <Header history={props.history} />
                <div id="site-content">
                    <span className="site-title">Wilgotność</span>
                    <Wykres typ={'bar'} label={'wilgotność'} dane={'wilgotnosc'} pogoda={props.odczyty.pogoda} />
                </div>
                <Footer />
            </div>
        );
    }
    else return null;

}

export default Wilgotnosc;