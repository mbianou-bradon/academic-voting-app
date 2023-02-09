import aboutUS from "../assets/AboutUs.png"
import {HiLightBulb} from "react-icons/hi"
import {GiVote} from "react-icons/gi"


export default function ContactUs(){

    return(
        <div>
            <div className="px-4">
                <div className="w-full md:w-4/5 mx-auto text-center">
                    <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold mb-4">We aim to make school elections ease, seamless and fair</h2>
                    <p className="text-xs sm:text-sm">This voting system was made to improve the voting system of the Wuna University. 
                        Electing student representatives has been made easy on this App. With just few clicks voters are able to vote for their preffered candidates. 
                    </p>
                </div>

                <div className="w-full sm:w-[60%] h-full overflow-hidden mx-auto mt-5 mb-9">
                    <img src={aboutUS} alt="" className="h-[80%]"/>
                </div>

                <div className="flex flex-wrap justify-around gap-10 [&>*]:py-10 [&>*]:px-5 [&>*]:rounded-lg [&>*]:max-w-[20rem] [&>*>div]:w-10 [&>*>div]:h-10 [&>*>div]:flex [&>*>div]:items-center [&>*>div]:justify-center [&>*>div]:rounded-full [&>*>div]:text-2xl [&>*>h2]:text-lg [&>*>h2]:font-semibold [&>*>h2]:my-3 [&>*>p]:sm:text-sm [&>*>p]:w-full [&>*>p]:sm:w-[90%] [&>*>p]:text-xs [&>*>div]:mb-2">
                    <div className="bg-primary text-white">
                        <div className="bg-white text-primary"><HiLightBulb/></div>
                        <h2>The Idea</h2>
                        <p>The Alpha team conducted an indepth reseach and saw the need for an online voting system that would speed up electoral 
                            process and help students vote in their preffered candidates
                        </p>
                    </div>

                    <div className="bg-slate-200">
                        <div className="bg-primary text-white"><GiVote/></div>
                        <h2>The Solution</h2>
                        <p>The Alpha team is set to solve the issue of slow electoral process and create a secured platform that ensures fair elections</p>
                    </div>
                </div>
            </div>
        </div>
    )
}