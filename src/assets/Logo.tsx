import React from 'react'
import Image from 'next/image'

interface LogoProps {
  className?: string;
}

const Logo = ({ className = 'size-16 md:size-14 rounded-2xl md:rounded-[0.7rem]' }: LogoProps) => {
  return (
    <div>
      <Image 
        src="/img/icons/logo.jpeg" 
        width={100} 
        height={100} 
        alt="Logo" 
        className={className}
      />
    </div>
  )
}

export default Logo