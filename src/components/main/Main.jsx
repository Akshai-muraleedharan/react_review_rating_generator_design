import React from 'react'
import { BookDetail } from '../Sections/BookDetail'
import { ReviewInputBox } from '../Sections/ReviewInputBox'
import ReviewBox from '../Sections/ReviewBox'

export const Main = () => {
    return (
        <>
            <BookDetail />
            <ReviewInputBox />
            <ReviewBox />
        </>
    )
}
