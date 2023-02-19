import React, { useEffect } from 'react'

import { Drawer } from 'antd';
import { useNavigate } from 'react-router-dom';

const BookDetailsDrawer = ({ showDrawer, setShowDrawer, book }) => {
    const onClose = () => {
        setShowDrawer(false);
    };

    const navigate = useNavigate();

    return (
        <>
            <Drawer title="Book Info" open={showDrawer} placement="right" onClose={onClose} >
            <div className={`${book.imgUrl?"flex justify-center":"bg-gray-300 w-full h-[200px] md:h-[250px]"}`} >
                <img src={book.imgUrl} className="object-cover h-[300px]"/>
                </div>
                <div>
                    <p className='text-lg'>{book.title}</p>
                    <div className='text-sm flex'> by <p className='ml-1 text-[#00BBF9]'>{book.author}</p></div>
                    <div className='my-1'>
                        <p className='text-md'><strong>Synapse</strong></p>
                        <p className='text-sm'>{book.description}</p>
                    </div>
                    <p className='text-sm'>Quantity: {book.quantity}</p>
                    <button className='py-1 px-2 mt-2 border w-fit rounded-lg border-gray-700 bg-[#00BBF9]'
                        onClick={() => {
                            navigate("/checkout",{state:{id:book.id,title:book.title, author:book.author, description:book.description, quantity:book.quantity, imgUrl:book.imgUrl}})
                        }}>
                        Check Out
                    </button>
                </div>
            </Drawer>
        </>
    );
}

export default BookDetailsDrawer