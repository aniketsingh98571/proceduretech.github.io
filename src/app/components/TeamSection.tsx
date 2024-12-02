import React from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import HoverImage from './HoverImage'

const imageData = [
  { img1: '/assets/team-collage1.webp', img2: '/assets/team-collage1c.webp' },
  { img1: '/assets/team-collage2.webp', img2: '/assets/team-collage2c.webp' },
  { img1: '/assets/team-collage3.webp', img2: '/assets/team-collage3c.webp' },
  { img1: '/assets/team-collage4.webp', img2: '/assets/team-collage4c.webp' },
  { img1: '/assets/team-collage5.webp', img2: '/assets/team-collage5c.webp' },
  { img1: '/assets/team-collage6.webp', img2: '/assets/team-collage6c.webp' },
  { img1: '/assets/team-collage7.webp', img2: '/assets/team-collage7c.webp' },
  { img1: '/assets/team-collage8.webp', img2: '/assets/team-collage8c.webp' },
  { img1: '/assets/team-collage9.webp', img2: '/assets/team-collage9c.webp' },
  { img1: '/assets/team-collage10.webp', img2: '/assets/team-collage10c.webp' },
  { img1: '/assets/team-collage11.webp', img2: '/assets/team-collage11c.webp' },
  { img1: '/assets/team-collage12.webp', img2: '/assets/team-collage12c.webp' },
  { img1: '/assets/team-collage13.webp', img2: '/assets/team-collage13c.webp' },
  { img1: '/assets/team-collage14.webp', img2: '/assets/team-collage14c.webp' },
  { img1: '/assets/team-collage15.webp', img2: '/assets/team-collage15c.webp' },
  { img1: '/assets/team-collage16.webp', img2: '/assets/team-collage16c.webp' },
]

const TeamSection = () => {
  return (
    <div className="visible animate-[fadeIn] pb-32 bg-white text-[#212529]">
      <div className="container-padding">
        <h2 className="m-auto pt-28 pb-20 lg:max-w-3xl  text-center">
          We are passionate about producing cutting-edge work
        </h2>
        <div className="flex justify-between mb-5">
          <Link
            className="text-[1.375rem] tracking-[-0.9px] font-semibold animation-easein-slow shift-to-right flex flex-col md:flex-row items-center"
            href="/about/#ourstory"
          >
            Our Story
            <div className="bg-[#f0eff2] p-2 rounded-full shadow-md md:ml-5">
              <ArrowRightIcon className="w-5 h-5 text-red-500" />
            </div>
          </Link>
          <Link
            className="text-[1.375rem] tracking-[-0.9px] font-semibold animation-easein-slow shift-to-right flex flex-col md:flex-row items-center"
            href="/lifeprocedure/cultureprocedure/"
          >
            Culture
            <div className="bg-[#f0eff2] p-2 rounded-full shadow-md md:ml-5">
              <ArrowRightIcon className="w-5 h-5 text-red-500" />
            </div>
          </Link>
          <Link
            className="text-[1.375rem] tracking-[-0.9px] font-semibold animation-easein-slow shift-to-right flex flex-col md:flex-row items-center"
            href="/about/#leadership"
          >
            Leadership
            <div className="bg-[#f0eff2] p-2 rounded-full shadow-md md:ml-5">
              <ArrowRightIcon className="w-5 h-5 text-red-500" />
            </div>
          </Link>
        </div>
        <div className="flex flex-wrap">
          {imageData.map((image, index) => (
            <div key={index} className="hr--block">
              <HoverImage img1={image.img1} img2={image.img2} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TeamSection
