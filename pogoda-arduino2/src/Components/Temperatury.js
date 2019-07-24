import React from 'react';
import Header from './Header';
import Footer from './Footer';
import WykresTemperatur from './WykresTemperatur';


function temperatury(props) {
    if (props.odczyty.pogoda) {
        return (
            <div id="container">
                <Header history={props.history} />
                <div id="site-content">
                    <span className="site-title">Temperatury</span>
                    <WykresTemperatur pogoda={props.odczyty.pogoda} />
                </div>
                <Footer />
            </div>
        );
    }
    else return null;

}

export default temperatury;