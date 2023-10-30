
import Lottie from 'lottie-react';
import animationData from '../Components/animation/Animation2.json'
const Banner = () => {
    const style = {
        height: 400,
    };


    return (
        <div className="w-10/11 h-[115vh] flex justify-center items-center gap-6">
            <div className="w-5/12 h-60 flex justify-center items-center text-center mooli">
                <div className='space-y-2'>
                    <p className=' text-2xl font-bold text-[#FF3C4A]'>Find your favorite recipe and surprise your favorite people by making it</p>
                    <p className='text-lg text-black'>Be with us and get more recipes</p>
                    <div className='flex justify-center items-center gap-4 pb-3'>
                        <button className='btn bg-transparent shadow-inner shadow-black rounded-full border-2 border-black capitalize text-xs hover:bg-[#FF3C4A]'>Join With Us</button>
                        <button className='btn bg-transparent shadow-inner shadow-black rounded-full border-2 border-black capitalize text-xs hover:bg-[#FF3C4A]'>See recipes</button>
                    </div>
                </div>
            </div>

            <Lottie className="w-/12 h-60 hover:shadow-xl hover:shadow-black" animationData={animationData} loop={true} autoPlay={true} style={style}></Lottie>
        </div>
    );
};

export default Banner;