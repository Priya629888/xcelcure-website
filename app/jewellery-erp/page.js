import React from 'react';
import Link from "next/link";
import Image from 'next/image';

import { Label, TextInput, Textarea, Datepicker, Button  } from "flowbite-react";

import hospital_banner from "../../assets/imagesource/hospital_banner.png";
import Jewelsoft_img from "../../assets/imagesource/Jewelsoft_img.png";
import contact_img from "../../assets/imagesource/contact_img.png";
import captcha_img from "../../assets/imagesource/captcha_img.png";
import laboratory_management from "../../assets/imagesource/laboratory_management.png";

import jewel_01 from "../../assets/imagesource/jewel_01.png";
import jewel_02 from "../../assets/imagesource/jewel_02.png";
import jewel_03 from "../../assets/imagesource/jewel_03.png";
import jewel_04 from "../../assets/imagesource/jewel_04.png";
import jewel_05 from "../../assets/imagesource/jewel_05.png";
import jewel_06 from "../../assets/imagesource/jewel_06.png";
import jewel_07 from "../../assets/imagesource/jewel_07.png";
import jewel_08 from "../../assets/imagesource/jewel_08.png";
import jewel_09 from "../../assets/imagesource/jewel_09.png";
import jewel_10 from "../../assets/imagesource/jewel_10.png";

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
                            <h1 className="text-[18px] leading-[24px] lg:text-[50px] lg:leading-[60px] text-white font-bold mb-0 lg:mb-0 pl-4 lg:pl-0">Jewellery <span className='text-[#FF0016]'>ERP</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Banner section ends here */}


        {/* Key Features start here */}
        <div className='Jewelsoft_wrap'>
            <div className="max-w-6xl mx-auto lg:pt-[80px]">
                <h2 className="text-[19px] leading-[25px] lg:text-[38px] lg:leading-[45px] pb-3 lg:pb-8 text-black font-bold text-center">
                    Jewel <span className="text-[#ff0016]">soft</span>
                </h2>
                <p className="text-[#464646] font-medium text-sm lg:text-base lg:pb-8 pb-5 ${helveticaNeue.className} text-center">
                    Jewellery Management System is well designed modern application to address all difficulties in industries daily complex need on accounts, 
                    taxation, billing, payout, and inventories. Application is ERP based – supports multiple branches, multiple users. Application can be 
                    implemented on premise and in cloud. Centralized database, automated backup, integrated analytics drives your business ahead than others. 
                    Supports all model of Jewelry business – Manufacturing, Wholesale, Retail. We are providing business solution with technical acumen over 
                    last 20 years with trust.</p>
                <div>
                    <Image src={Jewelsoft_img} alt='Jewelsoft_img' className="" />
                </div>
            </div>
        </div>
        {/* Key Features ends here */}


        {/* Laboratory and Imaging section start here */}
        <div className='laboratory_imaging_wrap px-4 lg:px-0'>
            <div className="max-w-6xl mx-auto lg:py-[80px]">
                <div className='mb-5 lg:mb-[80px] lg:flex gap-20'>
                    <div className='lg:w-6/12 mb-4 lg:mb-0'>
                       <Image src={jewel_01} alt='jewel_01' className="" />
                    </div>
                    <div className='lg:w-6/12 flex items-center'>
                        <div>
                            <h3 className='text-[#0F255E] text-[19px] leading-[25px] lg:text-[26px] lg:leading-[34px] font-semibold pb-1 lg:pb-3'>Purchase</h3>
                            <ul className='pl-4'>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Supplier management.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Bullion, Silver, and Astrological Gems, Diamond, Studded Diamond purchase. </li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Old purchase (Metal, Gem).</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Purchase register.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Finished Ornament Purchase.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='mb-5 lg:mb-[80px] lg:flex gap-20'>
                    <div className='lg:w-6/12 flex items-center mb-4 lg:mb-0'>
                        <div>
                            <h3 className='text-[#0F255E] text-[19px] leading-[25px] lg:text-[26px] lg:leading-[34px] font-semibold pb-1 lg:pb-3'>Issue & Receipt, Hallmarking</h3>
                            <ul className='pl-4'>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Bullion, Silver, Gem, Old Gold issue to smith.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Caret conversion calculation and stock reconciliation.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Finished Gold (New ornament) receipt from smith.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Product code creation with option of bar code, HUID, QR Code, image store (Bulk product code generation option available).</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Product hallmarking process.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Ornament issue / sales / transfer in bulk to other branch / customers.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Register for Issue, Receipt, Hallmarking.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='lg:w-6/12'>
                       <Image src={jewel_02} alt='jewel_02' className="" />
                    </div>
                </div>
                <div className='mb-5 lg:mb-[80px] lg:flex gap-20'>
                    <div className='lg:w-6/12 mb-4 lg:mb-0'>
                       <Image src={jewel_03} alt='jewel_03' className="" />
                    </div>
                    <div className='lg:w-6/12 flex items-center'>
                        <div>
                            <h3 className='text-[#0F255E] text-[19px] leading-[25px] lg:text-[26px] lg:leading-[34px] font-semibold pb-1 lg:pb-3'>Order</h3>
                            <ul className='pl-4'>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Order from Customer.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Order processing (Metal issue to smith and receipt of finished ornament). </li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Order management.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Order Register.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='mb-5 lg:mb-[80px] lg:flex gap-20'>
                    <div className='lg:w-6/12 flex items-center mb-4 lg:mb-0'>
                        <div>
                            <h3 className='text-[#0F255E] text-[19px] leading-[25px] lg:text-[26px] lg:leading-[34px] font-semibold pb-1 lg:pb-3'>Sales</h3>
                            <ul className='pl-4'>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Metal, Gem sales to customer with multiple payment option.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Invoicing with Product HUID code, HSN code.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">e-invoicing with QR code generation.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Gem invoice with referral astrologer mapping.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Sales return.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Sales Register</li>
                            </ul>
                        </div>
                    </div>
                    <div className='lg:w-6/12'>
                       <Image src={jewel_04} alt='jewel_04' className="" />
                    </div>
                </div>

            </div>
        </div>
        {/* Laboratory and Imaging section ends here */}

        {/* Laboratory and Imaging section start here */}
        <div className='laboratory_imaging_wrap bg-[#F4F7FF] px-4 lg:px-0'>
            <div className="max-w-6xl mx-auto lg:py-[80px]">
                <div className='mb-5 lg:mb-[80px] lg:flex gap-20'>
                    <div className='lg:w-6/12 mb-4 lg:mb-0'>
                       <Image src={jewel_05} alt='jewel_05' className="" />
                    </div>
                    <div className='lg:w-6/12 flex items-center'>
                        <div>
                            <h3 className='text-[#0F255E] text-[19px] leading-[25px] lg:text-[26px] lg:leading-[34px] font-semibold pb-1 lg:pb-3'>Inventory</h3>
                            <ul className='pl-4'>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">New stock entry, HUID generation, HSN Code and hallmarking.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Stock reconciliation. </li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Stock adjustment.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Stock splitting.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Stock issue, receipt, and transfer.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Stock valuation.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Stock aging.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Stock Movement</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Stock maintenance prediction and suggestion using artificial intelligence (AI).</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Stock demand – supply chain process.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Stock register for Metal, Gem, Diamond.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='mb-5 lg:mb-[80px] lg:flex gap-20'>
                    <div className='lg:w-6/12 flex items-center mb-4 lg:mb-0'>
                        <div>
                            <h3 className='text-[#0F255E] text-[19px] leading-[25px] lg:text-[26px] lg:leading-[34px] font-semibold pb-1 lg:pb-3'>Tax Management</h3>
                            <ul className='pl-4'>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Automated incorporation of latest GST applicable rate for individual HSN product.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">e-Way bill.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Input tax credit register.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">ITC claim option.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Product HSN code wise individual GST calculated register.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Input and Output tax register.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='lg:w-6/12'>
                       <Image src={jewel_06} alt='jewel_06' className="" />
                    </div>
                </div>
                <div className='mb-5 lg:mb-[80px] lg:flex gap-20'>
                    <div className='lg:w-6/12 mb-4 lg:mb-0'>
                       <Image src={jewel_07} alt='jewel_07' className="" />
                    </div>
                    <div className='lg:w-6/12 flex items-center'>
                        <div>
                            <h3 className='text-[#0F255E] text-[19px] leading-[25px] lg:text-[26px] lg:leading-[34px] font-semibold pb-1 lg:pb-3'>Smith Management</h3>
                            <ul className='pl-4'>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Smith management (New Entry, Activate/Deactivate Smith, Smith Closure).</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Automated ledger posting. </li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Smith Register to track issue, receipt, manufacturing loss, balance weight retained/owed.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Smith payout.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        {/* Laboratory and Imaging section ends here */}

        {/* Laboratory and Imaging section start here */}
        <div className='laboratory_imaging_wrap px-4 lg:px-0'>
            <div className="max-w-6xl mx-auto lg:py-[80px]">
                <div className='mb-5 lg:mb-[80px] lg:flex gap-20'>
                    <div className='lg:w-6/12 flex items-center mb-4 lg:mb-0'>
                        <div>
                            <h3 className='text-[#0F255E] text-[19px] leading-[25px] lg:text-[26px] lg:leading-[34px] font-semibold pb-1 lg:pb-3'>Accounting</h3>
                            <ul className='pl-4'>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Automated double-entry bookkeeping.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Automated voucher posting for every financial transaction (Sales, Advance, Refund, Payment, Receipt).</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Group ledger and Subledger creation.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Payment, Receipt, Contra, Journal voucher entry option.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Cash / Bank book.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Books of Ledger – with drill down option up to voucher entry.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Day book.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Trial Balance.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Statement of Profit and Loss.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Balance Sheet.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Cash / Fund Flow.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Financial Reports.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='lg:w-6/12'>
                       <Image src={jewel_08} alt='jewel_08' className="" />
                    </div>
                </div>
                <div className='mb-5 lg:mb-[80px] lg:flex gap-20'>
                    <div className='lg:w-6/12 mb-4 lg:mb-0'>
                       <Image src={jewel_09} alt='jewel_09' className="" />
                    </div>
                    <div className='lg:w-6/12 flex items-center'>
                        <div>
                            <h3 className='text-[#0F255E] text-[19px] leading-[25px] lg:text-[26px] lg:leading-[34px] font-semibold pb-1 lg:pb-3'>Reports</h3>
                            <ul className='pl-4'>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">There are hundreds of reports, graphs, analytics on stock, sales, purchase, finance, taxation, orders, trending, valuation.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Reports are customizable.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Export option to Excel, CSV, PDF.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Dynamic report option.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='mb-5 lg:mb-[80px] lg:flex gap-20'>
                    <div className='lg:w-6/12 flex items-center mb-4 lg:mb-0'>
                        <div>
                            <h3 className='text-[#0F255E] text-[19px] leading-[25px] lg:text-[26px] lg:leading-[34px] font-semibold pb-1 lg:pb-3'>Utilities</h3>
                            <ul className='pl-4'>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Centralized Database.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">On-Premises and Cloud hosting compatibility.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Multi branch compatible.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Controlling multiple branches from single window.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Automated backup.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Automated data export to centralized database.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Analytics of daily sales, daily notes, MIS report, Trending, Sales comparison on web and mobile.</li>
                                <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Easy installation.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='lg:w-6/12'>
                       <Image src={jewel_10} alt='jewel_10' className="" />
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