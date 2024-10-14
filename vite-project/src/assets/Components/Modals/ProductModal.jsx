import { useState } from "react"
import axios from "axios"

const ProductModal = () => {
    const url ="http://127.0.0.1:5000/products"
    const [productdata,setProductData] = useState({
        name:"",
        buying_price:"",
       selling_price:"",
       stock_quantity:"",
    })
    const postProducts = async (e) =>{
        e.preventDefault()
        try{
            const response = await axios.post(url,productdata)
            console.log("Response",response.data)
        }
        catch(error){
            console.log("Error posting products",error)
        }
    }
    const handleChange =(e)=>{
        const {name,value} = e.target
        setProductData({
            ...productdata, 
            [name]: value, 
        })


    }
    return (
        <div>
            <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                ADD NEW PRODUCT
            </button>
            <div id="authentication-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative p-4 w-full max-w-md max-h-full">

                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">

                        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                Add Products To MyShop
                            </h3>
                            <button type="button" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>

                        <div class="p-4 md:p-5">
                            <form class="space-y-4" onSubmit={postProducts}>
                                <div className="flex">
                                    <div>
                                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                                        <input  onChange={handleChange} type="text" name="name" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Product Name" required />
                                    </div>
                                    <div className="ml-4">
                                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Buying Price</label>
                                        <input  onChange={handleChange} type="number" name="buying_price" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter Buying Price" required />
                                    </div>
                                </div>
                                <div className="flex">
                                    <div>
                                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selling Price</label>
                                        <input onChange={handleChange} type="number" name="selling_price" id="password" placeholder="Enter Selling Price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                    </div>
                                    <div className="ml-4">
                                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stock Quantity</label>
                                        <input onChange={handleChange} type="number" name="stock_quantity" id="password" placeholder="Enter stock quantity" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                    </div>
                                </div>
                                

                                <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Product</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ProductModal
