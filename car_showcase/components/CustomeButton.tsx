"use client";

import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '@/types';
import { handleClientScriptLoad } from 'next/script';

const CustomeButton = ({ title, containerStyles, handleClick }:  CustomButtonProps) => {
  return (
    <button 
        disabled={false} 
        type={"button"} 
        className={`custom-btn ${containerStyles}`} 
        onClick={handleClick}
    >
        <span className='flex-1'>
            {title}
        </span>
    </button>
  )
}

export default CustomeButton