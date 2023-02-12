import { NavLink } from "react-router-dom"


export default function VotersPage(){

    return (
        <div className="w-full h-screen fixed left-0 top-0 bg-white overflow-y-scroll">
            <div className="flex">
                <div className="subnav fixed bg-slate-100 w-[12rem] h-screen flex flex-col items-center justify-between">
                    <div className="text-2xl mt-5 text-primary font-semibold">
                        <h2>Academia</h2>
                    </div>
                    <ul className="flex flex-col gap-y-10 [&>*]:cursor-pointer">
                        <li>
                            <NavLink >Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink>Vote</NavLink>
                        </li>
                        <li>
                            <NavLink>Vote Result</NavLink>
                        </li>
                    </ul>
                    <div></div>
                </div>

                <div className="ml-[12rem]">
                    <div className="mt-10">
                        <div>
                            <h2 className="text-left text-2xl ml-3 mb-4">Ongoing elections</h2>
                        </div>
                        <div className="flex items-center gap-8 ml-3 [&>*]:w-[15rem] [&>*]:h-[15rem] [&>*]:bg-slate-400 [&>*]:rounded-lg">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>

                    <div className="mt-10">

                        <div>
                            <h2 className="text-left text-2xl ml-3 mb-4">Live Results</h2>
                        </div>
                        <div className="flex items-center gap-8 ml-3 [&>*]:w-[15rem] [&>*]:h-[15rem] [&>*]:bg-slate-400 [&>*]:rounded-lg">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>

                    <div className="my-10">

                        <div>
                            <h2 className="text-left text-2xl ml-3 mb-4">Live Results</h2>
                        </div>
                        <div className="flex items-center gap-8 ml-3 [&>*]:w-[15rem] [&>*]:h-[15rem] [&>*]:bg-slate-400 [&>*]:rounded-lg">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}