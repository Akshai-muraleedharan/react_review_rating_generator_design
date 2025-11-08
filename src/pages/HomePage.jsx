import React from 'react'
import { Header } from '../components/Ui/Header'
import { Main } from '../components/main/Main'
import { Footer } from '../components/Ui/Footer'


export const HomePage = () => {
    return (
        <div className='bg-page_bg'>
            <Header />
            <div className=' px-5 pb-10 min-h-svh lg:min-h-dvh lg:px-32 xl:px-80'>
                <Main />
            </div>
            <Footer />
        </div>
    )
}
