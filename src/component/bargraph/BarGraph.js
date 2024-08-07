
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarGraph() {
    const data = {
        labels: ['1', '2', '3', '4', '5', '6', '7','8','9','10','11','12','13','14','15','16','17','18','19','20'],  // Days of the month
        datasets: [
          {
           
            data: [4000, 3000, 2000, 2780, 1890, 2390, 3490 ,2780, 1890, 2390, 3490 ,3423 ,1234,2433,3243,5675,3423.2368,7654,5463,2099],
            backgroundColor: '#7294FF',
            
            borderWidth: 1,
            borderRadius: 50,  
            borderSkipped: false, 
          },
        ],
      };

    const options = {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false, 
        },
        tooltip: {
          enabled: false, 
        },
      },
        scales: {
          x: {
            categoryPercentage: 1, 
            barPercentage: 10, 
            grid: {
              display: false, 
            }
          },
          y: {
            beginAtZero: true,
          
            padding:100,
           
            grace: '10%', 
            grid: {
              display: true, 
              drawBorder: false, 
            },
            ticks: {
              display: true, 
              padding: 5, 
            },
            title: {
              display: false, 
            },
            border: {
              display: false, 
            },
          },
        },
        layout: {
          padding: {
            top: 10,  
            bottom: 10, 
          }
        }
      };

    return <Bar style={{width:"100%",height:"100%" ,}} data={data} options={options} />;
}

export default BarGraph;
