import React from 'react'

import { Roboto } from 'next/font/google';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';

import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { BiSolidMap } from "react-icons/bi";

import footerLogo from "../../assets/imagesource/footer_logo.png";
import Image from 'next/image';


const roboto = Roboto({
  subsets: ['latin'],
  weight: ['700'], // optional: define font weights
  variable: '--font-roboto', // optional: for CSS variables
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // specify desired weights
  display: 'swap',
});

const Footer = () => {
  return (
    <div className='bg-[#151727]'>
      <div className='footer_top py-10'>
        <div className="max-w-6xl mx-auto lg:py-4 px-4 lg:px-0">
          <div className='lg:flex lg:gap-8'>
            <div className='lg:w-4/12 mb-6 lg:mb-0'>
              <Image src={footerLogo} alt='footerLogo' className='mb-6 w-5/12 lg:w-8/12' />
              <p className='text-[#F9F8F8] text-[14px] leading-[26px]'>Transform your hospital into a more efficient, human-centric, and competitive ecosystem with xcelcuré™. 
                Our intelligent HMS unifies patient data, streamlines processes, and boosts operational and financial performance. 
                Flexible hosting, easy migration, faster TAT, and secure encrypted data make it a future-proof solution.</p>
            </div>
            <div className='w-8/12 lg:flex gap-4'>
               <div className='lg:w-4/12 mb-6 lg:mb-0'>
                  <h3 className='text-[19px] leading-[25px] lg:text-[24px] lg:leading-[30px] pb-3 lg:pb-10 text-white'>XcelCure</h3>
                  <ul>
                     <li><Link className='text-[14px] leading-[28px] text-[#E9E9E9] hover:text-[#0047ff] pb-2 block' href="/about-us" passHref>About Us</Link></li>
                     <li><Link className='text-[14px] leading-[28px] text-[#E9E9E9] hover:text-[#0047ff] pb-2 block' href="/contact-us" passHref>Contact Us</Link></li>
                     <li><Link className='text-[14px] leading-[28px] text-[#E9E9E9] hover:text-[#0047ff] pb-2 block' href="/privacy-policy" passHref>Privacy Policy</Link></li>
                     <li><Link className='text-[14px] leading-[28px] text-[#E9E9E9] hover:text-[#0047ff] pb-2 block' href="/terms" passHref>Terms & Conditions</Link></li>
                  </ul>
               </div>
               <div className='lg:w-4/12 mb-6 lg:mb-0'>
                  <h3 className='text-[19px] leading-[25px] lg:text-[24px] lg:leading-[30px] pb-3 lg:pb-10 text-white'>Products</h3>
                  <ul>
                     <li><Link className='text-[14px] leading-[28px] text-[#E9E9E9] hover:text-[#0047ff] pb-2 block' href="/hospital-management" passHref>Hospital Management System</Link></li>
                     <li><Link className='text-[14px] leading-[28px] text-[#E9E9E9] hover:text-[#0047ff] pb-2 block' href="/lab-management" passHref>Lab Management System</Link></li>
                     <li><Link className='text-[14px] leading-[28px] text-[#E9E9E9] hover:text-[#0047ff] pb-2 block' href="/clinic-management" passHref>Clinic Management System</Link></li>
                     {/* <li><Link className='text-[14px] leading-[28px] text-[#E9E9E9] hover:text-[#0047ff] pb-2 block' href="/" passHref>Pharmacy Management System</Link></li> */}
                  </ul>
               </div>
               <div className='lg:w-4/12 mb-0 lg:mb-0'>
                  <h3 className='text-[19px] leading-[25px] lg:text-[24px] lg:leading-[30px] pb-3 lg:pb-10 text-white'>Contact Us</h3>
                  <div className='flex items-center mb-2'>
                    <div className='mr-2'>
                      <MdEmail className='text-white' />
                    </div>
                    <div>
                      <p className='text-[14px] leading-[28px] text-[#E9E9E9] pb-0 block'>admin@xcelcure.com</p>
                    </div>
                  </div>
                  <div className='flex items-center mb-2'>
                    <div className='mr-2'>
                      <MdEmail className='text-white' />
                    </div>
                    <div>
                      <p className='text-[14px] leading-[28px] text-[#E9E9E9] pb-0 block'>icare@xcelcure.com</p>
                    </div>
                  </div>
                  <div className='flex items-center mb-2'>
                    <div className='mr-2'>
                      <BsTelephoneFill className='text-white' />
                    </div>
                    <div>
                      <p className='text-[14px] leading-[28px] text-[#E9E9E9] pb-0 block'>+91 9836149149</p>
                    </div>
                  </div>
                  <div className='flex items-start mb-0'>
                    <div className='mr-2 pt-2'>
                      <BiSolidMap className='text-white' />
                    </div>
                    <div>
                      <p className='text-[14px] leading-[28px] text-[#E9E9E9] pb-0 block'>Module-115, SDF Building, GP Block, Sector V, Bidhannagar, Kolkata, West Bengal - 700091</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer_bottom pb-3'>
        <div className="pb-2 pt-4 text-center border-t-2 border-[#303035]">
          <p className='text-[15px] font-medium text-[#E2E0E0] ${helveticaNeue.className}'>Copyright © 2025 xcelcure. All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer