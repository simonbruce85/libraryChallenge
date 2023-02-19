import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();
    return (
        //Navbar container
        <div className='bg-[#00BBF9] h-[60px] w-full fixed top-0  z-10 flex items-center justify-center'>
            <div className='flex items-center justify-between w-[80%]'>
                <p className='cursor-pointer' onClick={() => {
                    navigate("/")
                }}>Logo</p>
                <div className='flex grow justify-center '>
                </div>
                <div className='flex gap-2'>
                    <p className='hover:border-b-2 border-black py-1 cursor-pointer' onClick={() => {
                        navigate("/")
                    }}>Home</p>
                    <p className='hover:border-b-2 border-black py-1 cursor-pointer' onClick={() => {
                        navigate("/createBook")
                    }}>Add</p>
                    <p className='hover:border-b-2 border-black py-1 cursor-pointer' onClick={() => {
                        navigate("/lentBooks")
                    }}>Lent</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar

// L80IeCghLO6cMNSC