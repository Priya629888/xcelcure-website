import React from 'react';
import Link from "next/link";
import Image from 'next/image';

import { Label, TextInput, Textarea, Datepicker, Button  } from "flowbite-react";

import partner_with_us_banner from "../../assets/imagesource/partner_with_us_banner.png";
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
import GetEstimateForm from './GetEstimateForm';
import { ToastContainer } from 'react-toastify';

const page = () => {
  return (
    <div>
      <ToastContainer/>
        {/* Banner section start here */}
        <div className='banner_area py-0 lg:p-0'>
            <div className="inner_banner_area relative lg:mx-[30px] mx-4 my-5 lg:my-0">
                <Image src={partner_with_us_banner} alt='partner_with_us_banner' className="" />
                <div className="banner_content_area absolute w-full h-full left-0 top-0">
                    <div className='max-w-6xl mx-auto flex justify-center items-center h-full'>
                        <div className="w-full px-0 pt-0 lg:pt-0">
                            <h1 className="text-[18px] leading-[24px] lg:text-[50px] lg:leading-[60px] text-white font-bold mb-0 lg:mb-0 pl-4 lg:pl-0">Get an  <span className='text-[#FF0016]'>Estimate</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Banner section ends here */}

       {/* CONTACT section start here */}
       <div className="home_about_section my-[40px] lg:my-[70px]">
          <div className="max-w-6xl mx-auto lg:py-4 px-4 lg:px-0">
              <div className="text-center mb-6 lg:mb-12">
                <h2 className="text-[25px] leading-[35px] lg:text-[40px] lg:leading-[50px] pb-4 text-black font-bold">
                  Get <span className="text-[#ff0016]">Estimate </span>   
                </h2>
              </div>
              {/* <div className="lg:flex gap-12">
                  <div className="lg:w-7/12">
                    <div className="flex gap-4 form_area mb-4">
                      <div className="w-6/12">
                        <div className="mb-0 block">
                          <Label htmlFor="base">Name <span>*</span></Label>
                        </div>
                        <TextInput id="base" type="text" sizing="md" placeholder="Enter Name" />
                      </div>
                      <div className="w-6/12">
                        <div className="mb-0 block">
                          <Label htmlFor="base">Email Address <span>*</span></Label>
                        </div>
                        <TextInput id="base" type="email" sizing="md" placeholder="Enter Email" />
                      </div>
                    </div>
                    <div className="flex gap-4 form_area mb-4">
                      <div className="w-6/12">
                        <div className="mb-0 block">
                          <Label htmlFor="base">Phone <span>*</span></Label>
                        </div>
                        <TextInput id="base" type="text" sizing="md" />
                      </div>
                      <div className="w-6/12">
                        <div className="mb-0 block">
                          <Label htmlFor="base">Organization Name <span>*</span></Label>
                        </div>
                        <TextInput id="base" type="text" sizing="md" />
                      </div>
                    </div>
                    <div className="flex gap-4 form_area mb-4">
                      <div className="w-6/12">
                        <div className="mb-0 block">
                          <Label htmlFor="base">Website <span>*</span></Label>
                        </div>
                        <TextInput id="base" type="email" sizing="md" />
                      </div>
                      <div className="w-6/12">
                        <div className="mb-0 block">
                          <Label htmlFor="base">Business <span>*</span></Label>
                        </div>
                        <TextInput id="base" type="text" sizing="md" />
                      </div>
                    </div>
                    <div className="lg:flex gap-4 form_area mb-4">
                      <div className="w-full">
                        <div className="mb-0 block">
                          <Label htmlFor="base">Message <span>*</span></Label>
                        </div>
                        <Textarea id="comment" placeholder="Enter Message" required rows={5} />
                      </div>
                    </div>
                    <div className="form_area">
                      <Button type="submit">Request Estimate</Button>
                    </div>
                  </div>
                  <div className="lg:w-5/12 mt-4 lg:mt-0">
                    <Image src={contact_img} alt='contact_img' />
                  </div>
              </div> */}
              <GetEstimateForm/>
          </div>
       </div>
       {/* CONTACT section ends here */}


    </div>
  )
}

export default page