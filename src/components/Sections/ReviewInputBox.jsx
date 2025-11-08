import React from 'react'

export const ReviewInputBox = () => {
    return (
        <form className="flex flex-col w-full mt-10  " >

            <textarea rows={8} className="w-full rounded-md bg-box_bg text-primary_color tracking-widest p-2 text-lg outline-0" placeholder="Enter Review...."></textarea>
            <button className={`block mr-auto py-3 px-6 my-5  w-full md:w-[20%] rounded  bg-button_color cursor-pointer hover:bg-button_hover  text-primary_color font-extrabold text-lg shadow-md`}>
                Submit
            </button>
        </form>
    )
}
