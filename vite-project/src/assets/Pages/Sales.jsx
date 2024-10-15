import React, { useEffect, useState } from 'react'
import SalesModal from '../Components/Modals/SalesModal'
import SalesTable from '../Components/Tables/SalesTable';
import axios from "axios";

const Sales = () => {
    const url = import.meta.env.VITE_API_SALES_URL;
    const prods_url = import.meta.env.VITE_PRODUCTS_URL

    const [sales,setSales] = useState([])
    const [products,setProducts] =useState([])
    const fetchSales = async () =>{
        try{
            const response = await axios.get(url)
            console.log("Sales",response.data)
            setSales(response.data.sales)
    }
    catch(e){
        console.log("Error fetching sales",e)

        }
    }  

    const fetchProducts = async ()=>{
        try{
            const response = await axios.get(prods_url)
            console.log("products",response.data)
            setProducts(response.data.products)

        }
        catch(error){
            console.log("Error getting products",error)

        }
    }

    useEffect(()=>{
        fetchSales();
        fetchProducts();
    },[]) 
  return (
    <div>
        sales
        <SalesModal products={products} />
        <SalesTable sales={sales} />

       
      
    </div>
  )
}

export default Sales
