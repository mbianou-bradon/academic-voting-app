import { FaFacebookF , FaTwitter } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"
import { Link } from "react-router-dom"

export default function Footer (){

    return (
        <footer className="px-10">
            <div className="my-5 mb-8 text-ce grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 text-sm text-slate-800 [&>*>h2]:text-primary [&>*>h2]:my-4 [&>*>h2]:text-lg [&>*>ul>li:hover]:underline [&>*>ul>li]:w-fit [&>*>ul>li]:mb-2">
                <div className="short_about">
                    <h2>Wuna University</h2>

                    <p>We give High Quality training to make our students stand out
                        amongst other students from other University
                    </p>
                </div>

                <div className="md:place-self-center">
                    <h2>Insight</h2>
                    <ul>
                        <li><a href="">Resources</a></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><a href="">Blog</a></li>
                    </ul>
                </div>

                <div className="md:place-self-center">
                    <h2>Help</h2>
                    <ul>
                        <li><Link to="/how-to-vote">Support</Link></li>
                        <li><Link to="/signup">Sign Up</Link></li>
                        <li><Link to="/login">Sign In</Link></li>
                    </ul>
                </div>

                <div>
                    <h2>Others</h2>
                    <ul>
                        <li><a href="">Our Successful Students</a></li>
                        <div className="flex items-center sm:justify-cente my-5  gap-5 [&>*]:w-fit [&>*]:cursor-pointer [&>*]:bg-primary [&>*]:text-white [&>*:hover]:bg-white [&>*:hover]:text-primary [&>*]:border [&>*]:border-primary [&>*]:rounded-lg [&>*]:px-2 [&>*]:py-1">
                            {/* Facebook */}
                            <div>
                                <FaFacebookF />
                            </div>
                            {/* Twitter */}
                            <div>
                                <FaTwitter />
                            </div>
                            {/* Instagram */}
                            <div>
                                <AiFillInstagram />
                            </div>
                        </div>
                    </ul>
                </div>
            </div>

            <div className="text-xs text-center [&>*>span]:text-primary [&>*>span]:cursor-pointer [&>*>span:hover]:underline [&>*]:my-3">
                <p>Our <span>Terms and Conditions</span> and <span>Private Policy</span></p>
                <p className="text-slate-400">Copyright &copy; 2023, Wuna University</p>
            </div>
        </footer>
    )
}