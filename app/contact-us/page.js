import React from 'react';
import Link from "next/link";
import Image from 'next/image';

import { Label, TextInput, Textarea, Datepicker, Button  } from "flowbite-react";

import contact_banner from "../../assets/imagesource/contact_banner.png";
import social_img from "../../assets/imagesource/social_img.png";
import contact_img from "../../assets/imagesource/contact_img.png";
import captcha_img from "../../assets/imagesource/captcha_img.png";
import why_us_01 from "../../assets/imagesource/why_us_01.png";
import about_02 from "../../assets/imagesource/about_02.png";

import { BiCheck } from "react-icons/bi";

import { GoArrowUpRight } from "react-icons/go";
import { MdMiscellaneousServices } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { BiSolidUniversalAccess } from "react-icons/bi";
import { PiDevicesFill } from "react-icons/pi";
import { BiSolidCustomize } from "react-icons/bi";
import { BiSolidLockAlt } from "react-icons/bi";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { BiSolidUser } from "react-icons/bi";

import { FaMapMarkerAlt } from "react-icons/fa";
import { BiSolidPhone } from "react-icons/bi";
import { BiLogoGmail } from "react-icons/bi";
import ContactUsForm from './ContactUsForm';
import { ToastContainer } from 'react-toastify';

const page = () => {
  return (
    <div>
        {/* Banner section start here */}
        <ToastContainer/>
        <div className='banner_area py-0 lg:p-0'>
            <div className="inner_banner_area relative lg:mx-[30px] mx-4 my-5 lg:my-0">
                <Image src={contact_banner} alt='contact_banner' className="" />
                <div className="banner_content_area absolute w-full h-full left-0 top-0">
                    <div className='max-w-6xl mx-auto flex justify-center items-center h-full'>
                        <div className="w-full px-0 pt-0 lg:pt-0">
                            <h1 className="text-[18px] leading-[24px] lg:text-[50px] lg:leading-[60px] text-white font-bold mb-0 lg:mb-0 pl-4 lg:pl-0">Contact <span className='text-[#FF0016]'>Us</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Banner section ends here */}

        {/* CONTACT section start here */}
        <div className="home_about_section lg:my-[70px] my-[40px]">
            <div className="max-w-6xl mx-auto lg:py-4 px-4 lg:px-0">
                
               
                    <ContactUsForm/>
                    
                  
            </div>
        </div>
        {/* CONTACT section ends here */}

        {/* CONTACT section start here */}
        <div className="home_about_section my-[70px]">
            <div className="max-w-6xl mx-auto lg:py-4 px-4 lg:px-0">
                
                <div className="flex gap-12">
                    <div className="w-full">
                        <div className="mb-6">
                            <h2 className="text-[19px] leading-[25px] lg:text-[40px] lg:leading-[50px] pb-2 lg:pb-4 text-black font-bold">
                               Locate Us  
                            </h2>
                            <p className="text-[#464646] font-medium text-sm lg:text-base lg:pb-0 pb-0 ${helveticaNeue.className}">
                               Module-115, SDF Building, GP Block, Sector V, Bidhannagar, Kolkata, <br></br>West Bengal - 700091
                            </p>
                        </div>
                        <div style={{ width: "100%", height: "450px", }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.278482445476!2d88.42902401115737!3d22.568685479409012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275ad93c8289b%3A0xc099131033eb5917!2sSDF%20Building%2C%20GP%20Block%2C%20Sector%20V%2C%20Bidhannagar%2C%20Kolkata%2C%20West%20Bengal%20700091!5e0!3m2!1sen!2sin!4v1765973937226!5m2!1sen!2sin"
                                width="100%"
                                height="450"
                                style={{ border: 0, }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* CONTACT section ends here */}


    </div>
  )
}

export default page