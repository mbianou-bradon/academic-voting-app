


export default function VoterCard (){

    return (
        <div className="w-full max-w-[16rem] rounded-md border border-primary py-5 px-4">
            <div>
                <div className="w-20 h-20 mx-auto bg-primary rounded-full">
                    <img src="" alt="" />
                </div>

                <div className="mt-2 mb-5 text-center">
                    <h2 className="text-xl">Mbianou Bradon</h2>
                    <p className="text-sm">Software Development</p>
                </div>

                <div className="flex justify-between gap-3 [&>*]:border [&>*]:border-primary [&>*]:py-2 [&>*]:rounded [&>*]:cursor-pointer [&>*:active]:scale-95">
                    <div className="px-5 bg-primary text-white hover:text-primary hover:bg-white"><h2>Vote</h2></div>
                    <div className="text-sm px-1 hover:bg-primary hover:text-white">
                        <h3>VIEW DETAILS</h3>
                    </div>
                </div>
            </div>
            
        </div>
    )
}