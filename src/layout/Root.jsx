import Navbar from "../Pages/WordpressPage/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";
import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div
         className="bg-[#f5f5f5]/75">
         <Navbar></Navbar>
         <Outlet></Outlet>
         <Footer></Footer>
        </div>
    );
};

export default Root;