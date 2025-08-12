import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CardIcons = () => {
  return (
    <div>
        <Link href={"/cart"} className='group relative'>
            <ShoppingBag size={20} className='group-hover:text-darkRed hoverEffect cursor-pointer'/>
            <span className='absolute -top-1 -right-1 bg-darkColor text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex justify-center items-center'>0</span>
        </Link>
    </div>
  )
}

export default CardIcons