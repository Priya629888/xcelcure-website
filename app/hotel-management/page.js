import React from 'react';
import Link from "next/link";
import Image from 'next/image';

import { Label, TextInput, Textarea, Datepicker, Button  } from "flowbite-react";

import hospital_banner from "../../assets/imagesource/hospital_banner.png";
import social_img from "../../assets/imagesource/social_img.png";
import contact_img from "../../assets/imagesource/contact_img.png";
import captcha_img from "../../assets/imagesource/captcha_img.png";
import hospital_01 from "../../assets/imagesource/hospital_01.png";
import hotel_system from "../../assets/imagesource/hotel_system.png";

import hotel_system_01 from "../../assets/imagesource/hotel_system_01.png";
import hotel_system_02 from "../../assets/imagesource/hotel_system_02.png";
import hotel_system_03 from "../../assets/imagesource/hotel_system_03.png";
import hotel_system_04 from "../../assets/imagesource/hotel_system_04.png";
import hotel_system_05 from "../../assets/imagesource/hotel_system_05.png";
import hotel_system_06 from "../../assets/imagesource/hotel_system_06.png";
import hotel_system_07 from "../../assets/imagesource/hotel_system_07.png";
import hotel_system_08 from "../../assets/imagesource/hotel_system_08.png";

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
                            <h1 className="text-[18px] leading-[24px] lg:text-[50px] lg:leading-[60px] text-white mb-0 lg:mb-0 pl-4 lg:pl-0">Hotel Management <span className='text-[#FF0016]'>System</span></h1>
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
                    <div className='lg:w-6/12 mb-4 lg:mb-0'>
                       <Image src={hotel_system} alt='hotel_system' className="" />
                    </div>
                    <div className='lg:w-6/12 flex items-center'>
                        <div>
                            <h2 className="text-[19px] leading-[25px] lg:text-[38px] lg:leading-[45px] pb-2 lg:pb-4 text-black font-bold">
                               Effortless <span className="text-[#ff0016]">hotel operations.</span> Better guest experiences.
                            </h2>
                            <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className}">
                                Our Hotel Management System is designed to streamline day-to-day hotel operations — from check-ins to room management, 
                                billing, taxes, promotions, staff control, and more. Everything your team needs is organized in one powerful platform.
                            </p>
                            <Link className="inline-flex items-center gap-10 text-black bg-[#ffffff] font-medium text-xs lg:text-base rounded-[35px] px-3 py-1 pr-1 lg:py-1 pl-4 border-2 border-[#f2f2f2] hover:bg-white hover:text-[#1955ef]" href="/#request_a_demo" passHref>
                                Schedule a Demo
                                <div className="bg-[#1955EF] w-[35px] h-[35px] lg:w-[48px] lg:h-[48px] rounded-[100px] flex justify-center items-center">
                                    <GoArrowUpRight className="text-white text-xl" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* wrapper section ends here */}

        <div className='lg:w-6/12 mx-auto text-center px-4 lg:px-0'>
            <h2 className="text-[19px] leading-[25px] lg:text-[38px] lg:leading-[45px] pb-2 lg:pb-6 text-black font-bold">
                How Our <span className="text-[#ff0016]">Hotel Management</span> System Works
            </h2>
            <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className}">
                A clear explanation of how each module from check-in to room management works together to streamline your hotel operations.
            </p> 
        </div>

        {/* Laboratory and Imaging section start here */}
            <div className='laboratory_imaging_wrap px-4 lg:px-0'>
                <div className="max-w-6xl mx-auto lg:py-[80px]">
                    <div className='mb-5 lg:mb-[80px] lg:flex gap-20'>
                        <div className='lg:w-6/12 flex items-center mb-4 lg:mb-0'>
                            <div>
                                <h3 className='text-[#0F255E] text-[19px] leading-[25px] lg:text-[26px] lg:leading-[34px] font-semibold pb-1 lg:pb-3'>Secure Entry Login</h3>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">
                                    Staff log in using a username and password to access the system. Only authorised users can manage hotel operations, ensuring complete data security.
                                </p>
                            </div>
                        </div>
                        <div className='lg:w-6/12'>
                            <Image src={hotel_system_01} alt='hotel_system_01' className="" />
                        </div>
                    </div>
                    <div className='mb-5 lg:mb-[80px] lg:flex gap-20'>
                        <div className='lg:w-6/12 mb-4 lg:mb-0'>
                            <Image src={hotel_system_02} alt='hotel_system_02' className="" />
                        </div>
                        <div className='lg:w-6/12 flex items-center'>
                            <div>
                                <h3 className='text-[#0F255E] text-[19px] leading-[25px] lg:text-[26px] lg:leading-[34px] font-semibold pb-1 lg:pb-3'>Dashboard Overview</h3>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">
                                    <strong>Once logged in, the dashboard gives a quick snapshot of key hotel activities, including:</strong>
                                </p>
                                <ul className='pl-4 pb-2'>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Today’s Check-Ins & Check-Outs</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Occupied Rooms</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Vacant Rooms</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Total Guests</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Revenue Summary</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Quick links to essential modules</li>
                                </ul>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">This helps your team monitor hotel performance in real time.</p>
                            </div>
                        </div>
                    </div>
                    <div className='mb-5 lg:mb-[80px] lg:flex gap-20'>
                        <div className='lg:w-6/12 flex items-center mb-4 lg:mb-0'>
                            <div>
                                <h3 className='text-[#0F255E] text-[19px] leading-[25px] lg:text-[26px] lg:leading-[34px] font-semibold pb-1 lg:pb-3'>Guest Check-In</h3>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}"><strong>Reception can quickly register new guests by capturing:</strong></p>
                                <ul className='pl-4 pb-2'>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Guest details (name, contact, ID proof, etc.)</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Room assignment</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Check-in date & time</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Special requests or notes</li>
                                </ul>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">
                                    This ensures a smooth welcome experience for every guest.
                                </p>
                            </div>
                        </div>
                        <div className='lg:w-6/12'>
                            <Image src={hotel_system_03} alt='hotel_system_03' className="" />
                        </div>
                    </div>
                     <div className='mb-5 lg:mb-[80px] lg:flex gap-20'>
                        <div className='lg:w-6/12 mb-4 lg:mb-0'>
                            <Image src={hotel_system_04} alt='hotel_system_04' className="" />
                        </div>
                        <div className='lg:w-6/12 flex items-center'>
                            <div>
                                <h3 className='text-[#0F255E] text-[19px] leading-[25px] lg:text-[26px] lg:leading-[34px] font-semibold pb-1 lg:pb-3'>Room Details Management</h3>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">
                                    <strong>Easily manage and view all rooms with clear status labels:</strong>
                                </p>
                                <ul className='pl-4 pb-2'>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Vacant</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Occupied</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Cleaning</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Reserved</li>
                                </ul>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">
                                    Staff can also add or edit room information, set pricing, amenities, and occupancy limits.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='mb-5 lg:mb-[80px] lg:flex gap-20'>
                        <div className='lg:w-6/12 flex items-center mb-4 lg:mb-0'>
                            <div>
                                <h3 className='text-[#0F255E] text-[19px] leading-[25px] lg:text-[26px] lg:leading-[34px] font-semibold pb-1 lg:pb-3'>Promotions & Discounts</h3>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}"><strong>Create and manage promotional offers such as:</strong></p>
                                <ul className='pl-4 pb-2'>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Seasonal discounts</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Festival offers</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Special rates for select dates</li>
                                </ul>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">
                                    You can set validity periods and modify or delete promotions anytime.
                                </p>
                            </div>
                        </div>
                        <div className='lg:w-6/12'>
                            <Image src={hotel_system_05} alt='hotel_system_05' className="" />
                        </div>
                    </div>

                </div>
            </div>
        {/* Laboratory and Imaging section ends here */}

        {/* Laboratory and Imaging section start here */}
            <div className='inventory_bottom_wrap px-4 lg:px-0'>
                <div className="max-w-6xl mx-auto lg:pt-[80px] lg:pb-[30px] pb-0 mb-10 lg:mb-[80px]">
                    <div className='mb-5 lg:mb-[80px] lg:flex gap-20'>
                        <div className='lg:w-6/12 mb-4 lg:mb-0'>
                            <Image src={hotel_system_06} alt='hotel_system_06' className="" />
                        </div>
                        <div className='lg:w-6/12 flex items-center'>
                            <div>
                                <h3 className='text-[#0F255E] text-[19px] leading-[25px] lg:text-[26px] lg:leading-[34px] font-semibold pb-1 lg:pb-3'>Corporate Company Management</h3>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">
                                    <strong>Maintain profiles for corporate clients, including:</strong>
                                </p>
                                <ul className='pl-4 pb-2'>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Discounted corporate rates</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Billing details</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">GST and tax preferences</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Payment terms</li>
                                </ul>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">
                                    Ideal for hotels with regular business travellers or corporate tie-ups.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='mb-5 lg:mb-[80px] lg:flex gap-20'>
                        <div className='lg:w-6/12 flex items-center mb-4 lg:mb-0'>
                            <div>
                                <h3 className='text-[#0F255E] text-[19px] leading-[25px] lg:text-[26px] lg:leading-[34px] font-semibold pb-1 lg:pb-3'>Hotel Tax Configuration</h3>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">
                                    <strong>Configure all applicable taxes including:</strong>
                                </p>
                                <ul className='pl-4 pb-2'>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">GST</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Service Tax</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">City Tax</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Custom hotel charges</li>
                                </ul>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">
                                    These tax rules are automatically applied during check-in and checkout billing for accuracy.
                                </p>
                            </div>
                        </div>
                        <div className='lg:w-6/12'>
                            <Image src={hotel_system_07} alt='hotel_system_07' className="" />
                        </div>
                    </div>

                    <div className='mb-5 lg:mb-[80px] lg:flex gap-20'>
                        <div className='lg:w-6/12 mb-4 lg:mb-0'>
                            <Image src={hotel_system_08} alt='hotel_system_08' className="" />
                        </div>
                        <div className='lg:w-6/12 flex items-center'>
                            <div>
                                <h3 className='text-[#0F255E] text-[19px] leading-[25px] lg:text-[26px] lg:leading-[34px] font-semibold pb-1 lg:pb-3'>Staff & Role Settings</h3>
                                <div className='mb-4'>
                                    <h4 className='text-[17px] leading-[25px] font-semibold text-[#031E2D] pb-2'>8.A Staff Management</h4>
                                    <p className='text-[#464646] text-[15px] leading-[20px]'>Add staff, update their details, assign roles, and activate/deactivate accounts.</p>
                                </div>
                                <div className='mb-4'>
                                    <h4 className='text-[17px] leading-[25px] font-semibold text-[#031E2D] pb-2'>8.B Role Management</h4>
                                    <p className='text-[#464646] text-[15px] leading-[20px]'>
                                        Define what each role can access — from dashboards to reports and editing rights.This ensures better control, 
                                        security, and permission-based access for each user.
                                    </p>
                                </div>
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