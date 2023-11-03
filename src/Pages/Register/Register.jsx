import Lottie from "lottie-react";
import { BsFillPersonFill, BsGithub, BsGoogle } from "react-icons/bs"
import { LuImagePlus } from "react-icons/lu"
import { MdOutlineMailOutline } from "react-icons/md"
import { RiLockPasswordFill } from "react-icons/ri"
import amimatedDat3 from "./Animation3.json"

const Register = () => {
    return (
        <div className="relative top-28 pb-20 flex flex-col-reverse md:flex-row lg:flex-row gap-3 justify-center items-center mooli w-full">
            <div className="w-1/2 shadow-xl p-10 bg-white bg-opacity-80">
                <h2 className="text-4xl">Join With Us</h2>
                <div className="py-10">
                    <form>
                        <div className="flex flex-row gap-3 justify-center items-center">
                            <span className="text-lg"><BsFillPersonFill></BsFillPersonFill></span>
                            <input type="text" name="name" id="" placeholder=" Enter your name..." className="p-3 border-b-2 border-gray-300 hover:border-orange-400  w-full" />
                        </div>
                        <div className="flex flex-row gap-3 justify-center items-center">
                            <span className="text-lg"><LuImagePlus></LuImagePlus></span>
                            <input type="text" name="name" id="" placeholder=" Enter your image URL... " className="p-3 border-b-2 border-gray-300 hover:border-orange-400  w-full" />
                        </div>
                        <div className="flex flex-row gap-3 justify-center items-center">
                            <span className="text-lg"><MdOutlineMailOutline></MdOutlineMailOutline></span>
                            <input type="email" name="email" id="" placeholder="Enter your email address..." className="p-3 border-b-2 border-gray-300 hover:border-orange-400  w-full" />
                        </div>
                        <div className="flex flex-row gap-3 justify-center items-center">
                            <span className="text-lg"><RiLockPasswordFill></RiLockPasswordFill></span>
                            <input type="password" name="password" id="" placeholder=" Enter a strong password..." className="p-3 border-b-2 border-gray-300 hover:border-orange-400 w-full" />
                        </div>
                        <input type="submit" value="Sign Up" className="w-full input input-bordered mt-4 bg-orange-400" />
                        <div className="w-full flex flex-col justify-center itens-center gap-3  py-6">
                            <p className="text-xl text-center font-bold">Or <br /><span className="text-lg font-normal">sign up with</span></p>
                            <div className="flex flex-row justify-center gap-3 text-orange-400">
                                <BsGoogle className="text-4xl border-2 border-green-600 rounded-full p-1"></BsGoogle>
                                <BsGithub className="text-4xl border-2 border-green-600 rounded-full p-1"></BsGithub>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
            <div className="w-4 h-96 bg-orange-400 hidden lg:block md:block"></div>
            <div className="w-1/2">
                <Lottie animationData={amimatedDat3} loop={true} autoPlay={true} className="h-[300px]"></Lottie>
            </div>
        </div>
    );
};

export default Register;