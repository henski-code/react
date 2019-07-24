import React from 'react';
import { Line } from 'react-chartjs-2';
import { dostepneDane, pullData } from '../helpers';

const data = new Date();
const rok = data.getFullYear();
const mies = data.getMonth() < 10 ? '0' + (data.getMonth() + 1) : (data.getMonth() + 1);
const dzien = data.getDate() < 10 ? '0' + data.getDate() : data.getDate(); //po odnowieniu hostu usunac -3!!

class WykresTemperatur extends React.Component {

  myRef = React.createRef();

  render() {


    if (this.props.pogoda) {

      const srednieOdczytyWew = dostepneDane(this.props.pogoda, 'temeraturaWew');
      const srednieOdczytyZew = dostepneDane(this.props.pogoda, 'temeraturaZew');

      const legendaDni = Object.values(srednieOdczytyWew[mies]).map(dzien => `${dzien.dzien}.${mies}`);

      const srednieDniWew = Object.values(srednieOdczytyWew[mies]).map(dzien => dzien.dane);
      const srednieDniZew = Object.values(srednieOdczytyZew[mies]).map(dzien => dzien.dane);

      const godzinyOdczytow = pullData(this.props.pogoda, 'czas', rok, mies, dzien);
      console.log(godzinyOdczytow);
      const odczytWew = pullData(this.props.pogoda, 'temeraturaWew', rok, mies, dzien);
      const odczytZew = pullData(this.props.pogoda, 'temeraturaZew', rok, mies, dzien);

      const chartData = {
        labels: legendaDni,
        datasets: [
          {
            label: 'Średnie temperatury na zewnątrz',
            data: srednieDniZew,
            borderColor: [
              'rgba(255, 99, 132, 1)'
            ],
            backgroundColor: [
              'rgba(255,99,132, 0.1)'
            ]
          },
          {
            label: 'Średnie temperatury wewnątrz',
            data: srednieDniWew,
            borderColor: [
              'rgba(54, 162, 235, 1)'
            ],
            backgroundColor: [
              'rgba(54, 162, 235, 0.1)'
            ]
          }
        ]
      };

      const chartData2 = {
        labels: godzinyOdczytow,
        datasets: [
          {
            label: `Temeratura zew`,
            data: odczytZew,
            backgroundColor: [
              'rgba(255, 99, 132, 0.1)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)'
            ]
          },
          {
            label: `Temeratura wew`,
            data: odczytWew,
            backgroundColor: [
              'rgba(54, 162, 235, 0.1)'
            ],
            borderColor: [
              'rgba(54, 162, 235, 1)'
            ]
          }
        ]
      };


      const options = {
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      };


      return (
        <div>
          <div className="wykres">
            <Line
              data={chartData}
              width={100}
              height={50}
              options={options}
            />
          </div>
          <div className="wykres">
            <Line
              data={chartData2}
              width={100}
              height={50}
              options={options}
            />
          </div>
        </div>
      );

    }
  }

}
export default WykresTemperatur;