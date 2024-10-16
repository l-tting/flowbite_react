import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
    
    return(
        <header class="bg-white lg:py-8">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

        <nav class="relative flex items-center justify-between h-16 bg-white lg:rounded-md lg:shadow-lg lg:h-16 lg:px-8 lg:py-6">
            <div class="flex-shrink-0">
                <a href="#" title="" class="flex">
                    <img class="w-auto h-8 lg:h-10" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt="" />
                </a>
            </div>

            <button type="button" class="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>

                 <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg> 
            </button>

            <div class="hidden ml-10 lg:flex lg:items-center lg:mr-auto lg:space-x-10">
                <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600" onClick={()=>navigate("/")}> About Us</a>

                <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600" onClick={()=>navigate("/products")}> Products </a>

                <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600" onClick={()=>navigate("/sales")}> Sales </a>

                <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600" onClick={()=>navigate("/contact")}> Contact Us </a>
                <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600" onClick={()=>navigate("/dashboard")}> DashBoard </a>
            </div>

            <div class="hidden lg:flex lg:items-center lg:space-x-10">
                <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600" onClick={()=>navigate("/register")}> Sign up </a>

                <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600" onClick={()=>navigate("/login")}> Sign in </a>
            </div>
        </nav>


        <nav class="flex flex-col py-4 space-y-2 lg:hidden">
            <a href="#" title="" class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600" onClick={()=>navigate("/")}> Home </a>

            <a href="#" title="" class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600" onClick={()=>navigate("/products")}> Products </a>

            <a href="#" title="" class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600" onClick={()=>navigate("/sales")}> Sales </a>

            <a href="#" title="" class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600" onClick={()=>navigate("/contact")}> Contact Us </a>
            <a href="#" title="" class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600" onClick={()=>navigate("/dashboard")}> DashBoard </a>
            <a href="#" title="" class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600" onClick={()=>navigate("/logout")}> LogOut </a>
        </nav>
    </div>
</header>

    )
}

export default Header
