import forgot from "../assets/Forgot_password.png"

export default function ForgotPassword(){

    return(
        <div>

            <div className="flex flex-wrap items-center justify-around min-h-[50vh] lg:min-h-[87vh] px-8">
                <div className="w-2/3 md:w-1/3">
                    <img src={forgot} alt="" />
                </div>

                <div>
                    <div>
                        <h2 className="text-3xl font-bold">Forgot Password</h2>
                        <p className="text-xs w-4/5 my-5">Enter your Institutional email address and we will send you a code to reset your password</p>
                    </div>

                    <div>
                        <form action="">
                            <input type="email" name="email" id="formEmail" placeholder="Enter institutional email Address" className="h-10 w-full pl-4 border border-primary rounded-full text-sm text-primary mb-5"/>
                            <button className="border border-primary bg-primary py-2 text-white font-semibold rounded-full text-sm my-3 w-full hover:bg-primary hover:scale-105 active:scale-95">Send Code</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}