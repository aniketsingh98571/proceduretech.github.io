import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import SocialMediaSection from './SocialMediaSection'
import Newsletter from './Newsletter'

const Footer = () => {
  return (
    <footer className="bg-[#4A65D6] text-white">
      <div className="visible animate-[fadeIn] pt-20 pb-36">
        <div className="container-padding">
          <div className="flex flex-wrap lg:flex-nowrap">
            <div className="w-full sm:w-6/12 mt-10 lg:w-3/12 lg:mt-0">
              <h5 className="text-xl mb-12 font-medium leading-[1.2]">
                <Link
                  className="animation-easein-slow shift-to-right"
                  href={'/'}
                >
                  Home
                </Link>
              </h5>
              <h5 className="text-xl mb-12 font-medium leading-[1.2]">
                <Link
                  className="animation-easein-slow shift-to-right"
                  href={'/about'}
                >
                  About
                </Link>
              </h5>
              <h5 className=" mb-12 font-medium leading-[1.2]">
                <Link
                  className="animation-easein-slow shift-to-right"
                  href={'/lifeprocedure'}
                >
                  Life@Procedure
                </Link>
              </h5>
              <ul className="-mt-8 flex flex-col space-y-2 list-none">
                <li>
                  <Link
                    className="animation-easein-slow shift-to-right"
                    href="/lifeprocedure/cultureprocedure/"
                  >
                    Culture@Procedure
                  </Link>
                </li>
                <li>
                  <Link
                    className="animation-easein-slow shift-to-right"
                    href="/lifeprocedure/cultureprocedure/"
                  >
                    Team@Procedure
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-6/12 mt-10 lg:w-3/12 lg:mt-0">
              <h5 className="text-xl mb-12 font-medium leading-[1.2]">
                <Link
                  className="animation-easein-slow shift-to-right"
                  href={'/capabilities'}
                >
                  Capabilities
                </Link>
              </h5>
              <ul className="-mt-8 flex flex-col space-y-2 list-none">
                <li className="text-sm leading-7 text-[#AFAFAF] font-medium pt-5">
                  Think
                </li>
                <li>
                  <Link
                    className="animation-easein-slow shift-to-right"
                    href="/capabilities/digital-ventures/"
                  >
                    Digital Ventures
                  </Link>
                </li>
                <li>
                  <Link
                    className="animation-easein-slow shift-to-right"
                    href="/capabilities/innovation/"
                  >
                    Innovation
                  </Link>
                </li>
                <li>
                  <Link
                    className="animation-easein-slow shift-to-right"
                    href="/capabilities/ux-ui/"
                  >
                    UX & UI
                  </Link>
                </li>
                <li>
                  <Link
                    className="animation-easein-slow shift-to-right"
                    href="/capabilities/dx-modernization/"
                  >
                    DX & Modernization
                  </Link>
                </li>
                <li>
                  <Link
                    className="animation-easein-slow shift-to-right"
                    href="/capabilities/process-consulting/"
                  >
                    Process Consulting
                  </Link>
                </li>
              </ul>
              <ul className="flex flex-col space-y-2 list-none">
                <li className="text-sm leading-7 text-[#AFAFAF] font-medium pt-5">
                  Build
                </li>
                <li>
                  <Link
                    className="animation-easein-slow shift-to-right"
                    href="/capabilities/agile/"
                  >
                    Agile
                  </Link>
                </li>
                <li>
                  <Link
                    className="animation-easein-slow shift-to-right"
                    href="/capabilities/app-development/"
                  >
                    App Development
                  </Link>
                </li>
                <li>
                  <Link
                    className="animation-easein-slow shift-to-right"
                    href="/capabilities/cloud/"
                  >
                    Cloud
                  </Link>
                </li>
                <li>
                  <Link
                    className="animation-easein-slow shift-to-right"
                    href="/capabilities/devops/"
                  >
                    DevOps
                  </Link>
                </li>
                <li>
                  <Link
                    className="animation-easein-slow shift-to-right"
                    href="/capabilities/product-engineering/"
                  >
                    Product Engineering
                  </Link>
                </li>
                <li>
                  <Link
                    className="animation-easein-slow shift-to-right"
                    href="/capabilities/managed-services/"
                  >
                    Managed Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="animation-easein-slow shift-to-right"
                    href="/capabilities/mobile-solutions/"
                  >
                    Mobile Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    className="animation-easein-slow shift-to-right"
                    href="/capabilities/swat-interventions/"
                  >
                    SWAT Interventions
                  </Link>
                </li>
              </ul>
              <ul className="flex flex-col space-y-2 list-none">
                <li className="text-sm leading-7 text-[#AFAFAF] font-medium pt-5">
                  Measure
                </li>
                <li>
                  <Link
                    className="animation-easein-slow shift-to-right"
                    href="/capabilities/security/"
                  >
                    Security
                  </Link>
                </li>
                <li>
                  <Link
                    className="animation-easein-slow shift-to-right"
                    href="/capabilities/performance-governance/"
                  >
                    Performance Governance
                  </Link>
                </li>
                <li>
                  <Link
                    className="animation-easein-slow shift-to-right"
                    href="/capabilities/quality-testing/"
                  >
                    Quality & Testing
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-6/12 mt-10 lg:w-3/12 lg:mt-0 space-y-12">
              <h5 className="text-xl font-medium leading-[1.2] mb-12">
                <Link
                  className="animation-easein-slow shift-to-right"
                  href="/industries/"
                >
                  Industries
                </Link>
              </h5>
              <ul className="!-mt-8 flex flex-col space-y-2 list-none">
                <li>
                  <Link
                    className="animation-easein-slow shift-to-right"
                    href="/industries/banking/"
                  >
                    Banking
                  </Link>
                </li>
                <li>
                  <Link
                    className="animation-easein-slow shift-to-right"
                    href="/industries/edtech/"
                  >
                    EdTech
                  </Link>
                </li>
                <li>
                  <Link
                    className="animation-easein-slow shift-to-right"
                    href="/industries/fintech/"
                  >
                    FinTech
                  </Link>
                </li>
                <li>
                  <Link
                    className="animation-easein-slow shift-to-right"
                    href="/industries/foodtech/"
                  >
                    FoodTech
                  </Link>
                </li>
                <li>
                  <Link
                    className="animation-easein-slow shift-to-right"
                    href="/industries/insurtech/"
                  >
                    InsurTech
                  </Link>
                </li>
                <li>
                  <Link
                    className="animation-easein-slow shift-to-right"
                    href="/industries/case-studies/"
                  >
                    Case Studies
                  </Link>
                </li>
              </ul>
              <h5 className="text-xl font-medium leading-[1.2]">
                <Link
                  className="animation-easein-slow shift-to-right"
                  href="/resources/"
                >
                  Resources
                </Link>
              </h5>
              <h5 className="text-xl font-medium leading-[1.2]">
                <Link
                  className="animation-easein-slow shift-to-right"
                  href="/contact/"
                >
                  Contact Us
                </Link>
              </h5>
              <ul className="-mt-8 flex flex-col list-none">
                <li>
                  <Link
                    className="text-xl animation-easein-slow shift-to-right"
                    href="/privacy-policy/"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-6/12 mt-10 lg:w-3/12 lg:mt-0">
              <SocialMediaSection />
              <Newsletter />
              <h5 className="text-xl mb-12 font-medium leading-[1.2]">
                Visit Us
              </h5>
              <p className="-mt-8 leading-5 font-light text-sm">
                406, Shrishti Square, Above Bata Showroom, LBS Marg, Sonapur,
                Bhandup West, Mumbai, <br /> Maharashtra 400078 <br /> INDIA
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="pb-2.5"></p>
      <section className="visible animate-[fadeIn] py-16 lg:py-24 bg-[#3850B4]">
        <div className="container-padding">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex justify-center w-full lg:justify-start mb-5 lg:mb-0 lg:w-6/12">
              <Image
                width={100}
                height={100}
                className="w-48 lg:w-[18.75rem] align-middle max-w-full"
                src="/assets/procedure-footer-logo.svg"
                alt="Footer logo"
              />
            </div>
            <div className="flex justify-center w-full lg:w-6/12 lg:justify-end">
              <Image
                width={100}
                height={100}
                className="w-[18.75rem] lg:w-[25rem] align-middle max-w-full"
                src="/assets/procedure-footer-tagline.svg"
                alt="Tagline image"
              />
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
