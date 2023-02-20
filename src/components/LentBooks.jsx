import React, { useEffect, useState } from 'react'
import { supabase } from '../client'
import LentBookCard from './LentBookCard';

const LentBooks = () => {

    const [users, setUsers] = useState([]);
    

    async function fetchUsers() {
        const { data } = await supabase.from('user').select(`*,book_id_fk(*).`).eq('returned', false).order('id',  { ascending: true })
        setUsers(data)
        console.log(data)
    }

    useEffect(() => {
        fetchUsers()
    }, [])

  return (
    <div className='mt-[70px] w-full flex justify-center'>
        <div className='flex flex-col w-[80%]'>
            {users.map((user)=>{
                return (
                <LentBookCard key={user.id} user={user} fetchUsers={fetchUsers}/>
                    )
            })}
        </div>
    </div>
  )
}

export default LentBooks