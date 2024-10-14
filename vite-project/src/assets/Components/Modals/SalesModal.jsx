import React from 'react'
import { useState } from 'react'
import axios from "axios"

const SalesModal = ({ products }) => {
    const url = "http://127.0.0.1:5000/sales"
    const [salesdata, setSalesData] = useState({
        pid: "",
        quantity: "",
    })
    const postSale = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(url, salesdata)
            console.log("Response", response.data)
        }
        catch (error) {
            console.log("Error posting sales", error)
        }

    }
    const handleChange = (e) => {
        const { name, value } = e.target
        setSalesData({
            ...salesdata,
            [name]: value
        })
    }
    return (
        <div>
            <div>
                <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                    MAKE SALE
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
                                <form class="space-y-4" onSubmit={postSale}>
                                    <div className="flex">
                                        <div>
                                            <label htmlFor="productSelect" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                Select Product
                                            </label>

                                            <select
                                                name="pid"
                                                // id="productSelect"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                required
                                                onChange={handleChange}
                                            >
                                                <option value="">Choose a product</option>
                                                {products.map(product => (
                                                    <option value={product.id} key={product.id}>{product.name}</option>
                                                ))}
                                            </select>

                                        </div>
                                        <div className="ml-4">
                                            <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                Quantity
                                            </label>
                                            <input
                                                type="number"
                                                name="quantity"
                                                // id="quantity"
                                                onChange={handleChange}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                placeholder="Enter Quantity"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Product</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default SalesModal
