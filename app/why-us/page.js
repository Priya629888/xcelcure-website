import React from 'react';
import Link from "next/link";
import Image from 'next/image';

import { Label, TextInput, Textarea, Datepicker, Button  } from "flowbite-react";

import why_us_banner from "../../assets/imagesource/why_us_banner.png";
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
import DemoForm from '../DemoForm';

const page = () => {
  return (
    <div>
        {/* Banner section start here */}
        <div className='banner_area py-0 lg:p-0'>
            <div className="inner_banner_area relative lg:mx-[30px] mx-4 my-5 lg:my-0">
                <Image src={why_us_banner} alt='why_us_banner' className="" />
                <div className="banner_content_area absolute w-full h-full left-0 top-0">
                    <div className='max-w-6xl mx-auto flex justify-center items-center h-full'>
                        <div className="w-full px-0 pt-0 lg:pt-0">
                            <h1 className="text-[18px] leading-[24px] lg:text-[50px] lg:leading-[60px] text-white font-bold mb-0 lg:mb-0 pl-4 lg:pl-0">Why <span className='text-[#FF0016]'>Us?</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Banner section ends here */}

        {/* wrapper section start here */}
        <div className='wrapper_section'>
            <div className="max-w-6xl mx-auto lg:py-[80px]">
                <div className='flex gap-20 mb-[50px]'>
                    <div className='w-8/12 mx-auto text-center'>
                        <h2 className="text-[19px] leading-[25px] lg:text-[40px] lg:leading-[50px] pb-2 lg:pb-4 text-black font-bold">Why <span className="text-[#ff0016]">xcelcuré™ ?</span></h2>
                        <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className}"><strong>xcelcuré™</strong>empowers hospitals, clinics, 
                        and diagnostic labs with a unified, intelligent platform that simplifies daily operations, enhances patient care, and ensures seamless 
                        coordination across every department.</p>
                    </div>
                </div>
                <div className='lg:flex gap-10 mb-[0] px-4 lg:px-0'>
                    <div className='lg:w-6/12 mb-4 lg:mb-0'>
                       <Image src={why_us_01} alt='why_us_01' className="" />
                    </div>
                    <div className='lg:w-6/12'>
                        <h2 className="text-[19px] leading-[25px] lg:text-[38px] lg:leading-[45px] pb-2 lg:pb-4 text-black font-bold">
                            Powerful hospital management, <span className="text-[#ff0016]">zero complexity</span>
                        </h2>
                        <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className}">
                            Take control of every hospital workflow in one secure, unified platform. From OPD to billing to clinical care. 
                            <strong>xcelcuré™</strong> helps you manage everything, faster and smarter.
                        </p>
                        <div className='mb-4'>
                            <ul>
                                <li className='text-[#464646] text-[16px] leading-[22px] flex items-center gap-2 mb-4'>
                                    <div className='w-[25px] h-[25px] leading-[25px] rounded-full bg-[#f4f7ff] flex justify-center items-center'><BiCheck /></div> Streamlined operations
                                </li>
                                <li className='text-[#464646] text-[16px] leading-[22px] flex items-center gap-2 mb-4'>
                                    <div className='w-[25px] h-[25px] leading-[25px] rounded-full bg-[#f4f7ff] flex justify-center items-center'><BiCheck /></div> Faster patient processing
                                </li>
                                <li className='text-[#464646] text-[16px] leading-[22px] flex items-center gap-2 mb-4'>
                                    <div className='w-[25px] h-[25px] leading-[25px] rounded-full bg-[#f4f7ff] flex justify-center items-center'><BiCheck /></div> Automated workflows
                                </li>
                                <li className='text-[#464646] text-[16px] leading-[22px] flex items-center gap-2 mb-4'>
                                    <div className='w-[25px] h-[25px] leading-[25px] rounded-full bg-[#f4f7ff] flex justify-center items-center'><BiCheck /></div> Real-time insights
                                </li>
                            </ul>
                        </div>
                        <Link className="inline-flex items-center gap-10 text-black bg-[#ffffff] font-medium text-xs lg:text-base rounded-[35px] px-3 py-1 pr-1 lg:py-1 pl-4 border-2 border-[#f2f2f2] hover:bg-white hover:text-[#1955ef]" href="/partner-with-us" passHref>
                            Partner With Us
                            <div className="bg-[#1955EF] w-[35px] h-[35px] lg:w-[48px] lg:h-[48px] rounded-[100px] flex justify-center items-center">
                                <GoArrowUpRight className="text-white text-xl" />
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Service section start here */}
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-3 mt-10 mb-10 lg:mb-0 px-4 lg:px-0'>
                    <div className='border border-[#E0EBFF] bg-white rounded-[15px] p-4'>
                        <h3 className='text-[18px] leading-[22px] pb-3 font-bold text-[#1a3270] flex items-center gap-1'>
                            <MdMiscellaneousServices className='text-[#1A3270] text-2xl' /> SaaS Service
                        </h3>
                        <p className='text-[#666666] text-[15px] leading-[20px] font-medium'>
                            xcelcuré SaaS service model eliminates hardware and software license cost and maintenance.
                        </p>
                    </div>
                    <div className='border border-[#E0EBFF] bg-white rounded-[15px] p-4'>
                        <h3 className='text-[18px] leading-[22px] pb-3 font-bold text-[#1a3270] flex items-center gap-1'>
                            <BiSupport className='text-[#1A3270] text-2xl' /> SLA Support
                        </h3>
                        <p className='text-[#666666] text-[15px] leading-[20px] font-medium'>
                            SLA-based support that ensures smooth operations with fast response times and dependable issue resolution.
                        </p>
                    </div>
                    <div className='border border-[#E0EBFF] bg-white rounded-[15px] p-4'>
                        <h3 className='text-[18px] leading-[22px] pb-3 font-bold text-[#1a3270] flex items-center gap-1'>
                            <BiSolidUniversalAccess className='text-[#1A3270] text-2xl' /> Accessible
                        </h3>
                        <p className='text-[#666666] text-[15px] leading-[20px] font-medium'>
                            Scalable without any downtime and accessible from anywhere on any compatible device.
                        </p>
                    </div>
                    <div className='border border-[#E0EBFF] bg-white rounded-[15px] p-4'>
                        <h3 className='text-[18px] leading-[22px] pb-3 font-bold text-[#1a3270] flex items-center gap-1'>
                            <PiDevicesFill className='text-[#1A3270] text-2xl' /> Compatible Devices
                        </h3>
                        <p className='text-[#666666] text-[15px] leading-[20px] font-medium'>Compatible to most of the devices - lab, biometric over network or REST.</p>
                    </div>
                    <div className='border border-[#E0EBFF] bg-white rounded-[15px] p-4'>
                        <h3 className='text-[18px] leading-[22px] pb-3 font-bold text-[#1a3270] flex items-center gap-1'>
                            <BiSolidCustomize className='text-[#1A3270] text-2xl' /> Customization
                        </h3>
                        <p className='text-[#666666] text-[15px] leading-[20px] font-medium'>
                            Round the clock available support and service. Process flow, reports customisation.
                        </p>
                    </div>
                    <div className='border border-[#E0EBFF] bg-white rounded-[15px] p-4'>
                        <h3 className='text-[18px] leading-[22px] pb-3 font-bold text-[#1a3270] flex items-center gap-1'>
                            <BiSolidLockAlt className='text-[#1A3270] text-2xl' /> Privacy
                        </h3>
                        <p className='text-[#666666] text-[15px] leading-[20px] font-medium'>
                            Transaction over TLS, encrypted database will secure data privacy.
                        </p>
                    </div>
                    <div className='border border-[#E0EBFF] bg-white rounded-[15px] p-4'>
                        <h3 className='text-[18px] leading-[22px] pb-3 font-bold text-[#1a3270] flex items-center gap-1'>
                            <BiSolidBuildingHouse className='text-[#1A3270] text-2xl' /> High Adoptability
                        </h3>
                        <p className='text-[#666666] text-[15px] leading-[20px] font-medium'>
                            High Adoptability - powerful, effective and broadly accessible, can be integrated into every level of an organization.
                        </p>
                    </div>
                    <div className='border border-[#E0EBFF] bg-white rounded-[15px] p-4'>
                        <h3 className='text-[18px] leading-[22px] pb-3 font-bold text-[#1a3270] flex items-center gap-1'>
                            <BiSolidUser className='text-[#1A3270] text-2xl' /> Employee Training
                        </h3>
                        <p className='text-[#666666] text-[15px] leading-[20px] font-medium'>
                            Smooth and quick transition from legacy system. Provides extensive training to employees to adapt with the system.
                        </p>
                    </div>
                </div>
                {/* Service section ends here */}
            </div>
        </div>
        {/* wrapper section ends here */}

        {/* Healthcare section start here */}
        <div className="healthcare_section py-7 lg:py-15">
            <div className="max-w-6xl mx-auto lg:py-4 px-4 lg:px-0">
                <div className="flex gap-12">
                    <div className="w-6/12 flex items-center">
                        <div>
                            <h2 className="text-[20px] leading-[28px] lg:text-[40px] lg:leading-[50px] pb-3 lg:pb-6 text-white font-bold">
                            Experience <span className="text-[#ff0016]"> Healthcare</span> Intelligent Management
                            </h2>
                            <p className="text-[#ffffff] font-medium text-sm lg:text-base lg:pb-8 pb-5 ${helveticaNeue.className}">
                            Start your journey with xcelcuré™ and upgrade your hospital, clinic, or laboratory to a smarter, unified digital ecosystem.
                            </p>
                            <div className="flex gap-5">
                            <Link className="inline-flex items-center gap-6 lg:gap-10 mt-2 text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] px-3 py-1 pr-1 lg:py-1 pl-4 border-2 border-[#ffffff] hover:bg-[#000000] hover:text-[#ffffff]" href="/" passHref>
                                Schedule a Demo
                                <div className="bg-[#1955EF] w-[53px] lg:w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                                <GoArrowUpRight className="text-white text-xl" />
                                </div>
                            </Link>
                            <Link className="inline-flex items-center gap-6 lg:gap-10 mt-2 text-white bg-[#00B149] font-medium text-xs lg:text-sm rounded-[35px] px-3 py-1 pr-1 lg:py-1 pl-4 border-2 border-[#00B149] hover:bg-[#000000] hover:text-[#ffffff]" href="/" passHref>
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