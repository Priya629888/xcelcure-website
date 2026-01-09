import React from 'react';
import Link from "next/link";
import Image from 'next/image';

import { Label, TextInput, Textarea, Datepicker, Button  } from "flowbite-react";

import hospital_banner from "../../assets/imagesource/hospital_banner.png";
import social_img from "../../assets/imagesource/social_img.png";
import contact_img from "../../assets/imagesource/contact_img.png";
import captcha_img from "../../assets/imagesource/captcha_img.png";
import hospital_01 from "../../assets/imagesource/hospital_01.png";
import inventory from "../../assets/imagesource/inventory.png";

import inventory_01 from "../../assets/imagesource/inventory_01.png";
import inventory_02 from "../../assets/imagesource/inventory_02.png";
import inventory_03 from "../../assets/imagesource/inventory_03.png";
import inventory_04 from "../../assets/imagesource/inventory_04.png";
import inventory_05 from "../../assets/imagesource/inventory_05.png";
import inventory_06 from "../../assets/imagesource/inventory_06.png";
import inventory_07 from "../../assets/imagesource/inventory_07.png";
import inventory_08 from "../../assets/imagesource/inventory_08.png";

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
                            <h1 className="text-[18px] leading-[24px] lg:text-[50px] lg:leading-[60px] text-white font-bold mb-0 lg:mb-0 pl-4 lg:pl-0">Billing and Inventory <span className='text-[#FF0016]'>Management</span></h1>
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
                       <Image src={inventory} alt='inventory' className="" />
                    </div>
                    <div className='lg:w-6/12 flex items-center'>
                        <div>
                            <h2 className="text-[19px] leading-[25px] lg:text-[38px] lg:leading-[45px] pb-4 text-black font-bold">
                               About Our Billing Software and <span className="text-[#ff0016]">Inventory Management</span> System 
                            </h2>
                            <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className}">
                                <strong>ProfitPlus</strong> is a powerful yet easy-to-use billing software and inventory management system designed 
                                for retail shops, FMCG distributors, furniture stores, supermarkets, hardware shops, and small to medium-size businesses.
                            </p>
                            <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className}">With its clean interface, fast billing workflow, 
                                and professional GST-compliant invoices, <strong>ProfitPlus</strong> helps you simplify your 
                                entire business operations—right from sales and purchases to stock tracking, reporting, and customer management.</p>
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

        <div className='lg:w-6/12 mx-auto text-center px-4 lg:px-0 mb-4 lg:mb-0'>
            <h2 className="text-[19px] leading-[25px] lg:text-[38px] lg:leading-[45px] pb-6 text-black font-bold">
                Why ProfitPlus Is the Best Billing Software for <span className="text-[#ff0016]">Retail & SMEs</span>
            </h2>
            <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className}">
                <strong>ProfitPlus</strong> brings you the perfect blend of billing, inventory control, accounting essentials, and GST-ready 
                reporting all in one simple application. Here’s why thousands of businesses trust <strong>ProfitPlus</strong>
            </p> 
        </div>

        {/* Laboratory and Imaging section start here */}
            <div className='laboratory_imaging_wrap px-4 lg:px-0'>
                <div className="max-w-6xl mx-auto lg:py-[80px]">
                    <div className='mb-5 lg:mb-[80px] lg:flex gap-20'>
                        <div className='lg:w-6/12 flex items-center mb-4 lg:mb-0'>
                            <div>
                                <h3 className='text-[#0F255E] text-[19px] leading-[25px] lg:text-[26px] lg:leading-[34px] font-semibold pb-1 lg:pb-3'>Fast & Easy Billing</h3>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">Everything is optimized for quick counter billing, making it perfect for retail stores and distribution businesses.</p>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}"><strong>Generate:</strong></p>
                                <ul className='pl-4'>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Tax Invoices</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Proforma Invoices</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Quotations</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Delivery Notes / Challans</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Purchase Orders</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Bills</li>
                                </ul>
                            </div>
                        </div>
                        <div className='lg:w-6/12'>
                            <Image src={inventory_01} alt='inventory_01' className="" />
                        </div>
                    </div>
                    <div className='mb-5 lg:mb-[80px] lg:flex gap-20'>
                        <div className='lg:w-6/12 mb-4 lg:mb-0'>
                            <Image src={inventory_02} alt='inventory_02' className="" />
                        </div>
                        <div className='lg:w-6/12 flex items-center'>
                            <div>
                                <h3 className='text-[#0F255E] text-[19px] leading-[25px] lg:text-[26px] lg:leading-[34px] font-semibold pb-1 lg:pb-3'>Professional GST Billing & Invoicing</h3>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">ProfitPlus allows you to create clean and compliant GST invoices with automatic tax calculation, HSN codes, unit price, discounts, shipping charge and more.</p>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}"><strong>Key GST Billing Features:</strong></p>
                                <ul className='pl-4'>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Supports IGST, CGST, SGST</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Auto calculation of taxable value & GST</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Crystal Report–based professional invoice printing</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Export options for GSTR-1</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Customer-wise invoice history</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='mb-5 lg:mb-[80px] lg:flex gap-20'>
                        <div className='lg:w-6/12 flex items-center mb-4 lg:mb-0'>
                            <div>
                                <h3 className='text-[#0F255E] text-[19px] leading-[25px] lg:text-[26px] lg:leading-[34px] font-semibold pb-2 lg:pb-3'>Powerful Inventory System & Stock Management</h3>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">ProfitPlus provides a complete inventory control system that helps businesses track stock levels, avoid shortages, and maintain accurate product records.</p>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}"><strong>Inventory Features:</strong></p>
                                <ul className='pl-4 pb-2'>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Real-time stock balance</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Product & category management</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">HSN code support</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Unit of Measurement (UoM)</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Stock valuation</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Import/Export product list</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Low stock alerts</li>
                                </ul>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">
                                    Whether you sell furniture, FMCG goods, electronics, or groceries—ProfitPlus keeps your inventory organized.
                                </p>
                            </div>
                        </div>
                        <div className='lg:w-6/12'>
                            <Image src={inventory_03} alt='inventory_03' className="" />
                        </div>
                    </div>
                     <div className='mb-5 lg:mb-[80px] lg:flex gap-20'>
                        <div className='lg:w-6/12 mb-4 lg:mb-0'>
                            <Image src={inventory_04} alt='inventory_04' className="" />
                        </div>
                        <div className='lg:w-6/12 flex items-center'>
                            <div>
                                <h3 className='text-[#0F255E] text-[19px] leading-[25px] lg:text-[26px] lg:leading-[34px] font-semibold pb-1 lg:pb-3'>Advanced Sales & Purchase Reports</h3>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">Make smarter decisions with detailed business insights.</p>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}"><strong>Sales Reports:</strong></p>
                                <ul className='pl-4 pb-2'>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Customer-wise invoices</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Quotations & proformas</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Product/service sales</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Category performance</li>
                                </ul>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}"><strong>Purchase Reports:</strong></p>
                                <ul className='pl-4 pb-2'>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Vendor list</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Purchase orders</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Bills</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Product returns</li>
                                </ul>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">
                                    These smart reports help you understand your business performance and plan growth effectively.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='mb-5 lg:mb-[80px] lg:flex gap-20'>
                        <div className='lg:w-6/12 flex items-center mb-4 lg:mb-0'>
                            <div>
                                <h3 className='text-[#0F255E] text-[19px] leading-[25px] lg:text-[26px] lg:leading-[34px] font-semibold pb-1 lg:pb-3'>Easy Product & Service Management</h3>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}"><strong>Add and manage all your products with details like:</strong></p>
                                <ul className='pl-4 pb-2'>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">MRP & Selling Price</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">HSN Code</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">GST Rate</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Unit of Measurement (UoM)</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Category</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Description</li>
                                </ul>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">
                                    Perfect for businesses with a large product catalogue.
                                </p>
                            </div>
                        </div>
                        <div className='lg:w-6/12'>
                            <Image src={inventory_05} alt='inventory_05' className="" />
                        </div>
                    </div>

                </div>
            </div>
        {/* Laboratory and Imaging section ends here */}

        {/* Laboratory and Imaging section start here */}
            <div className='inventory_bottom_wrap px-4 lg:px-0'>
                <div className="max-w-6xl mx-auto lg:pt-[80px] pb-[30px] mb-10 lg:mb-[80px]">
                    <div className='mb-5 lg:mb-[80px] lg:flex gap-20'>
                        <div className='lg:w-6/12 mb-4 lg:mb-0'>
                            <Image src={inventory_06} alt='inventory_06' className="" />
                        </div>
                        <div className='lg:w-6/12 flex items-center'>
                            <div>
                                <h3 className='text-[#0F255E] text-[19px] leading-[25px] lg:text-[26px] lg:leading-[34px] font-semibold pb-1 lg:pb-3'>Data Backup & Security</h3>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">Keep your business safe with built-in data backup and restore tools.</p>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}"><strong>Data Backup and Restore Tools:</strong></p>
                                <ul className='pl-4 pb-2'>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Daily backup reminders</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">One-click export</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Local and cloud-supported backup</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Full restore option</li>
                                </ul>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">
                                    Your billing and inventory data stays secure and recoverable.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='mb-5 lg:mb-[80px] lg:flex gap-20'>
                        <div className='lg:w-6/12 flex items-center mb-4 lg:mb-0'>
                            <div>
                                <h3 className='text-[#0F255E] text-[19px] leading-[25px] lg:text-[26px] lg:leading-[34px] font-semibold pb-1 lg:pb-3'>Ideal Retail POS & Billing Solution</h3>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}"><strong>Ideal Retail POS & Billing Solution For:</strong></p>
                                <ul className='pl-4 pb-2'>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Furniture stores</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">FMCG distributors</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Grocery shops</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Supermarkets & mini-marts</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Hardware stores</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Electrical shops</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Garment & textile shops</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Ceramic / marble & sanitary businesses</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Pharma distributors</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Home décor & lifestyle stores</li>
                                </ul>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">
                                    If your business needs fast billing + accurate stock tracking, ProfitPlus is the perfect solution.
                                </p>
                            </div>
                        </div>
                        <div className='lg:w-6/12'>
                            <Image src={inventory_07} alt='inventory_07' className="" />
                        </div>
                    </div>

                    <div className='mb-5 lg:mb-[80px] lg:flex gap-20'>
                        <div className='lg:w-6/12 mb-4 lg:mb-0'>
                            <Image src={inventory_08} alt='inventory_08' className="" />
                        </div>
                        <div className='lg:w-6/12 flex items-center'>
                            <div>
                                <h3 className='text-[#0F255E] text-[19px] leading-[25px] lg:text-[26px] lg:leading-[34px] font-semibold pb-1 lg:pb-3'>Company Settings & Customization</h3>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}"><strong>Easily set up your business profile with:</strong></p>
                                <ul className='pl-4 pb-2'>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Company logo</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Address, GSTIN, PAN</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Service categories</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Currency</li>
                                    <li className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className} list-disc">Contact details</li>
                                </ul>
                                <p className="text-[#464646] font-medium text-sm lg:text-base pb-2 ${helveticaNeue.className}">
                                    If your business needs fast billing + accurate stock tracking, ProfitPlus is the perfect solution.
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