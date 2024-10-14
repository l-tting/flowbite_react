import { useEffect, useState } from "react"
import ProductModal from "../Components/Modals/ProductModal"
import UpdateProduct from "../Components/Modals/UpdateProduct"
import ProductTable from "../Components/Tables/ProductTable"
import axios from "axios"

const Products = () => {
   const url ="http://127.0.0.1:5000/products"
   const [products,setProducts] =useState([])
   const fetchProducts = async ()=>{
    try{
        const response = await axios.get(url)
    console.log(response)
    setProducts(response.data.products)

    }catch(e){
        console.log("Error fetching products",e)
    }
   }
   useEffect(()=>{
    fetchProducts()

   },[])

    return (
        <div>
            <div className="flex justify-center">
                <div className="mr-4">
                    <ProductModal />
                </div>
                <div>
                    <UpdateProduct />
                </div>
            </div>
           <div>

            <ProductTable products={products}/>
   
               
           </div>
        </div>
    )
}
export default Products