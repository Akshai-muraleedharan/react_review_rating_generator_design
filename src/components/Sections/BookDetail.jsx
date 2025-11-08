import React from 'react'
import image from "../../assets/81665358695085-WhatsApp-Image-2023-02-28-at-3.57.30-PM.jpeg"
export const BookDetail = () => {
    return (
        <div className='bg-box_bg mt-10  rounded-md p-5 flex '>

            <div>
                <div className='flex w-full'>
                    < img className='w-40 md:w-2xs' loading='lazy' src={image} alt="Book image" />
                    <div className='p-1 md:hidden'>
                        <h2 className='text-primary_color font-medium max-sm:text-[14px] lg:text-4xl'>Steve Jobs</h2>
                        <h3 className='lg:text-2xl font-normal max-sm:text-[12px] mt-3'>By : WALTER ISAACSON</h3>
                    </div>
                </div >
                <div className='md:hidden'>
                    <p className='mt-10 font-normal text-sm'>Category : Biography, Autobiography & Biography</p>
                    <p className='mt-2 font-normal text-sm'>Number of pages : 642</p>
                    <p className='mt-2 font-normal text-sm'>Language : Malayalam</p>
                    <p className='text-end font-medium'>₹765.00</p>
                </div>


            </div >





            <div className='w-full p-5 md:flex flex-col hidden justify-between'>
                <div>
                    <h2 className='text-primary_color font-medium lg:text-4xl'>Steve Jobs</h2>
                    <h3 className='lg:text-2xl font-normal mt-5'>By : WALTER ISAACSON</h3>
                    <div className='hidden md:block'>
                        <p className='mt-10 font-normal lg:text-lg'>Category : Biography, Autobiography & Biography</p>
                        <p className='mt-2 font-normal lg:text-lg'>Number of pages : 642</p>
                        <p className='mt-2 font-normal lg:text-lg'>Language : Malayalam</p>
                    </div>
                </div>
                <div>

                    <p className='text-end mt-5 font-medium'>₹765.00</p>
                </div>

            </div>


        </div >
    )
}
