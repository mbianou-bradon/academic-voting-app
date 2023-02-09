import React from "react";

export default function Card(props)  {
    return (
       
            <div className="card w-full max-w-[21rem] grid grid-rows-1 bg-red-200 px-8 py-12 rounded-lg h-full">
                <div className="rounded-full w-20 mx-auto">
                    <img src={props.picture}  className="card-img-top" alt="..." />
                </div>
                <div className="card-body text-center [&>*]:my-5 grid grid-row-2">
                    <h5 className="card-title">{props.name}<span className='text-success'><br />{props.position}</span> </h5>
                    <p className="card-text text-sm">{props.description}</p>
                    <a href="#s" className="border border-primary rounded px-4 py-2 text-white bg-primary active:scale-95 hover:bg-white hover:text-primary cursor-pointer">More details</a>
                </div>
            </div>
       
    )
}