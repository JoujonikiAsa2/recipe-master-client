import { Outlet } from "react-router-dom";
import Navbar from "../SharedConponent/Navbar/Navbar";
import Footer from "../SharedConponent/Footer/Footer";
import '../index.css'
const Root = () => {
    return (
        <div className="poppins" >
                <Navbar></Navbar>
            <div className="max-w-[90vw] mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;