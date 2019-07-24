import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { dostepneDane, pullData, ostatniDzien } from '../helpers';

const data = new Date(2019, 4, 22, 3, 24, 0);
const rok = data.getFullYear();
const mies = data.getMonth() < 10 ? '0' + (data.getMonth() + 1) : (data.getMonth() + 1);
const dzien = data.getDate() < 10 ? '0' + (data.getDate()) : (data.getDate()); //po odnowieniu hostu usunac -3!!




class Wykres extends React.Component {

  myRef = React.createRef();


  render() {


    if (this.props.pogoda) {
      const miesPoprzedni = data.getMonth() < 10 ? `0${data.getMonth()}` : data.getMonth();
      const dzienPoprzedni = (data.getDate() - 1) < 10 ? `0${(data.getDate() - 1)}` : (data.getDate() - 1);

      const jakiOdczyt = this.props.dane;

      const srednieOdczyty = dostepneDane(this.props.pogoda, jakiOdczyt);
      const legendaDni = Object.values(srednieOdczyty[mies]).map(dzien => `${dzien.dzien}.${mies}`);
      const srednieDni = Object.values(srednieOdczyty[mies]).map(dzien => dzien.dane);

      const godzinyOdczytow = pullData(this.props.pogoda, 'czas', rok, mies, dzien);

      const odczyty1 = pullData(this.props.pogoda, jakiOdczyt, rok, mies, dzien);


      const mies2 = dzienPoprzedni < 1 ? miesPoprzedni : mies;
      let dzien2 = dzienPoprzedni < 1 ? ostatniDzien(this.props.pogoda, rok, miesPoprzedni) : dzienPoprzedni;
      dzien2 = dzien2.toString();
      console.log(mies2);
      console.log(dzien2.toString());
      const odczyty2 = pullData(this.props.pogoda, jakiOdczyt, rok, mies2, dzien2);
      //const odczyty2 = (1, 2, 3, 4);

      const label = this.props.label;

      const chartData = {
        labels: legendaDni,
        datasets: [
          {
            label: `Średnie ${label} w danych dniach`,
            data: srednieDni,
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(244,070,017, 0.6)',
              'rgba(094,033,041, 0.6)',
              'rgba(193,135,107, 0.6)',
              'rgba(211,110,112, 0.6)',
              'rgba(234,137,154, 0.6)',
              'rgba(222,076,138, 0.6)',
              'rgba(222,076,138, 0.6)',
              'rgba(042,046,075, 0.6)',
              'rgba(038,037,045, 0.6)',
              'rgba(034,113,179, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(244,070,017, 0.6)',
              'rgba(094,033,041, 0.6)',
              'rgba(193,135,107, 0.6)',
              'rgba(211,110,112, 0.6)',
              'rgba(234,137,154, 0.6)',
              'rgba(222,076,138, 0.6)',
              'rgba(222,076,138, 0.6)',
              'rgba(042,046,075, 0.6)',
              'rgba(038,037,045, 0.6)',
              'rgba(034,113,179, 0.6)'
            ]
          }
        ]
      };

      const chartData2 = {
        labels: godzinyOdczytow,
        datasets: [
          {
            label: `${label} w dniu ${dzien2}/${mies2}`,
            data: odczyty2,
            backgroundColor: [
              'rgba(255, 99, 132, 0.1)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)'
            ]
          },
          {
            label: `${label} w dniu ${dzien}/${mies}`,
            data: odczyty1,
            backgroundColor: [
              'rgba(54, 162, 235, 0.1)'
            ],
            borderColor: [
              'rgba(54, 162, 235, 1)'
            ]
          }
        ]

      }

      const options = {
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        }
      };

      if (this.props.typ === 'line') {

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
      else if (this.props.typ === 'bar') {
        return (
          <div>
            <div className="wykres">
              <Bar
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

}
export default Wykres;