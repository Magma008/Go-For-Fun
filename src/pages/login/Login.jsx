import React, { useState } from 'react'
import { BsCalendarDateFill } from 'react-icons/bs'
import { FaFileImage, FaPhoneVolume, FaRegUser } from 'react-icons/fa6'
import { ImEye, ImEyeBlocked } from 'react-icons/im'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { TbLockPassword } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate();

    // * Custom Functions
    const formControl = (e, inp) => {
        e.preventDefault()
        if (inp == "password") {
            setOpen(prev => !prev)
        } else {
            console.error("Qandaydir xatolik yuzaga keldi.")
        }
    }

    return (
        <div className='bg-[#1E1E1E] min-h-screen'>
            <div className="main-container">
                <div className="flex flex-col gap-5 justify-center min-h-screen">
                    <h1 className="text-white text-4xl text-center font-semibold">Log In</h1>
                    <form className="flex flex-col p-5 gap-3 bg-[#191919] rounded-[10px]">
                        <p className="text-white text-xl text-center font-medium mb-5">Enter Credentials</p>
                        <div className="input rounded-lg text-gray-400  flex items-center gap-2 pl-2.5 border border-gray-600 text-lg">
                            <MdOutlineAlternateEmail />
                            <input type="text" className="placeholder:text-gray-400 px-2.5 py-2 w-full outline-0 text-base" placeholder='Username' />
                        </div>
                        <div className="input relative rounded-lg text-gray-400  flex items-center gap-2 pl-2.5 border border-gray-600 text-lg">
                            <TbLockPassword />
                            <input type={open ? "text" : "password"} className="placeholder:text-gray-400 px-2.5 py-2 w-full outline-0 text-base" placeholder='Password' min={8} />
                            <button onClick={(e) => formControl(e, "password")} type='button' className='absolute top-[50%] right-2.5 translate-y-[-50%] cursor-pointer'>
                                {
                                    open ? <ImEyeBlocked /> : <ImEye />
                                }
                            </button>
                        </div>
                        <button type='submit' className="text-white bg-linear-to-r from-[#FF8C00] to-[#FF6445] cursor-pointer py-2 rounded-full transition-all duration-300 //hover:rounded-sm hover:bg-linear-180 mt-3.5">Submit →</button>
                        <p onClick={() => navigate('/signup')} className="text-gray-300 text-center text-[15px] cursor-pointer transition-all duration-300 hover:underline">Create New Account</p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login