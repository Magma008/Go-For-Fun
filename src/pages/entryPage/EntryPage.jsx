import React from 'react'
import bg from "../../assets/entry-bg.jpg"
import { GiSoccerBall } from 'react-icons/gi'
import { FaUsersGear } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

const EntryPage = () => {
    const navigate = useNavigate();

    // const navHandler = async (e) => {
    //     e.preventDefault();

    //     const data = await JSON.parse(localStorage.getItem("userData"));

    //     if (data) {
    //         navigate("/login")
    //     } else {
    //         navigate("/signup")
    //     }

    // }

    return (
        <div className='min-h-screen bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${bg})` }}>
            <div className="flex //bg-red-500 min-h-screen justify-center items-center flex-col">
                <div className="bg-black/40 border-2 border-black p-7 text-white rounded-xl flex flex-col gap-5 items-center backdrop-blur-xs min-w-77.5">
                    <div className="flex flex-col items-center gap-0.5">
                        <h1 className="text-3xl font-semibold">Go For Fun</h1>
                        <p className="text-[15px]">Choose your role</p>
                    </div>
                    <div className="buttons w-full flex flex-col items-center gap-7">
                        {/* <button onClick={(e) => navHandler(e)} className="bg-linear-to-r from-[#FF8C00] to-[#FF6445] rounded-xl w-full p-6 cursor-pointer">
                            <div className="flex flex-col items-center text-xl">
                                <FaUsersGear className='text-5xl' />
                                <p>Organizer</p>
                            </div>
                        </button> */}
                        <button onClick={() => navigate("/player-profile")} className="bg-[#2C2C2C]/80 rounded-xl w-full p-6 cursor-pointer">
                            <div className="flex flex-col items-center text-xl">
                                <GiSoccerBall className='text-5xl' />
                                <p>Player</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EntryPage
