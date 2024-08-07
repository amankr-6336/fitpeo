import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";


ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Completed", "Remaining"], 
  datasets: [
    {
      label: "Completion Percentage",
      data: [75, 25], 
      backgroundColor: [
        "rgb(113,148,255)", 
        "rgb(42,51,98)", 
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)", 
       
      ],
      borderWidth: 0,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "center", 
      display: false, 
    },
    tooltip: {
      enabled: true,
    },
  },
  cutout: "70%", 
  rotation: -20, 
  circumference: 360,
};

function DonutChart() {
  return (
    <div className="chart" style={{ position:"relative"  ,width:"100%" ,height:"95%" ,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column", gap:"5px"}}>
      <Doughnut data={data} options={options} />
      <span style={{position:"absolute" ,width:"50%" ,height:"50%"}}><h3 style={{color:"#FBFCFF" ,textAlign:"center" ,marginBottom:"5px"}}>75%</h3><p style={{color:"#FBFCFF",fontSize:"0.6rem",fontWeight:"500",textAlign:"center"}}>Goal Completed</p></span>
      <div className="remark" style={{height:"5%",width:"100%",fontSize:"0.6rem", color:"#C3c4ca"}}>
      <p>*The values are rounded off.</p>
      </div> 
    </div>
  );
}

export default DonutChart;
