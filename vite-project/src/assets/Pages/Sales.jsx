import React, { useEffect, useState } from 'react'
import SalesModal from '../Components/Modals/SalesModal'
import SalesTable from '../Components/Tables/SalesTable';
import axios from "axios";

const Sales = () => {
    const url = "http://127.0.0.1:5000/"
    const [sales,setSales] = useState([])
    const [products,setProducts] =useState([])
    const fetchSales = async () =>{
        try{
            const response = await axios.get(url + "sales")
            console.log("Sales",response.data)
            setSales(response.data.sales)
    }
    catch(e){
        console.log("Error fetching sales",e)

        }
    }  

    const fetchProducts = async ()=>{
        try{
            const response = await axios.get(url + "products")
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
