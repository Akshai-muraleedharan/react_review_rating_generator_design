import React from 'react'

export const Footer = () => {
    const date = new Date()
    return (
        <div className='py-5 px-10 bg-header_bg'>
            <p className='text-center text-primary_color'>©️ {date.getFullYear()} Right reserverd by </p>
        </div>
    )
}
