import React, { useState } from 'react'

import { Drawer } from 'antd';
import { useNavigate } from 'react-router-dom';
import { EditOutlined } from '@ant-design/icons'
import { supabase } from '../client'

const BookDetailsDrawer = ({ showDrawer, setShowDrawer, book,fetchBooks }) => {
    const [editBook, setEditBook] = useState(false)
    const [newBook, setNewBook] = useState({
        title: book.title,
        author: book.author,
        description: book.description,
        quantity: book.quantity,
        imgUrl: book.imgUrl
    })
    const onClose = () => {
        setShowDrawer(false);
    };

    const navigate = useNavigate();

    async function handleClick(e) {
        console.log(newBook)
        e.preventDefault()
        await supabase.from('book').update({
            title: newBook.title,
            author: newBook.author,
            description: newBook.description,
            quantity: newBook.quantity,
            imgUrl: newBook.imgUrl
        }).eq("id", book.id)
        onClose()
        fetchBooks()
        setEditBook(!editBook)
    }

    return (
        <>
            <Drawer title="Book Info" open={showDrawer} placement="right" onClose={onClose} >
                <div className={`${book.imgUrl ? "flex justify-center" : "bg-gray-300 w-full h-[200px] md:h-[250px]"}`} >
                    <div className='relative'>
                        <button className='absolute top-1 right-1 shadow-md border-gray-700 bg-[#00BBF9] flex items-center p-2 rounded-full' onClick={() => { setEditBook(!editBook) }}><EditOutlined /></button>
                        <img src={book.imgUrl} className=" w-[200px] h-[300px] md:w-[250px]" alt='book'/>
                    </div>
                </div>
                <div>
                    <p className='text-lg'>{book.title}</p>
                    <div className='text-sm flex'> by <p className='ml-1 text-[#00BBF9]'>{book.author}</p></div>
                    <div className='my-1'>
                        <p className='text-md'><strong>Description</strong></p>
                        <p className='text-sm'>{book.description}</p>
                    </div>
                    <p className='text-sm'>Quantity: {book.quantity}</p>
                    <button className='py-1 px-2 mt-2 border w-fit rounded-lg border-gray-700 bg-[#00BBF9]'
                        onClick={() => {
                            navigate("/checkout", { state: { id: book.id, title: book.title, author: book.author, description: book.description, quantity: book.quantity, imgUrl: book.imgUrl } })
                        }}>
                        Check Out
                    </button>
                    <form className={`${editBook ? "block" : "hidden"}`} onSubmit={handleClick}>
                        <div className=' flex justify-center w-full'>
                            <div className='flex flex-col   w-full gap-2 justify-center items-center'>
                                <h1>Edit Book</h1>
                                <div className='flex w-full'>
                                    <input className='border-2 w-full rounded-lg' placeholder='Title' value={newBook.title} onChange={e => setNewBook({ ...newBook, title: e.target.value })}></input>
                                </div>
                                <div className='flex w-full'>
                                    <input className='border-2 w-full rounded-lg' placeholder='Author' value={newBook.author} onChange={e => setNewBook({ ...newBook, author: e.target.value })}></input>
                                </div>
                                <div className='flex w-full'>
                                    <input className='border-2 w-full rounded-lg' placeholder='description' value={newBook.description} onChange={e => setNewBook({ ...newBook, description: e.target.value })}></input>
                                </div>
                                <div className='flex w-full'>
                                    <input className='border-2 w-full rounded-lg' placeholder='Quantity' value={newBook.quantity} onChange={e => setNewBook({ ...newBook, quantity: e.target.value })}></input>
                                </div>
                                <div className='flex w-full'>
                                    <input className='border-2 w-full rounded-lg' placeholder='Image Url' value={newBook.imgUrl} onChange={e => setNewBook({ ...newBook, imgUrl: e.target.value })}></input>
                                </div>
                                <button className='border w-fit px-2 py-1 rounded-lg bg-[#00BBF9] border-gray-700' type='submit' >Edit Book</button>
                            </div>
                        </div>
                    </form>
                </div>
            </Drawer>
        </>
    );
}

export default BookDetailsDrawer