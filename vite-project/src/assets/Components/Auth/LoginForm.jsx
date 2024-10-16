import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
    const navigate = useNavigate()
    const url = import.meta.env.VITE_LOGIN_URL
    const [login,setLogin] = useState({
        user:"",
        password:"",
    })
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setLogin({
            ...login,[name]:value
        })

    }
    const postLogin= async (e)=>{
        e.preventDefault()
        try{
            const response = await axios.post(url,login)
            
            const token = response.data.access_token
            localStorage.setItem("access_token",token)
            navigate('/dashboard')
            console.log("Login successfull")
        }
        catch(e){
            console.log("Error logging in:",e)
            
        }
        
    }
    return (
      <div>
          <section class="bg-white">
      <div class="grid grid-cols-1 lg:grid-cols-2 ">
         
  
          <div class="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
              <div class="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                  <h4 class="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign in to MyShop</h4>
                  <p class="mt-2 text-base text-gray-600">Don't have an account? <a href="#" title="" class="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Register</a></p>
  
                  <form  class="mt-8" onSubmit={postLogin}>
                      <div class="space-y-5">
                          <div>
                              <label for="" class="text-base font-medium text-gray-900"> Username or Email </label>
                              <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                      <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                      </svg>
                                  </div>
  
                                  <input
                                      type="text"
                                      name="user"

                                      placeholder="Enter your username or password"
                                      onChange={handleChange}
                                      class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                  />
                              </div>
                          </div>
  
                          
  
                          <div>
                              <label for="" class="text-base font-medium text-gray-900"> Password </label>
                              <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                      <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              stroke-width="2"
                                              d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                                          />
                                      </svg>
                                  </div>
  
                                  <input
                                      type="password"
                                      name="password"

                                      placeholder="Enter your password"
                                      onChange={handleChange}
                                      class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                  />
                              </div>
                          </div>
  
                          <div>
                              <button
                                  type="submit"
                                  class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80"
                              >
                                  Login
                              </button>
                          </div>
                      </div>
                  </form>
  
                 
                  
              </div>
          </div>
      </div>
  </section>
  
        
      </div>
    )
  }
  
  export default LoginForm
  