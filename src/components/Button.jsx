import React from 'react'

const Button = ({label, iconURL}) => {
  return (
    <button className='px-7 py-2 rounded-md flex justify-center items-center gap-2 border border-coral-red font-monsterrat leading-none bg-coral-red text-white text-lg'>
        {label}

        <img 
            src={iconURL}
            alt="arrow righ icon"
            className="ml-2 rounded-full w-5 h-5"
        />
    </button>
  )
}

export default Button