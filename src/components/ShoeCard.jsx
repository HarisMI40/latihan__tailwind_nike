import React from 'react'

const ShoeCard = ({imgURL, changeBigShoeImage, bigShoeImage}) => {
 
 const handleClick = () => {
    if(bigShoeImage !== imgURL.bigShoe){
        changeBigShoeImage(imgURL.bigShoe)
    }
 }
    return (
    <div className={`border-2 rounded-xl
        ${bigShoeImage === imgURL ? "border-coral-red" : "border-transparent"}
        cursor-pointer max-sm:flex-1 sm:w-40 sm:h-40 rounded-xl
    `}
    onClick={handleClick}
    >
        <img
        src={imgURL.thumbnail}
        alt="shoe collection"
        width={127}
        height={103}
        className='object-contain'
        />
    </div>
  )
}

export default ShoeCard