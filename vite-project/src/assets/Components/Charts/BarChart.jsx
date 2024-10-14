import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

 function DataChart({sales_per_product,profit_per_product}) {
    const xAxisData = sales_per_product.map(item=>item.product);
    const salesData = sales_per_product.map(item=>item.sales)
    const profitData = profit_per_product.map(item=>item.profit)
    console.log("Products x axis",xAxisData)
    console.log("Productsyaxis",salesData)
    console.log("Profit syaxis",profitData)
  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: xAxisData }]}
      series={[{ data: salesData,label:"Sales" },{data:profitData , label:"Profit"}]}
      width={500}
      height={300}
      title='Sales and Profit per Product'
    />
  );
}
export default DataChart;

