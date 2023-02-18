import React from 'react'

const Navbar = () => {
    return (
        //Navbar container
        <div className='bg-[#00BBF9] h-[60px] w-full fixed top-0 flex items-center justify-between z-10'>
            <p>Logo</p>
            <div className='flex grow justify-center'>
            </div>
            <div className='flex'>
                <p>Search</p>
                <p>Search</p>
                <p>Search</p>
            </div>
        </div>
    )
}

export default Navbar