import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charData: {
        labels: ["Jan", "Mar", "Mai", "Jun", "Jul", "Ago"],
        datasets: [
          {
            label: "$ de Entrada",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(70, 179, 74, 0.2)",
              "rgba(70, 179, 74, 0.2)",
              "rgba(70, 179, 74, 0.2)",
              "rgba(70, 179, 74, 0.2)",
              "rgba(70, 179, 74, 0.2)",
              "rgba(70, 179, 74, 0.2)"
            ],
            borderColor: [
              "rgba(70, 179, 74, 1)",
              "rgba(70, 179, 74, 1)",
              "rgba(70, 179, 74, 1)",
              "rgba(70, 179, 74, 1)",
              "rgba(70, 179, 74, 1)",
              "rgba(70, 179, 74, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    };
  }

  render() {
    return (
      <div className="d">
        <Line
          data={this.state.charData}
          width={100}
          height={40}
          options={this.state.options}
        />
      </div>
    );
  }
}

export default Chart;
