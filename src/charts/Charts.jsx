import React from 'react'
import { Bar, Pie } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js/auto';

export const Barchart = ({ data, options }) => {
  return <Bar data={data} options={options} />
}

export const PieChart = ({ data, options }) => {
  return (
    <>
      <Pie data={data} options={options} className="md:mr-[18rem]"/>
    </>
  )
}