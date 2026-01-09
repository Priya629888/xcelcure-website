import React from 'react';
import Link from "next/link";
import Image from 'next/image';

import { Label, TextInput, Textarea, Datepicker, Button  } from "flowbite-react";

import hospital_banner from "../../assets/imagesource/hospital_banner.png";
import social_img from "../../assets/imagesource/social_img.png";
import contact_img from "../../assets/imagesource/contact_img.png";
import captcha_img from "../../assets/imagesource/captcha_img.png";
import hospital_01 from "../../assets/imagesource/hospital_01.png";
import Restaurant_about from "../../assets/imagesource/Restaurant_about.png";

import resturent_01 from "../../assets/imagesource/resturent_01.png";
import resturent_02 from "../../assets/imagesource/resturent_02.png";
import resturent_03 from "../../assets/imagesource/resturent_03.png";
import resturent_04 from "../../assets/imagesource/resturent_04.png";
import resturent_05 from "../../assets/imagesource/resturent_05.png";
import resturent_06 from "../../assets/imagesource/resturent_06.png";
import resturent_07 from "../../assets/imagesource/resturent_07.png";
import resturent_08 from "../../assets/imagesource/resturent_08.png";

import res_icon_01 from "../../assets/imagesource/res_icon_01.png";
import res_icon_02 from "../../assets/imagesource/res_icon_02.png";
import res_icon_03 from "../../assets/imagesource/res_icon_03.png";
import res_icon_04 from "../../assets/imagesource/res_icon_04.png";

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
                            <h1 className="text-[18px] leading-[24px] lg:text-[50px] lg:leading-[60px] text-white font-bold mb-0 lg:mb-0 pl-4 lg:pl-0">Restaurant <span className='text-[#FF0016]'>Management</span></h1>
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
                               Smart, Seamless & Efficient <span className="text-[#ff0016]">Dining Experience</span>
                            </h2>
                            <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className}">
                                Our Restaurant Management System is designed to simplify operations for both customers and staff. From table bookings 
                                to takeaway orders, menu browsing, and smart search everything is streamlined through an easy-to-use mobile application.
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
                       <Image src={Restaurant_about} alt='Restaurant_about' className="" />
                    </div>
                </div>
            </div>
        </div>
        {/* wrapper section ends here */}

        <div className='lg:w-6/12 mx-auto text-center px-4 lg:px-0 mb-6 lg:mb-0'>
            <h2 className="text-[19px] leading-[25px] lg:text-[38px] lg:leading-[45px] pb-3 lg:pb-6 text-black font-bold">
                How Our <span className="text-[#ff0016]">Restaurant Management</span> System Works
            </h2>
            <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className}">
                A complete end-to-end system that streamlines table bookings, takeaway orders, and menu browsing with a smooth, user-friendly experience.
            </p> 
        </div>

        {/* Laboratory and Imaging section start here */}
            <div className='laboratory_imaging_wrap px-4 lg:px-0'>
                <div className="max-w-6xl mx-auto lg:py-[80px]">
                    <div className='mb-5 lg:mb-[80px] lg:flex gap-20'>
                        <div className='lg:w-6/12 mb-4 lg:mb-0'>
                            <Image src={resturent_01} alt='resturent_01' className="" />
                        </div>
                        <div className='lg:w-6/12 flex items-center'>
                            <div>
                                <h3 className='text-[#0F255E] text-[19px] leading-[25px] lg:text-[26px] lg:leading-[34px] font-semibold pb-1 lg:pb-3'>Quick App Launch</h3>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">
                                    Users open the restaurant’s mobile app and land on a clean splash screen showing your logo while the system loads in the background.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='mb-5 lg:mb-[80px] lg:flex gap-20'>
                        <div className='lg:w-6/12 flex items-center mb-4 lg:mb-0'>
                            <div>
                                <h3 className='text-[#0F255E] text-[19px] leading-[25px] lg:text-[26px] lg:leading-[34px] font-semibold pb-1 lg:pb-3'>Secure Login</h3>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}"><strong>Customers log in using:</strong></p>
                                <ul className='pl-4 pb-4'>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Mobile Number or Email</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Password</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Tap Login to enter the application</li>
                                </ul>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">Once verified, they are redirected to the main dashboard.</p>
                            </div>
                        </div>
                        <div className='lg:w-6/12'>
                            <Image src={resturent_02} alt='resturent_02' className="" />
                        </div>
                    </div>
                    <div className='mb-5 lg:mb-[80px] lg:flex gap-20'>
                        <div className='lg:w-6/12 mb-4 lg:mb-0'>
                            <Image src={resturent_03} alt='resturent_03' className="" />
                        </div>
                        <div className='lg:w-6/12 flex items-center'>
                            <div>
                                <h3 className='text-[#0F255E] text-[19px] leading-[25px] lg:text-[26px] lg:leading-[34px] font-semibold pb-1 lg:pb-3'>Home Screen Options</h3>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">
                                    After logging in, users are greeted with a simple dashboard where they can choose between two key services 
                                    designed to make their dining experience smooth and convenient.
                                </p>
                                <div className='flex mt-6'>
                                    <div className='w-6/12 gap-10'>
                                        <Image src={res_icon_01} alt='res_icon_01' className="mb-4 w-[60px]" />
                                        <h3 className='text-[20px] leading-[25px] font-semibold text-[#031E2D] pb-2'>Book a Table</h3>
                                        <p className='text-[#464646] text-[15px] leading-[20px]'>Type the name of food (e.g., “Fajjia”).</p>
                                    </div>
                                    <div className='w-6/12'>
                                        <Image src={res_icon_02} alt='res_icon_02' className="mb-4 w-[60px]" />
                                        <h3 className='text-[20px] leading-[25px] font-semibold text-[#031E2D] pb-2'>Takeaway</h3>
                                        <p className='text-[#464646] text-[15px] leading-[20px]'>
                                            Tap the microphone icon and speak the item name. The app will automatically detect and display matching items.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     <div className='mb-5 lg:mb-[80px] lg:flex gap-20'>
                        <div className='lg:w-6/12 flex items-center mb-4 lg:mb-0'>
                            <div>
                                <h3 className='text-[#0F255E] text-[19px] leading-[25px] lg:text-[26px] lg:leading-[34px] font-semibold pb-1 lg:pb-3'>Main Hall – Access to Menu</h3>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">
                                    If the user selects Book a Table or enters the Main Hall, they will get access to the Food Menu.
                                </p>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}"><strong>The menu displays:</strong></p>
                                <ul className='pl-4 pb-2'>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Categories (Starters, Main Course, Drinks, etc.)</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Food items with descriptions and prices</li>
                                </ul>
                            </div>
                        </div>
                        <div className='lg:w-6/12'>
                            <Image src={resturent_04} alt='resturent_04' className="" />
                        </div>
                    </div>

                    <div className='mb-5 lg:mb-[80px] lg:flex gap-20'>
                         <div className='lg:w-6/12 mb-4 lg:mb-0'>
                            <Image src={resturent_05} alt='resturent_05' className="" />
                        </div>
                        <div className='lg:w-6/12 flex items-center'>
                            <div>
                                <h3 className='text-[#0F255E] text-[19px] leading-[25px] lg:text-[26px] lg:leading-[34px] font-semibold pb-1 lg:pb-3'>Adding Items from the Menu</h3>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">
                                    <strong>Once inside the Main Hall or after selecting Book Table, customers can browse the full restaurant menu, which includes:</strong>
                                </p>
                                <ul className='pl-4 pb-2'>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Food Categories</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Item Descriptions</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Portion Options</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Prices</li>
                                </ul>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">
                                    The layout is clean and intuitive, allowing customers to explore dishes easily.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='mb-5 lg:mb-[80px] lg:flex gap-20'>
                        <div className='lg:w-6/12 flex items-center mb-4 lg:mb-0'>
                            <div>
                                <h3 className='text-[#0F255E] text-[19px] leading-[25px] lg:text-[26px] lg:leading-[34px] font-semibold pb-1 lg:pb-3'>Add Items With Portion Selection</h3>
                                
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}"><strong>Before confirming the item, the user can select the portion size:</strong></p>
                                <ul className='pl-4 pb-2'>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Full</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Half</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Quarter</li>
                                </ul>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">
                                    After selecting the portion, the item is added to the cart.
                                </p>
                            </div>
                        </div>
                        <div className='lg:w-6/12'>
                            <Image src={resturent_06} alt='resturent_06' className="" />
                        </div>
                    </div>

                    <div className='mb-5 lg:mb-[80px] lg:flex gap-20'>
                         <div className='lg:w-6/12 mb-4 lg:mb-0'>
                            <Image src={resturent_07} alt='resturent_07' className="" />
                        </div>
                        <div className='lg:w-6/12 flex items-center'>
                            <div>
                                <h3 className='text-[#0F255E] text-[19px] leading-[25px] lg:text-[26px] lg:leading-[34px] font-semibold pb-1 lg:pb-3'>Easy Takeaway Ordering</h3>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">
                                    <strong>The takeaway system works the same as dine-in:</strong>
                                </p>
                                <ul className='pl-4 pb-2'>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Browse the menu</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Choose portion sizes</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Add items to order</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Place the final takeaway request</li>
                                </ul>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">
                                    Everything happens within a few simple taps.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='mb-5 lg:mb-[80px] lg:flex gap-20'>
                        <div className='lg:w-6/12 flex items-center mb-4 lg:mb-0'>
                            <div>
                                <h3 className='text-[#0F255E] text-[19px] leading-[25px] lg:text-[26px] lg:leading-[34px] font-semibold pb-1 lg:pb-3'>Smart Item Search – Voice & Text</h3>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">
                                    On the Item Menu Page, users can easily search for any food item using two convenient methods, 
                                    ensuring they quickly find exactly what they’re looking for.
                                </p>
                                <div className='flex mt-6'>
                                    <div className='w-6/12 gap-10'>
                                        <Image src={res_icon_03} alt='res_icon_03' className="mb-4 w-[60px]" />
                                        <h3 className='text-[20px] leading-[25px] font-semibold text-[#031E2D] pb-2'>Text Search</h3>
                                        <p className='text-[#464646] text-[15px] leading-[20px]'>Type the name of food (e.g., “Fajjia”).</p>
                                    </div>
                                    <div className='w-6/12'>
                                        <Image src={res_icon_04} alt='res_icon_04' className="mb-4 w-[60px]" />
                                        <h3 className='text-[20px] leading-[25px] font-semibold text-[#031E2D] pb-2'>Audio Search</h3>
                                        <p className='text-[#464646] text-[15px] leading-[20px]'>
                                            Tap the microphone icon and speak the item name. The app will automatically detect and display matching items.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='lg:w-6/12'>
                            <Image src={resturent_08} alt='resturent_08' className="" />
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