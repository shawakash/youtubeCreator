import React from 'react'

export const Title: React.FC<{ title: string }> = ({ title }) => {
  return (
    <h1 className='font-semibold font-sans bg-gradient-to-tr text-transparent hover: bg-clip-text from-purple-500 to-blue-500 text-[30px] my-2'>{title}</h1>
  )
}
