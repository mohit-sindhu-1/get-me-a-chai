import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='bg-slate-900 text-white px-4 h-12 flex items-center justify-center'>
      <p className='md:text-base text-xs'>Copyright &copy; {currentYear} Get me a Chai - All rights reserved!</p>
    </footer>
  )
}

export default Footer