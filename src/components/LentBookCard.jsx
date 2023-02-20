import React from 'react'
import { supabase } from '../client'

const LentBookCard = ({ user, fetchUsers }) => {

    async function handleClick(e) {
        e.preventDefault()
        await supabase.from('book').update({
            quantity: (user.book_id_fk.quantity + 1)
        }).eq("id", user.book_id_fk.id)
        fetchUsers()
        await supabase.from('user').update({
            returned: true
        }).eq("id", user.id)
        fetchUsers()
    }

    return (
        <div className='w-full border-black'>
            <div className=' min-h-[300px] h-fit m-1 md:m-2 p-2 rounded-lg flex gap-10' >
                <div className={`${user.book_id_fk.imgUrl ? "hidden md:block" : "bg-gray-300 hidden md:block w-full h-[300px] md:h-[300px]"}`} >
                    <img src={user.book_id_fk.imgUrl} className={`${user.book_id_fk.imgUrl ? " h-[300px] w-[250px] " : "hidden"}`} alt="book"/>
                </div>
                <div className=' w-[250px] md:w-[300px] flex flex-col justify-center'>
                    <div className={`${user.book_id_fk.imgUrl ? "md:hidden" : "bg-gray-300 hidden md:block w-full h-[300px] md:h-[300px]"}`} >
                        <img src={user.book_id_fk.imgUrl} className={`${user.book_id_fk.imgUrl ? " h-[300px] w-[250px] " : "hidden"}`} alt="book"/>
                    </div >
                    <p className='text-sm'><em>{user.book_id_fk.title}</em></p>
                    <p className='text-sm'> by <strong>{user.book_id_fk.author}</strong></p>
                    <p className='hidden md:block text-sm'>Quantity: {user.book_id_fk.quantity}</p>
                </div>
                <div className='w-[200px] flex flex-col justify-center'>
                    <p className='text-sm'><em>{user.userName}</em></p>
                    <p className='text-sm'> {user.email}</p>
                    <p className='text-sm'>Checked Out: {user.lent}</p>
                    <p>Return By: {user.returnBy}</p>
                    <div className='flex justify-center mt-2'>
                        <button className='flex w-fit border-gray-700 px-2 py-1 rounded-lg bg-[#00BBF9]' onClick={handleClick}>
                            Return
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LentBookCard