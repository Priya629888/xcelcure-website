import React from 'react';
import Link from "next/link";
import Image from 'next/image';

import { Label, TextInput, Textarea, Datepicker, Button  } from "flowbite-react";

import hospital_banner from "../../assets/imagesource/hospital_banner.png";
import social_img from "../../assets/imagesource/social_img.png";
import contact_img from "../../assets/imagesource/contact_img.png";
import captcha_img from "../../assets/imagesource/captcha_img.png";
import laboratory_management from "../../assets/imagesource/laboratory_management.png";

import laboratory_imaging_01 from "../../assets/imagesource/laboratory_imaging_01.png";
import laboratory_imaging_02 from "../../assets/imagesource/laboratory_imaging_02.png";
import laboratory_imaging_03 from "../../assets/imagesource/laboratory_imaging_03.png";
import laboratory_imaging_04 from "../../assets/imagesource/laboratory_imaging_04.png";

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
import KeyFeaturesTab from './KeyFeaturesTab';
import DemoForm from '../DemoForm';

const page = () => {
  return (
    <div>
        {/* Banner section start here */}
        <div className='banner_area py-0 lg:p-0'>
            <div className="inner_banner_area relative lg:mx-[30px] mx-4 my-5 lg:my-0">
                <Image src={hospital_banner} alt='hospital_banner' className="" />
                <div className="banner_content_area absolute w-full h-full left-0 top-0">
                    <div className='max-w-6xl mx-auto flex justify-center items-center h-full'>
                        <div className="w-full px-0 pt-0 lg:pt-0">
                            <h1 className="text-[18px] leading-[24px] lg:text-[50px] lg:leading-[60px] text-white font-bold mb-0 lg:mb-0 pl-4 lg:pl-0">Lab <span className='text-[#FF0016]'>Management</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Banner section ends here */}

        {/* wrapper section start here */}
        <div className='wrapper_section px-4 lg:px-0'>
            <div className="max-w-6xl mx-auto lg:py-[80px]">
                <div className='lg:flex gap-14 mb-[0]'>
                    <div className='lg:w-7/12 flex items-center'>
                        <div>
                            <h2 className="text-[19px] leading-[25px] lg:text-[38px] lg:leading-[45px] pb-3 lg:pb-6 text-black font-bold">
                               Laboratory Management  <span className="text-[#ff0016]">System</span>
                            </h2>
                            <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className}">Diagnosis and treatment protocol mostly dependent on the structured and informative test record produced by laboratory, 
                                A reliable, comprehensive and database agnostic platform is required to process such high-volume data and retain in structured 
                                format for long days without affecting system performance.</p>
                            <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className}">
                                <strong>Xcelcuré </strong>laboratory management system has been engineered taking advantage of modern techniques in software design 
                                that are inherently more configurable and adaptable. Thus, costs are lower and the risk of obsolescence is minimized. 
                                The application covers all laboratory departments - Microbiology, Immunology, Hematology, Clinical chemistry, Histopathology, 
                                Blood Bank. We are offering xcelcuré laboratory management system in shared and on-premises model to digitally transform your 
                                laboratory operations. This lightweight application allows you to effectively manage samples and associated data and implemented 
                                with minimal or no customization. xcelcuré LIMS, automates workflows, integrate instruments, manage samples and associated 
                                information, and generate reports with inbuilt reference value and approval mechanism. It also manages radiology reporting 
                                using integrated PACS with inbuilt DICOM viewer.
                            </p>
                            <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className}">Application optimizes resource allocation with automated communication systems through SMS, email and other communication 
                                channel based on patient test result that send out effective messages for report collection, follow-up tests, upcoming 
                                appointments, outstanding payments, etc.</p>
                        </div>
                    </div>
                    <div className='lg:w-5/12'>
                       <Image src={laboratory_management} alt='laboratory_management' className="" />
                    </div>
                </div>
            </div>
        </div>
        {/* wrapper section ends here */}


        {/* Key Features start here */}
        <div className='key_features_wrap'>
            <div className="max-w-6xl mx-auto lg:py-[80px]">
                <h2 className="text-[19px] leading-[25px] lg:text-[38px] lg:leading-[45px] pb-6 lg:pb-15 text-black font-bold text-center">
                    Key <span className="text-[#ff0016]">Features</span>
                </h2>
                <div>
                    <KeyFeaturesTab />
                </div>
            </div>
        </div>
        {/* Key Features ends here */}


        {/* Laboratory and Imaging section start here */}
        <div className='laboratory_imaging_wrap px-4 lg:px-0'>
            <div className="max-w-6xl mx-auto lg:py-[80px]">
                <h2 className="text-[19px] leading-[25px] lg:text-[38px] lg:leading-[45px] pb-6 lg:pb-15 text-black font-bold text-center">
                    Laboratory and <span className="text-[#ff0016]">Imaging</span>
                </h2>
                <div className='mb-5 lg:mb-[80px] lg:flex gap-20'>
                    <div className='lg:w-6/12 mb-4 lg:mb-0'>
                       <Image src={laboratory_imaging_01} alt='laboratory_imaging_01' className="" />
                    </div>
                    <div className='lg:w-6/12 flex items-center'>
                        <div>
                            <h3 className='text-[#0F255E] text-[19px] leading-[25px] lg:text-[26px] lg:leading-[34px] font-semibold pb-1 lg:pb-3'>Order Booking Entry</h3>
                            <p className="text-[#464646] font-medium text-sm lg:text-base lg:pb-0 pb-0 ${helveticaNeue.className}">
                                The three keys in the healthcare sector are - Technological enablement, Digitization and Automation 
                                This transformation with the Hospital Management System switches traditional hospitals into Smart 
                                Hospitals. Moreover. Smart hospitals have the potential for exponential growth.</p>
                        </div>
                    </div>
                </div>
                <div className='mb-5 lg:mb-[80px] lg:flex gap-20'>
                    <div className='lg:w-6/12 flex items-center mb-4 lg:mb-0'>
                        <div>
                            <h3 className='text-[#0F255E] text-[19px] leading-[25px] lg:text-[26px] lg:leading-[34px] font-semibold pb-1 lg:pb-3'>Order Booking dashboard</h3>
                            <p className="text-[#464646] font-medium text-sm lg:text-base lg:pb-0 pb-0 ${helveticaNeue.className}">
                                The three keys in the healthcare sector are - Technological enablement, Digitization and Automation This transformation 
                                with the Hospital Management System switches traditional hospitals into Smart Hospitals. Moreover. Smart hospitals have 
                                the potential for exponential growth.
                            </p>
                        </div>
                    </div>
                    <div className='lg:w-6/12'>
                       <Image src={laboratory_imaging_02} alt='laboratory_imaging_02' className="" />
                    </div>
                </div>
                <div className='mb-5 lg:mb-[80px] lg:flex gap-20'>
                    <div className='lg:w-6/12 mb-4 lg:mb-0'>
                       <Image src={laboratory_imaging_03} alt='laboratory_imaging_03' className="" />
                    </div>
                    <div className='lg:w-6/12 flex items-center'>
                        <div>
                            <h3 className='text-[#0F255E] text-[19px] leading-[25px] lg:text-[26px] lg:leading-[34px] font-semibold pb-1 lg:pb-3'>Test Value Entry</h3>
                            <p className="text-[#464646] font-medium text-sm lg:text-base lg:pb-0 pb-0 ${helveticaNeue.className}">
                                The three keys in the healthcare sector are - Technological enablement, Digitization and Automation This transformation 
                                with the Hospital Management System switches traditional hospitals into Smart Hospitals. Moreover. Smart hospitals have 
                                the potential for exponential growth.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mb-5 lg:mb-[80px] lg:flex gap-20'>
                    <div className='lg:w-6/12 flex items-center mb-4 lg:mb-0'>
                        <div>
                            <h3 className='text-[#0F255E] text-[19px] leading-[25px] lg:text-[26px] lg:leading-[34px] font-semibold pb-1 lg:pb-3'>Radiology Dicom Image View</h3>
                            <p className="text-[#464646] font-medium text-sm lg:text-base lg:pb-0 pb-0 ${helveticaNeue.className}">
                                The three keys in the healthcare sector are - Technological enablement, Digitization and Automation This transformation 
                                with the Hospital Management System switches traditional hospitals into Smart Hospitals. Moreover. Smart hospitals have 
                                the potential for exponential growth.
                            </p>
                        </div>
                    </div>
                    <div className='lg:w-6/12'>
                       <Image src={laboratory_imaging_04} alt='laboratory_imaging_04' className="" />
                    </div>
                </div>
            </div>
        </div>
        {/* Laboratory and Imaging section ends here */}


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