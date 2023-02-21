import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { supabase } from '../client'
import { useNavigate } from 'react-router-dom';


const CheckOut = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { id, title, author, description, quantity, imgUrl } = state; // Read values passed on state
  console.log(state)
  const [user, setUser] = useState({
    userName: "",
    email: "",
  }
  );
  const { userName, email } = user;
  let today = new Date()
  let returnBy = new Date(today.setDate(today.getDate() + 5)).toLocaleString()

  async function handleClick(e) {
    e.preventDefault()
    let book_id_fk = id;
    await supabase.from('user').insert({ userName, email, returnBy, book_id_fk }).single()
    setUser({
      userName: "",
      email: "",
      returnBy: "",
    })
    await supabase.from('book').update({ quantity: (quantity - 1) }).eq("id", id)
    navigate("/")
  }

  return (
    <div className='mt-[100px] w-full flex justify-center'>
      <div className='w-[80%] md:w-[50%]'>
        <div className={"flex justify-center"} >
          {imgUrl ? <img src={imgUrl} className="object-cover h-[300px] w-[200px]" alt="book" /> : <div className={"bg-gray-300 flex jusfify-center h-[200px] md:h-[250px] w-[200px]"}></div>}
        </div>
        <div>
          <p className='text-lg'>{title}</p>
          <p className='text-sm flex'> by <p className='ml-1 text-[#00BBF9]'>{author}</p></p>
          <div className='my-1'>
            <p className='text-md'><strong>Synapse</strong></p>
            <p className='text-sm'>{description}</p>
          </div>
          <p className='text-sm'>Quantity: {quantity}</p>
        </div>
        <div className='mt-3 mb-3 md:mt-10  flex justify-center'>
          <div className='flex flex-col md:w-[50%]  gap-2'>
            <p>Return By: {returnBy}</p>
            <form className='' onSubmit={handleClick} >
              <div className='flex my-1'>
                <input className='border-2 w-full rounded-lg' placeholder='Name' value={userName} onChange={e => setUser({ ...user, userName: e.target.value })}></input>
              </div>
              <div className='flex my-1'>
                <input className='border-2 w-full rounded-lg' placeholder='Email' type="email" required={true} value={email} onChange={e => setUser({ ...user, email: e.target.value })}></input>
              </div>
              <div className='flex justify-center my-1'>
                <button className='border w-fit px-2 py-1 rounded-lg bg-[#00BBF9]' type='submit' >Check Out</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckOut