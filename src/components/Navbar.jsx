import { NavLink } from "react-router-dom";


export default function Navbar() {
    
    return (
        <nav className="w-full max-w-[80rem] mx-auto flex items-center justify-between lg:gap-4 px-4 md:px-10 py-6">
            <div className="brand">
                <h2 className="text-primary font-semibold text-lg sm:text-2xl" >Academia</h2>
            </div>

            <div className="text-slate-800 [&>*>li]:  [&>*>li:hover]:text-primary [&>*>li]:border-b-2 [&>*>li]:border-b-transparent [&>*>li:hover]:border-b-primary flex items-center gap-5 lg:gap-20" >
                <ul className="hidden md:flex items-center gap-9">
                    <li className="hidden lg:block"><NavLink to="/" className={({isActive}) => isActive? "text-primary border-b-2 border-b-primary" : "text-slate-900 border-b-transparent"} end>Home</NavLink></li>
                    {/* <li><NavLink to="/votingpage" className={({isActive}) => isActive? "text-primary border-b-2 border-b-primary" : "text-slate-900 border-b-transparent"}>Vote</NavLink></li> */}
                    <li className="hidden lg:block"><NavLink to="/how-to-vote" className={({isActive}) => isActive? "text-primary border-b-2 border-b-primary" : "text-slate-900 border-b-transparent"}>How to vote</NavLink></li>
                    {/* <li><NavLink to="/about" className={({isActive}) => isActive? "text-primary border-b-2 border-b-primary" : "text-slate-900 border-b-transparent"}>About</NavLink></li> */}
                    <li><NavLink to="/contact" className={({isActive}) => isActive? "text-primary border-b-2 border-b-primary" : "text-slate-900 border-b-transparent"}>Contact Us</NavLink></li>
                </ul>

                <div className="text-sm [&>*]:border [&>*]:border-primary [&>*]:rounded-full [&>*]:w-fit [&>*]:cursor-pointer text-primary font-semibold [&>*]:px-4 [&>*]:py-2 hidden sm:flex items-center gap-5">
                    <div className="hover:bg-primary hover:text-white">
                        <NavLink to="/signup">
                            Sign Up
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}