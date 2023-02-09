import { Link } from "react-router-dom";
import voting from "../assets/onlineVoting.png"
import { FcGoogle } from "react-icons/fc"


export default function Login(){

    return (
        <div className="min-h-[80vh] shadow-sm px-4 flex items-center justify-center">

            <div className="grid grid-cols-1 md:grid-cols-2">
               <div className="w-2/3 flex items-center justify-center ">
                    <img src={voting} alt="" />
                </div>

                <div className="">
                    <div>
                        <h2 className="text-4xl font-semibold">Welcome Back!</h2>
                        <p className=" text-sm mt-5">Welcome back to the Academia. Sign in 
                        to vote in your preffered candidate
                        </p>
                    </div>

                    <div>
                        <form action="" className="[&>input]:border [&>input]:border-primary [&>input]:block [&>input]:h-10 [&>input]:w-full  [&>input]:text-sm [&>input]:text-primary [&>input]:rounded-full [&>input]:my-5 [&>input]:pl-4">

                            <input type="email" name="email" id="FormEmail" placeholder="Institutional Email"/>

                            <input type="password" name="password" id="FormPassword" placeholder="Password"/>

                            <div className="flex justify-between mb-10 text-xs sm:text-sm flex-wrap gap-y-4">
                                <div className="flex items-center">
                                    <input type="checkbox" name="rememberPassword" id="rememberPassword" className="w-5 h-5 border border-primary mr-2"/>
                                    <label htmlFor="rememberPassword">Remember Password</label>
                                </div>

                                <h2 className="text-primary font-semibold hover:underline cursor-pointer"><Link to={'/login/forgot_password'}>Forgot Password?</Link></h2>
                            </div>

                            <button className="border border-primary bg-primary py-2 text-white font-semibold rounded-full text-sm my-3 w-full hover:bg-primary hover:scale-105 active:scale-95"><Link to="/voterspage">LogIn</Link> </button>

                            <button className="w-full h-10 rounded-full shadow-md text-center bg-white border  my-3 cursor-pointer hover:scale-105 active:scale-95 flex items-center justify-center">
                                <div className="text-3xl pr-2"><FcGoogle /></div>
                                <h2>LogIn with Google</h2>
                            </button>
                            <div className="text-center font-semibold mt-6"><Link to={'/login/admin'}>LogIn as an Admin</Link></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}