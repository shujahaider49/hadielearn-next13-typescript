import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import Image from 'next/image'
import { sidebarLink } from './navbar'
import { Separator } from './ui/separator'
import Link from 'next/link'
  

const MobileSidebar = () => {
  return (
    <div>
      <Sheet>
  <SheetTrigger>
  <Menu size={30} className="text-[#2c234d] ml-7 active:-rotate-12" />
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>
        <Image 
        src="/asset/mob-logo.svg" 
        alt='logo' 
        height={200} 
        width={200}
        className='mt-8 mb-14 w-full h-full'
        />
        </SheetTitle>
      <SheetDescription>
        <div>
            {sidebarLink.map((link, index) => (
                <div key={link.label} className='flex justify-start text-start mt-5'>
                    <h1 className='text-white/100'>
                       <Link href={link.links}>{link.label}</Link>
                        {index < sidebarLink.length - 1 && <Separator className='text-start' />}
                      
                    </h1>
                </div>
            ))}
        </div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

    </div>
  )
}

export default MobileSidebar
