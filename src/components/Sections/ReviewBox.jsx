import React from 'react'
import { ReviewMsg } from './ReviewMsg'

const ReviewBox = () => {

    const messageArr = ["The product quality is consistently outstanding, exceeding my expectations every time.I was completely impressed with their professionalism and customer service", "The website was user-friendly, making it easy to find the perfect item. The checkout process was smooth, and I received my order promptly", "Sarah made the whole process smooth, ensuring I felt comfortable throughout.The customer service was top - notch, and I'll be returning"]

    return (
        <>
            <div className='w-full mt-5 rounded-md bg-box_bg p-5 lg:p-10'>
                <h2 className='text-2xl mb-10 font-semibold'>Reviews</h2>
                <ReviewMsg message={messageArr[0]} />
                <ReviewMsg message={messageArr[1]} />
                <ReviewMsg message={messageArr[2]} />
            </div>
        </>
    )
}

export default ReviewBox