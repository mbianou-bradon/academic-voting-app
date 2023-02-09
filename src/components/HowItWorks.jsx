import IVoted from "../assets/ivote.png"
import VotingStep from "./VotingStep"

const StepToVoteData = [
    {
        position: '1',
        name: 'Sign up',
        description: 'Create an account on the platform to vote'
    },
    {
        position: '2',
        name: 'Vote',
        description: 'Vote for your preferred candidate'
    },
    {
        position: '3',
        name: 'View Election Results',
        description: 'View election result of various candidates'
    },
]


export default function HowItWorks() {

    return (
        <div className="min-h-screen py-5 px-4 sm:px-10">
            <div className="text-center mb-10">
                <h2 className="font-bold text-3xl text-primary mb-3">How it works</h2>
                <p>It's simple and easy to use with these 3 steps</p>
            </div>
            <div className="flex justify-center gap-16 flex-col sm:flex-row w-full">
                <div className="flex justify-between flex-col">
                        {
                            StepToVoteData.map(step => {
                                return (<VotingStep position = {step.position} name = {step.name} description = {step.description} />)
                            })
                        }
                </div>

                <div className="">
                    <img src={IVoted} alt="" className="h-[105%] object-cover"/>
                </div>
            </div>
        </div>
    )
}