import React from 'react';
import Header from './Header';
import Footer from './Footer';

const About = (props) => {
    return (
        <div id="container">
            <Header history={props.history} />
            <div id="site-content">
                <span className="site-title">About</span>
            </div>
            <Footer />
        </div>
    );

}

export default About;