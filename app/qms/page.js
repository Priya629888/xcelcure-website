import React from 'react';
import Link from "next/link";
import Image from 'next/image';

import { Label, TextInput, Textarea, Datepicker, Button  } from "flowbite-react";

import hospital_banner from "../../assets/imagesource/hospital_banner.png";
import social_img from "../../assets/imagesource/social_img.png";
import contact_img from "../../assets/imagesource/contact_img.png";
import captcha_img from "../../assets/imagesource/captcha_img.png";
import hospital_01 from "../../assets/imagesource/hospital_01.png";
import qms_img from "../../assets/imagesource/qms_img.png";

import qms_img_01 from "../../assets/imagesource/qms_img_01.png";
import qms_img_02 from "../../assets/imagesource/qms_img_02.png";
import qms_img_03 from "../../assets/imagesource/qms_img_03.png";
import qms_img_04 from "../../assets/imagesource/qms_img_04.png";
import qms_img_05 from "../../assets/imagesource/qms_img_05.png";
import qms_img_06 from "../../assets/imagesource/qms_img_06.png";
import qms_img_07 from "../../assets/imagesource/qms_img_07.png";

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
                <Image src={hospital_banner} alt='hospital_banner' className="" />
                <div className="banner_content_area absolute w-full h-full left-0 top-0">
                    <div className='max-w-6xl mx-auto flex justify-center items-center h-full'>
                        <div className="w-full px-0 pt-0 lg:pt-0">
                            <h1 className="text-[18px] leading-[24px] lg:text-[50px] lg:leading-[60px] text-white font-bold mb-0 lg:mb-0 pl-4 lg:pl-0">Queue Management <span className='text-[#FF0016]'>System (QMS)</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Banner section ends here */}

        {/* wrapper section start here */}
        <div className='wrapper_section mb-10 px-4 lg:px-0'>
            <div className="max-w-6xl mx-auto lg:py-[80px]">
                <div className='lg:flex gap-14 mb-[0]'>
                    <div className='lg:w-6/12 flex items-center mb-8 lg:mb-0'>
                        <div>
                            <h2 className="text-[19px] leading-[25px] lg:text-[38px] lg:leading-[45px] pb-2 lg:pb-4 text-black font-bold">
                               Smooth patient flow. Faster queues. <span className="text-[#ff0016]">Better service.</span>
                            </h2>
                            <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className}">
                               Our Queue Management System (QMS) streamlines how customers or patients move through your service process. 
                               From generating tokens to managing departments, counters, and real-time display screens everything works 
                               seamlessly to deliver a smooth experience.
                            </p>
                            <Link className="inline-flex items-center gap-10 text-black bg-[#ffffff] font-medium text-xs lg:text-base rounded-[35px] px-3 py-1 pr-1 lg:py-1 pl-4 border-2 border-[#f2f2f2] hover:bg-white hover:text-[#1955ef]" href="/#request_a_demo" passHref>
                                Schedule a Demo
                                <div className="bg-[#1955EF] w-[35px] h-[35px] lg:w-[48px] lg:h-[48px] rounded-[100px] flex justify-center items-center">
                                    <GoArrowUpRight className="text-white text-xl" />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='lg:w-6/12'>
                       <Image src={qms_img} alt='qms_img' className="" />
                    </div>
                </div>
            </div>
        </div>
        {/* wrapper section ends here */}

        <div className='lg:w-6/12 mx-auto text-center px-4 lg:px-0 mb-4 lg:mb-0'>
            <h2 className="text-[19px] leading-[25px] lg:text-[38px] lg:leading-[45px] pb-3 lg:pb-6 text-black font-bold">
                How Our <span className="text-[#ff0016]">QMS System</span> Works
            </h2>
            <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className}">
                A quick overview of how our system manages queues from token creation to real-time display.
            </p> 
        </div>

        {/* Laboratory and Imaging section start here */}
            <div className='laboratory_imaging_wrap px-4 lg:px-0'>
                <div className="max-w-6xl mx-auto lg:py-[80px]">
                    <div className='mb-5 lg:mb-[80px] lg:flex gap-20'>
                        <div className='lg:w-6/12 mb-4 lg:mb-0'>
                            <Image src={qms_img_01} alt='qms_img_01' className="" />
                        </div>
                        <div className='lg:w-6/12 flex items-center'>
                            <div>
                                <h3 className='text-[#0F255E] text-[19px] leading-[25px] lg:text-[26px] lg:leading-[34px] font-semibold pb-1 lg:pb-3'>Super Admin Login</h3>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">
                                    The system begins with a secure login for the Super Admin.Using a valid email and password, the admin can access the full backend of the QMS.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='mb-5 lg:mb-[80px] lg:flex gap-20'>
                        <div className='lg:w-6/12 flex items-center mb-4 lg:mb-0'>
                            <div>
                                <h3 className='text-[#0F255E] text-[19px] leading-[25px] lg:text-[26px] lg:leading-[34px] font-semibold pb-1 lg:pb-3'>Super Admin Dashboard</h3>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">
                                    <strong>After logging in, the Super Admin is taken to the dashboard where they can manage:</strong>
                                </p>
                                <ul className='pl-4 pb-2'>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Departments</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Counters</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Users</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Doctor-to-department mappings</li>
                                </ul>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">
                                    This dashboard acts as the control center of the entire queue system.
                                </p>
                            </div>
                        </div>
                        <div className='lg:w-6/12'>
                            <Image src={qms_img_02} alt='qms_img_02' className="" />
                        </div>
                    </div>
                    <div className='mb-5 lg:mb-[80px] lg:flex gap-20'>
                        <div className='lg:w-6/12 mb-4 lg:mb-0'>
                            <Image src={qms_img_03} alt='qms_img_03' className="" />
                        </div>
                        <div className='lg:w-6/12 flex items-center'>
                            <div>
                                <h3 className='text-[#0F255E] text-[19px] leading-[25px] lg:text-[26px] lg:leading-[34px] font-semibold pb-1 lg:pb-3'>Counter Setup</h3>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">
                                    <strong>This module allows configuration of:</strong>
                                </p>
                                <ul className='pl-4 pb-2'>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Departments</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Counters</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Doctors</li>
                                </ul>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">
                                    These mappings define how the queue flow works — ensuring patients are directed to the right doctor or service counter.
                                </p>
                            </div>
                        </div>
                    </div>
                     <div className='mb-5 lg:mb-[80px] lg:flex gap-20'>
                        <div className='lg:w-6/12 flex items-center mb-4 lg:mb-0'>
                            <div>
                                <h3 className='text-[#0F255E] text-[19px] leading-[25px] lg:text-[26px] lg:leading-[34px] font-semibold pb-1 lg:pb-3'>Create Token</h3>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">
                                    <strong>Counter staff can generate queue tokens by:</strong>
                                </p>
                                <ul className='pl-4 pb-2'>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Entering patient details</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Selecting the relevant department</li>
                                </ul>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">
                                  Each token is automatically assigned to the correct queue based on the setup.
                                </p>
                            </div>
                        </div>
                        <div className='lg:w-6/12'>
                            <Image src={qms_img_04} alt='qms_img_04' className="" />
                        </div>
                    </div>

                    <div className='mb-5 lg:mb-[80px] lg:flex gap-20'>
                        <div className='lg:w-6/12 mb-4 lg:mb-0'>
                            <Image src={qms_img_05} alt='qms_img_05' className="" />
                        </div>
                        <div className='lg:w-6/12 flex items-center'>
                            <div>
                                <h3 className='text-[#0F255E] text-[19px] leading-[25px] lg:text-[26px] lg:leading-[34px] font-semibold pb-1 lg:pb-3'>Counter Page</h3>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">
                                    <strong>This page is used by counter staff to monitor and manage tokens in real time. It displays:</strong>
                                </p>
                                <ul className='pl-4 pb-2'>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Tokens currently being served</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Waiting tokens</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">On-hold tokens</li>
                                </ul>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">
                                    Staff can call the next number, put a token on hold, resume it, or close it.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='mb-5 lg:mb-[80px] lg:flex gap-20'>
                        <div className='lg:w-6/12 flex items-center mb-4 lg:mb-0'>
                            <div>
                                <h3 className='text-[#0F255E] text-[19px] leading-[25px] lg:text-[26px] lg:leading-[34px] font-semibold pb-1 lg:pb-3'>Display Screen Setup (Admin View)</h3>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">
                                    <strong>Before opening the public display, the staff selects:</strong>
                                </p>
                                <ul className='pl-4 pb-2'>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Department</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Doctor</li>
                                </ul>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">
                                    This configures the public display screen to show the correct queue.
                                </p>
                            </div>
                        </div>
                        <div className='lg:w-6/12'>
                            <Image src={qms_img_06} alt='qms_img_06' className="" />
                        </div>
                    </div>

                    <div className='mb-5 lg:mb-[80px] lg:flex gap-20'>
                        <div className='lg:w-6/12 mb-4 lg:mb-0'>
                            <Image src={qms_img_07} alt='qms_img_07' className="" />
                        </div>
                        <div className='lg:w-6/12 flex items-center'>
                            <div>
                                <h3 className='text-[#0F255E] text-[19px] leading-[25px] lg:text-[26px] lg:leading-[34px] font-semibold pb-1 lg:pb-3'>Display Screen (Public View)</h3>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">
                                    This is the screen shown in waiting areas.
                                </p>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">
                                    <strong>It displays real-time queue information such as:</strong>
                                </p>
                                <ul className='pl-4 pb-2'>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Current token being served</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Waiting tokens</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">On-hold tokens</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Doctor/department information</li>
                                </ul>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">
                                    Clear, organized visuals help reduce confusion and improve patient experience.
                                </p>
                            </div>
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