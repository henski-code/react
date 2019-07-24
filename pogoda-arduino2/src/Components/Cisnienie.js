import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Wykres from './Wykres';

const Cisnienie = (props) => {
    if (props.odczyty.pogoda) {
        return (
            <div id="container">
                <Header history={props.history} />
                <div id="site-content">
                    <span className="site-title">Ciśnienie</span>
                    <Wykres typ={'bar'} label={'ciśnienie'} dane={'cisnienie'} pogoda={props.odczyty.pogoda} />
                </div>
                <Footer />
            </div>
        );
    }
    else return null;

}

export default Cisnienie;