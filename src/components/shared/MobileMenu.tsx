"use client";
import { AlignLeft } from 'lucide-react'
import React, { useState } from 'react'
import Sidebar from './Sidebar';

const MobileMenu = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <>
    <button onClick={()=>setIsSidebarOpen(!isSidebarOpen)} className='hover:text-darkColor hoverEffect md:hidden cursor-pointer'>
        <AlignLeft/>
    </button>
    <div className='md:hidden'>
        <Sidebar isOpen={isSidebarOpen} onClose={()=>setIsSidebarOpen(false)}/>
    </div>
    </>
  )
}

export default MobileMenu;