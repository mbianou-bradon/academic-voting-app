import { onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { auth } from "../Backend/firebaseConfig"


export default function VotersPage(){
    const [user, setUser] = useState({})
    useEffect(
        () => {
            onAuthStateChanged(auth, user => {
                setUser(user)
            })
        },
        []
    )

    return (
        <div className="w-full h-screen fixed left-0 top-0 bg-white overflow-y-scroll">
            <div className="md:flex relative">
                <div className="subnav hidden fixed bg-slate-100 w-[12rem] h-screen md:flex flex-col items-center justify-between z-10">
                    <div className="text-2xl mt-5 text-primary font-semibold">
                        <h2>Academia</h2>
                    </div>
                    <ul className="flex flex-col gap-y-10 [&>*]:cursor-pointer">
                        <li>
                            <NavLink to="voterspage" className={({isActive}) => isActive? "text-primary border-b-2 border-b-primary" : "text-slate-900 border-b-transparent hover:border-b-primary hover:text-primary"} end>Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink to="voterspage/election" className={({isActive}) => isActive? "text-primary border-b-2 border-b-primary" : "text-slate-900 border-b-transparent hover:border-b-primary hover:text-primary"}>Vote</NavLink>
                        </li>
                        <li>
                            <NavLink to="voterspage/vote-result" className={({isActive}) => isActive? "text-primary border-b-2 border-b-primary" : "text-slate-900 border-b-transparent hover:border-b-primary hover:text-primary"}>Vote Result</NavLink>
                        </li>
                    </ul>
                    <div></div>
                </div>
                <div className="fixed top-0 h-16 md:h-14 md:-z-0 w-full bg-slate-100 flex items-center justify-between px-4 md:px-0">
                    <div className="text-2xl md:mt-5 text-primary font-semibold">
                        <h2>Academia</h2>
                    </div>
                    
                    <div className="w-full md:relative">
                        <div className="w-12 h-12 rounded-full bg-red-500 absolute right-6 top-2 md:-top-6">
                            <img src={user.photoURL} alt="" className="h-full rounded-full"/>
                        </div>
                    </div>
                </div>

                <div className="md:ml-[12rem]">
                    <div className="mt-16">
                        <div>
                            <h2 className="text-left text-2xl ml-3 mb-4">Ongoing elections</h2>
                        </div>
                        <div className="flex items-center flex-wrap gap-8 ml-3 [&>*]:w-[15rem] [&>*]:h-[15rem] [&>*]:bg-slate-400 [&>*]:rounded-lg [&>*]:pt-4 font-semibold [&>*:hover]:bg-slate-800 [&>*:hover]:text-white [&>*]:cursor-pointer">
                            <div><h2>Departmental Elections</h2></div>
                            <div><h2>Faculty Elections</h2></div>
                            <div><h2>Others</h2></div>
                        </div>
                    </div>

                    <div className="mt-10">

                        <div>
                            <h2 className="text-left text-2xl ml-3 mb-4">Live Results</h2>
                        </div>
                        <div className="flex items-center flex-wrap gap-8 ml-3 [&>*]:w-[15rem] [&>*]:h-[15rem] [&>*]:bg-slate-400 [&>*]:rounded-lg [&>*]:pt-4 font-semibold [&>*:hover]:bg-slate-800 [&>*:hover]:text-white [&>*]:cursor-pointer">
                            <div><h2>Departmental Elections</h2></div>
                            <div><h2>Faculty Elections</h2></div>
                            <div><h2>Others</h2></div>
                        </div>
                    </div>

                    <div className="my-10">

                        <div>
                            <h2 className="text-left text-2xl ml-3 mb-4">Live Results</h2>
                        </div>
                        <div className="flex items-center flex-wrap gap-8 ml-3 [&>*]:w-[15rem] [&>*]:h-[15rem] [&>*]:bg-slate-400 [&>*]:rounded-lg [&>*]:pt-4 font-semibold [&>*:hover]:bg-slate-800 [&>*:hover]:text-white [&>*]:cursor-pointer">
                            <div><h2>Departmental Elections</h2></div>
                            <div><h2>Faculty Elections</h2></div>
                            <div><h2>Others</h2></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}