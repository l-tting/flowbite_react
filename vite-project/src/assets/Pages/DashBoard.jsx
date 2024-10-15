import React, { useEffect, useState } from 'react'
import DataChart from '../Components/Charts/BarChart'
import SimpleLineChart from '../Components/Charts/LineChart'
import axios from "axios"

const DashBoard = () => {
  const url = import.meta.env.VITE_API_DASH_URL;
    const [data,setData] = useState({
        sales_per_day:[],
        profit_per_day:[],
        sales_per_product:[],
        profit_per_product:[],
       

    })

    const fetchData = async ()=>{
        const response = await axios.get(url)
        console.log("Dash",response.data.sales_per_product)
        setData(prevData=>({
            ...prevData,
            ...response.data
        }))

    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div>
      Dashboard

      <div>

        <DataChart
        
        sales_per_product ={data.sales_per_product}
        profit_per_product ={data.profit_per_product}
        
        />
      </div>
      <div>
       <SimpleLineChart
       sales_per_day={data.sales_per_day}
       profit_per_day={data.profit_per_day}
       />
      </div>
    </div>
  )
}

export default DashBoard
