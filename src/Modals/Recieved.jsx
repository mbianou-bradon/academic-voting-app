import recieved from "../assets/Recieved.png"
import {RxCross1} from "react-icons/rx"

export default function Recieved(){
    

    return (
        <div className="flex items-center justify-center min-h-screen bg-black/40">
            <div className="w-full max-w-3xl text-center bg-white p-5 rounded backdrop-blur-md relative">
                <div className="absolute top-3 right-3 cursor-pointer hover:scale-110"><RxCross1/></div>
                <h2 className="text-4xl font-bold">Thank You!</h2>

                <div className="w-full">
                    <img src={recieved} alt="" className="my-5 mx-auto"/>
                </div>

                <p className="">Your Submission has been recieved, We will be in touch and contact you soon.</p>
            </div>
        </div>
    )
}