import React, { useEffect } from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Main } from './components/Main'
import { Message } from './components/Message'

export const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='bg-violet-100'>
      <Header />
      <Main/>
      <Message/>
      <Footer/>
    </div>
  )
}
