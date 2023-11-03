
import Lottie from 'lottie-react';
import animationData from '../Components/animation/Animation2.json'
import { Link } from 'react-router-dom';
const Banner = () => {
    const style = {
        height: 400,
    };


    return (
        <div className="w-10/11 h-[100vh] flex lg:flex-row md:flex-row flex-col-reverse justify-center items-center gap-6">
            <div className="w-full  md:w-5/12  lg:w-5/12 pt-0 md:pt-20 lg:pt-20 flex justify-center items-center text-center mooli">
                <div className='space-y-3'>
                    <p className='lg:text-5xl md:text-4xl text-2xl font-bold text-[#FF3C4A]'>Find your favorite recipe and surprise your favorite people by making it</p>
                    <p className='text-lg text-black'>Be with us and get more recipes</p>
                    <div className='flex justify-center items-center gap-4 pb-3'>
                        <Link to="/register"><button className='btn bg-transparent shadow-inner shadow-black rounded-full border-2 border-black capitalize text-xs hover:bg-[#FF3C4A]'>Join With Us</button></Link>
                        <button className='btn bg-transparent shadow-inner shadow-black rounded-full border-2 border-black capitalize text-xs hover:bg-[#FF3C4A]'>See recipes</button>
                    </div>
                </div>
            </div>

            <Lottie className="w-/12 hover:shadow-xl hover:shadow-black hover:translate-x-20 hover:scale-150" animationData={animationData} loop={true} autoPlay={true} style={style}></Lottie>
        </div>
    );
};

export default Banner;