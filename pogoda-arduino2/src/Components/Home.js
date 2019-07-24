import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Home = props => {

    let temeraturaZew= '0.00'; 
    let temeraturaWew = '0.00'; 
    let cisnienie = '000';
    let wilgotnosc = '00.0'; 

    if(props.odczyty.najnowszy){
        const najnowszy = props.odczyty.najnowszy;
        temeraturaZew= najnowszy.temeraturaZew;
        temeraturaWew = najnowszy.temeraturaWew;
        cisnienie = najnowszy.cisnienie;
        wilgotnosc = najnowszy.wilgotnosc;
    }
    return (
        <div id="container" >
                <Header history={props.history}/>
                <div id="main-page">
                    <div></div>
                    <div className="main-page__item">
                        <span className="main-page__item-img"><img className="pictagram tempZew" src="/img/termomet2.png"  alt="termometr" /></span>
                        <span className="new-readings tempZew">{temeraturaZew? temeraturaZew: ""}<sup>o</sup>C</span>
                    </div>   
                    <div className="main-page__item">
                    <span className="main-page__item-img"><img className="pictagram tempWew" src="/img/termomet2.png" alt="termometr" /></span>
                        <span className="new-readings tempWew">{temeraturaWew? temeraturaWew : ""}<sup>o</sup>C</span>
                    </div>   
                    <div className="main-page__item">
                    <span className="main-page__item-img"><img className="pictagram cisnienie" src="/img/barometr.jpg" alt="barometr" /></span>
                        <span className="new-readings cisnienie">{cisnienie? cisnienie : ""}hPa</span>
                    </div>   
                    <div className="main-page__item">
                    <span className="main-page__item-img"><img className="pictagram wilgotnosc" src="/img/wilgotnosc.jpg" alt="wilgotnosc" /></span>
                        <span className="new-readings wilgotnosc">{wilgotnosc? wilgotnosc : ""}%</span>
                    </div>   
                    <div></div>
                </div>
                <Footer />
            </div>
        );
}
export default Home;