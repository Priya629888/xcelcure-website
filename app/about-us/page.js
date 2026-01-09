import React from 'react';
import Link from "next/link";
import Image from 'next/image';

import { Label, TextInput, Textarea, Datepicker, Button  } from "flowbite-react";

import about_banner from "../../assets/imagesource/about_banner.png";
import social_img from "../../assets/imagesource/social_img.png";
import contact_img from "../../assets/imagesource/contact_img.png";
import captcha_img from "../../assets/imagesource/captcha_img.png";
import about_01 from "../../assets/imagesource/about_01.png";
import about_02 from "../../assets/imagesource/about_02.png";

import { GoArrowUpRight } from "react-icons/go";
import DemoForm from '../DemoForm';

const page = () => {
  return (
    <div>
        {/* Banner section start here */}
        <div className='banner_area py-0 lg:p-0'>
            <div className="inner_banner_area relative lg:mx-[30px] mx-4 my-5 lg:my-0">
                <Image src={about_banner} alt='about_banner' className="" />
                <div className="banner_content_area absolute w-full h-full left-0 top-0">
                    <div className='max-w-6xl mx-auto flex justify-center items-center h-full'>
                        <div className="w-full px-0 pt-0 lg:pt-0">
                            <h1 className="text-[18px] leading-[24px] lg:text-[50px] lg:leading-[60px] text-white font-bold mb-0 lg:mb-0 pl-4 lg:pl-0">About <span className='text-[#FF0016]'>Us</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Banner section ends here */}

        {/* wrapper section start here */}
        <div className='wrapper_section'>
            <div className="max-w-6xl mx-auto lg:py-[80px] px-4 lg:px-0">
                <div className='lg:flex gap-20 mb-10 lg:mb-[80px]'>
                    <div className='lg:w-6/12'>
                        <span className="text-[#1955EF] text-[15px] lg:text-[18px] leading-[24px] uppercase pb-1 lg:pb-4 block font-medium">OUR JOURNEY</span>
                        <h2 className="text-[19px] leading-[25px] lg:text-[40px] lg:leading-[50px] pb-4 text-black font-bold">Unified <span className="text-[#ff0016]">Digital Solutions</span> for Hospitals, Clinics, and Laboratories</h2>
                        <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className}"><strong>xcelcuré™</strong>is an ICD-11–compatible, 
                        finance-integrated HMS with EMR/EHR and modules like OPD, IPD, inventory, nursing, and more. 
                        It includes a location-based mobile app for doctors, nurses, and citizens—helping providers deliver better care and allowing users 
                        to store records, consult doctors, and find nearby medical facilities on Android and iOS.</p>
                        <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className}">
                            The platform also features a healthcare marketplace where facilities can list their services and citizens can discover and access support.
                        </p>
                        <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className}">
                            As a SaaS solution, <strong>xcelcuré™</strong> runs on leading cloud providers and is accessible anywhere with internet access, 
                            with an on-premises option offering limited mobile sync.
                        </p>
                        <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className}">
                            <strong>xcelcuré™</strong> is fully integrated with the Ayushman Bharat Digital Mission (ABDM), supporting ABHA creation, health record discovery, 
                            linking, viewing, and consent management.
                        </p>
                        <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className}">
                            It enhances healthcare delivery, reduces staff workload, and improves patient outcomes through modern, efficient technology.
                        </p>
                    </div>
                    <div className='lg:w-6/12'>
                       <Image src={about_01} alt='about_01' className="" />
                    </div>
                </div>
                <div className='lg:flex gap-20 mb-[20px] lg:mb-0'>
                    <div className='lg:w-6/12 mb-4 lg:mb-0'>
                       <Image src={about_02} alt='about_02' className="" />
                    </div>
                    <div className='lg:w-6/12'>
                        <span className="text-[#1955EF] text-[#1955EF] text-[15px] lg:text-[18px] uppercase lg:pb-4 block font-medium">WE’RE DIFFERENT</span>
                        <h2 className="text-[19px] leading-[25px] lg:text-[40px] lg:leading-[50px] pb-2 lg:pb-4 text-black font-bold">
                            Welcome to <span className="text-[#ff0016]">xcelcuré™</span> Technologies
                        </h2>
                        <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-8 pb-5 ${helveticaNeue.className}">
                            Our product <strong>&quot;xcelcuré™&quot;</strong> - is a modern hospital management system integrated with mobile app. 
                            Its structure based on the three keys in the healthcare sector - Technological enablement, Digitization and Automation. 
                            Digital transformation with this Hospital Management System switches traditional hospitals into Smart Hospitals. Moreover. 
                            Smart hospitals have the potential for exponential growth.
                        </p>
                        <div className='lg:pb-8 pb-5'>
                            <h3 className='text-[#000000] text-[19px] leading-[25px] lg:text-[25px] lg:leading-[30px] pb-3 font-bold'>Our Vision</h3>
                            <p className="text-[#69697B] font-medium text-sm lg:text-base ${helveticaNeue.className}">Founded in 2022 by a team of energetic developers, xcelcuré Technologies has come through amazing interactions with 
                                various clinical staffs from ward boy to eminent doctors and mentors from its beginnings in Kolkata, India. We are 
                                now ready to serve customers all over world, and are thrilled that we&apos;re able to turn our passion into our product.</p>
                        </div>
                        <div className='lg:pb-7 pb-5'>
                            <h3 className='text-[#000000] text-[19px] leading-[25px] lg:text-[25px] lg:leading-[30px] pb-3 font-bold'>Our Commitment</h3>
                            <p className="text-[#69697B] font-medium text-sm lg:text-base ${helveticaNeue.className}">
                                We hope you enjoy xcelcuré™ - a complete hospital management system as much as we enjoy offering them to you. 
                                If you have any questions or comments, please do not hesitate to contact us at icare@xcelcure.com.
                            </p>
                        </div>
                        <p><strong>Sincerely, <span className="text-[#ff0016] block">Team xcelcuré™</span></strong></p>
                    </div>
                </div>
            </div>
        </div>
        {/* wrapper section ends here */}

        {/* Healthcare section start here */}
        <div className="healthcare_section py-15">
          <div className="max-w-6xl mx-auto lg:py-4 px-4 lg:px-0">
              <div className="flex gap-12">
                  <div className="w-6/12 flex items-center">
                     <div>
                        <h2 className="text-[25px] leading-[35px] lg:text-[40px] lg:leading-[50px] pb-6 text-white font-bold">
                          Experience <span className="text-[#ff0016]"> Healthcare</span> Intelligent Management
                        </h2>
                        <p className="text-[#ffffff] font-medium text-sm lg:text-base lg:pb-8 pb-5 ${helveticaNeue.className}">
                          Start your journey with xcelcuré™ and upgrade your hospital, clinic, or laboratory to a smarter, unified digital ecosystem.
                        </p>
                        <div className="flex lg:gap-5 gap-3">
                          <Link className="inline-flex items-center gap-6 lg:gap-10 mt-2 text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] px-3 py-2 pr-1 lg:py-1 pl-4 border-2 border-[#ffffff] hover:bg-[#000000] hover:text-[#ffffff]" href="/#request_a_demo" passHref>
                            Schedule a Demo
                            <div className="bg-[#1955EF] w-[53px] lg:w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                              <GoArrowUpRight className="text-white text-xl" />
                            </div>
                          </Link>
                          <Link className="inline-flex items-center gap-6 lg:gap-10 mt-2 text-white bg-[#00B149] font-medium text-xs lg:text-sm rounded-[35px] px-3 py-2 pr-1 lg:py-1 pl-4 border-2 border-[#00B149] hover:bg-[#000000] hover:text-[#ffffff]" href="/get-estimate" passHref>
                            Get an Estimate
                            <div className="bg-[#ffffff] w-[53px] lg:w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                              <GoArrowUpRight className="text-black text-xl" />
                            </div>
                          </Link>
                        </div>
                     </div>
                  </div>
              </div>
          </div>
       </div>
        {/* Healthcare section ends here */}

        {/* CONTACT section start here */}
            <div className="home_about_section my-[40px] lg:my-[70px]">
                <div className="max-w-6xl mx-auto lg:py-4 px-4 lg:px-0">
                    <div className="text-center mb-6 lg:mb-12">
                    <span className="text-[#1955EF] text-[15px] lg:text-[18px] leading-[24px] uppercase lg:pb-4 block font-medium">CONTACT US</span>
                    <h2 className="text-[19px] leading-[25px] lg:text-[40px] lg:leading-[50px] pb-4 text-black font-bold">
                        Request a <span className="text-[#ff0016]">Demo</span>   
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
                                <Label htmlFor="base">Job Level <span>*</span></Label>
                            </div>
                            <TextInput id="base" type="text" sizing="md" />
                            </div>
                            <div className="w-6/12">
                            <div className="mb-0 block">
                                <Label htmlFor="base">Country <span>*</span></Label>
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
                            <div className="lg:w-6/12">
                            <div className="mb-0 block">
                                <Label htmlFor="base">Message <span>*</span></Label>
                            </div>
                            <Textarea id="comment" placeholder="Enter Message" required rows={5} />
                            </div>
                            <div className="lg:w-6/12">
                            <div className="mb-0 block">
                                <Label htmlFor="base">Date <span>*</span></Label>
                            </div>
                            <Datepicker />
                            <div className="mt-2">
                                <Image src={captcha_img} alt='captcha_img' className="w-9/12" />
                            </div>
                            </div>
                        </div>
                        <div className="form_area">
                            <Button type="submit">Request a Demo</Button>
                        </div>
                        </div>
                        <div className="lg:w-5/12 mt-4 lg:mt-0">
                        <Image src={contact_img} alt='contact_img' />
                        </div>
                    </div> */}
                    <DemoForm/>
                </div>
            </div>
        {/* CONTACT section ends here */}
    </div>
  )
}

export default page