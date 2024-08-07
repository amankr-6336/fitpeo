import React from 'react'
import './CircularChart.scss'

function CircularChart({percentage = 75, size = 150, strokeWidth = 20 }) {
    const validPercentage = Math.min(Math.max(percentage, 0), 100);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = (validPercentage / 100) * circumference; 
  return (
    <svg width={size} height={size} className="ring-svg">
    <circle
      className="ring-background"
      cx={size / 2}
      cy={size / 2}
      r={radius}
      stroke="#e0e0e0"
      strokeWidth={strokeWidth}
      fill="none"
    />
    <circle
      className="ring-fill"
      cx={size / 2}
      cy={size / 2}
      r={radius}
      stroke="#4caf50"
      strokeWidth={strokeWidth}
      fill="none"
      strokeDasharray={circumference}
      strokeDashoffset={offset}
      strokeLinecap="round" 
    />
    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      dy=".3em"
      fontSize="24px"
      fill="#333"
    >
      {validPercentage}%
    </text>
  </svg>
  )
}

export default CircularChart