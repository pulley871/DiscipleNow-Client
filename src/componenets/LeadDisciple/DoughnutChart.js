import React, { Component } from "react";
import Chart from "react-apexcharts";
import "./LeadStyles.css"
export const LeadDoughnutChart = ({disciples}) => {
    const options =  {
        optionsRadial: {
            plotOptions: {
              radialBar: {
                startAngle: -135,
                endAngle: 225,
                hollow: {
                  margin: 0,
                  size: "70%",
                  background: "#fff",
                  image: undefined,
                  imageOffsetX: 0,
                  imageOffsetY: 0,
                  position: "front",
                  dropShadow: {
                    enabled: true,
                    top: 3,
                    left: 0,
                    blur: 4,
                    opacity: 0.24
                  }
                },
                track: {
                  background: "#fff",
                  strokeWidth: "67%",
                  margin: 0, // margin is in pixels
                  dropShadow: {
                    enabled: true,
                    top: -3,
                    left: 0,
                    blur: 4,
                    opacity: 0.35
                  }
                },
    
                dataLabels: {
                  showOn: "always",
                  name: {
                    offsetY: -20,
                    show: true,
                    color: "#888",
                    fontSize: "13px"
                  },
                  value: {
                    formatter: function (val) {
                      return val +"%";
                    },
                    color: "#111",
                    fontSize: "30px",
                    show: true
                  }
                }
              }
            },
            fill: {
              type: "gradient",
              gradient: {
                shade: "dark",
                type: "horizontal",
                shadeIntensity: 0.5,
                gradientToColors: ["#ABE5A1"],
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100]
              }
            },
            stroke: {
              lineCap: "round"
            },
            labels: ["Disciples on Track"]
          },
          
    }
    return(<><div className="col radial-chart lead-chart">
    <Chart
      
      options={options.optionsRadial}
      series={[disciples]}
      type="radialBar"
      width="280"
    />
  </div></>)
}