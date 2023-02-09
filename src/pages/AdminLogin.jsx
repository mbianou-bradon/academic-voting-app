import { Link } from "react-router-dom";
import admin from "../assets/Admin.png" 


export default function AdminLogin(){

    return (
        <div className="px-4">

            <div className="flex flex-wrap items-center justify-around min-h-[50vh] lg:min-h-[87vh]">
                <div className="w-2/3 md:w-1/3">
                    <img src={admin} alt="" />
                </div>

                <div>
                    <div>
                        <h2 className="text-4xl font-semibold">Admin Login!</h2>
                        <p className=" text-sm mt-5">Welcome back to the Wuna University voting platform.</p>
                    </div>

                    <div>
                        <form action="" className="[&>input]:border [&>input]:border-primary [&>input]:block [&>input]:h-10 [&>input]:w-full  [&>input]:text-sm [&>input]:text-primary [&>input]:rounded-full [&>input]:my-5 [&>input]:pl-4">

                            <input type="email" name="email" id="FormEmail" placeholder="Staff Institutional Email"/>

                            <input type="password" name="password" id="FormPassword" placeholder="Password"/>

                            <div className="flex justify-between mb-10 text-xs sm:text-sm flex-wrap gap-y-4">
                                <div className="flex items-center cursor-pointer">
                                    <input type="checkbox" name="rememberPassword" id="rememberPassword" className="sm:w-5 sm:h-5 border border-primary mr-2"/>
                                    <label htmlFor="rememberPassword" className="block">Remember Password</label>
                                </div>

                                <h2 className="text-primary font-semibold hover:underline cursor-pointer"><Link to="/login/forgot_password">Forgot Password?</Link></h2>
                            </div>

                            <button className="border border-primary bg-primary py-2 text-white font-semibold rounded-full text-sm my-3 w-full hover:bg-primary hover:scale-105 active:scale-95">LogIn</button>

                            <p className="w-full h-10 rounded-full shadow-md text-center bg-white border pt-1.5 my-3 cursor-pointer hover:scale-105 active:scale-95">LogIn with Google</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}