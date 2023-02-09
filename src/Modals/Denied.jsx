import denied from "../assets/Denied.png"
import {RxCross1} from "react-icons/rx"

export default function Denied(){
    

    return (
        <div className="flex items-center justify-center min-h-screen bg-black/40">
            <div className="w-full max-w-xl text-center bg-white p-5 rounded backdrop-blur-md relative">
                <div className="absolute top-3 right-3 cursor-pointer hover:scale-110"><RxCross1/></div>
                <h2 className="text-3xl font-bold">Voting Denied!</h2>

                <div>
                    <img src={denied} alt="" className="my-5"/>
                </div>

                <p className="text-lg">You can only vote once!</p>
            </div>
        </div>
    )
}