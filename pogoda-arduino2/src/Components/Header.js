import React from 'react';

class Header extends React.Component {
   goToHome = () => {
      this.props.history.push('/');
   }
   goToTemperatury = () => {
      this.props.history.push('/temperatury');
   }
   goToCisnienie = () => {
      this.props.history.push('/cisnienie');
   }
   goToWilgotnosc = () => {
      this.props.history.push('/wilgotnosc');
   }
   goToAbout = () => {
      this.props.history.push('/about');
   }
   render() {

      return (
         <nav>
            <ul id="nav-list">
               <span className="nav-list__link" onClick={this.goToHome}><h2>Pogoda-arduino.pl</h2></span>
               <li><span onClick={this.goToTemperatury} className="nav-list__link" >Temperatury</span></li>
               <li><span onClick={this.goToCisnienie} className="nav-list__link" >Ciśnienie</span></li>
               <li><span onClick={this.goToWilgotnosc} className="nav-list__link" >Wilgotność</span></li>
               <li><span onClick={this.goToAbout} className="nav-list__link" >O projekcie</span></li>
            </ul>
         </nav>
      );
   }
}
export default Header;