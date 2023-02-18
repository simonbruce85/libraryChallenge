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
                <div className='bg-gray-300 w-full h-[250px]'>
                </div>
                <div>
                    <p className='text-lg'>{book.title}</p>
                    <p className='text-sm flex'> by <p className='ml-1 text-[#00BBF9]'>{book.author}</p></p>
                    <div className='my-1'>
                        <p className='text-md'><strong>Synapse</strong></p>
                        <p className='text-sm'>{book.description}</p>
                    </div>
                    <p className='text-sm'>Quantity: {book.quantity}</p>
                    <button className='py-1 px-2 mt-2 border w-fit rounded-lg border-gray-700 bg-[#00BBF9]'
                        onClick={() => {
                            navigate("/checkout")
                        }}>
                        Check Out
                    </button>
                </div>
            </Drawer>
        </>
    );
}

export default BookDetailsDrawer