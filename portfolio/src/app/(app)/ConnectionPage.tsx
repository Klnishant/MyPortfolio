'use client'
import React from 'react'
import { FloatingDock } from '@/components/ui/floating-dock'
import { IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTelegram, 
  IconBrandInstagram, 
  IconBrandWhatsapp } from '@tabler/icons-react'

const items = [
  {
    title: "Github",
    icon: <IconBrandGithub className="h-full w-full text-neutral-300" />,
    href: "https://github.com/Klnishant",
  },
  {
    title: "LinkedIn",
    icon: <IconBrandLinkedin className="h-full w-full text-neutral-300" />,
    href: "https://www.linkedin.com/in/nishant-kaushal-7a6ab224a",
  },
  {
    title: "Instagram",
    icon: <IconBrandInstagram className="h-full w-full text-neutral-300" />,
    href: "https://www.instagram.com/kl_nishant",
  },
  {
    title: "Telegram",
    icon: <IconBrandTelegram className="h-full w-full text-neutral-300" />,
    href: "https://t.me/kl_nisahnt",
  },
  {
    title: "Whatsapp",
    icon: <IconBrandWhatsapp className="h-full w-full text-neutral-300" />,
    href: "https://wa.me/9064959128",
  }
]
function ConnectionPage() {
  return (
   <div className='bg-gray-900 text-white p-10'>
     <div className="flex items-center justify-center bg-transparent-[0.5]  w-full">
      <FloatingDock items={items} desktopClassName='' />
    </div>
   </div>
  )
}

export default ConnectionPage