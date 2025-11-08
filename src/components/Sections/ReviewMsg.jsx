import React from 'react'
import { FaStar } from 'react-icons/fa'
export const ReviewMsg = (props) => {
    return (
        <>
            <div className='w-full rounded-md bg-reviewMsg_bg p-5 border mb-5 border-reviewMsgBorder'>
                <div className='flex items-center justify-between'>
                    <h2>User Name</h2>
                    <div className='flex gap-1'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
                {/* message */}
                <p className='max-w-[800px] mt-5'>
                    {props.message}
                </p>

                <p className='text-end mt-2 text-gray-600 text-sm'>06/11/25</p>
            </div>
        </>
    )
}
