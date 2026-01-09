'use client';

import React from 'react'
import Slider from "react-slick";
import Image from 'next/image';
import { GoArrowUpRight } from "react-icons/go";
import { MdOutlineLocalHospital } from "react-icons/md";
import { BiClinic } from "react-icons/bi";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';

const ProductsSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false,
            }
        }
    ]
  };

  return (
    <div className="w-full">
        <Slider {...settings}>

            <div className='px-2 py-2'>
                <div className="bg-white border border-[#DAD9D9] rounded-xl p-6 text-left h-full">
                    <div className="w-[50px] h-[50px] bg-[#DCEBFF] rounded-[10px] flex justify-center items-center">
                       <MdOutlineLocalHospital className="text-[#1955EF] text-2xl" />
                    </div>
                    <h3 className="font-semibold text-black mt-5 text-[18px]">Hospital Management</h3>
                    <p className="text-[15px] text-[#464646] mt-3 min-h-[100px]">
                    <strong>xcelcure</strong> is a patient-centric Hospital Management System suitable for small nursing homes to multispecialty hospitals located in different geo-location.
                    </p>
                    <Link className="inline-flex mt-3 items-center gap-10 text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] px-3 py-1 pr-1 lg:py-1 pl-4 border-2 border-[#f2f2f2] hover:bg-white hover:text-[#1955ef]" href="/hospital-management" passHref>
                        Read More
                        <div className="bg-[#1955EF] w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                            <GoArrowUpRight className="text-white text-xl" />
                        </div>
                    </Link>
                </div>
            </div>

            <div className='px-2 py-2'>
                <div className="bg-white border border-[#DAD9D9] rounded-xl p-6 text-left h-full">
                    <div className="w-[50px] h-[50px] bg-[#FFE5DC] rounded-[10px] flex justify-center items-center">
                    <BiClinic className="text-[#EF6419] text-2xl" />
                    </div>
                    <h3 className="font-semibold text-black mt-5 text-[18px]">Clinic Management</h3>
                    <p className="text-[15px] text-[#464646] mt-3 min-h-[100px]">
                    <strong>Xcelcuré's</strong> Clinic Management System is a powerful, fully independent, and self-sufficient web-based solution that runs seamlessly on both cloud and on-premise environments.
                    </p>
                    <Link className="inline-flex mt-3 items-center gap-10 text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] px-3 py-1 pr-1 lg:py-1 pl-4 border-2 border-[#f2f2f2] hover:bg-white hover:text-[#1955ef]" href="/clinic-management" passHref>
                    Read More
                    <div className="bg-[#1955EF] w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                        <GoArrowUpRight className="text-white text-xl" />
                    </div>
                    </Link>
                </div>
            </div>

            <div className='px-2 py-2'>
                <div className="bg-white border border-[#DAD9D9] rounded-xl p-6 text-left h-full">
                    <div className="w-[50px] h-[50px] bg-[#EFFFDC] rounded-[10px] flex justify-center items-center">
                    <BiClinic className="text-[#2A5C0B] text-2xl" />
                    </div>
                    <h3 className="font-semibold text-black mt-5 text-[18px]">Lab Management</h3>
                    <p className="text-[15px] text-[#464646] mt-3 min-h-[100px]">
                    <strong>Xcelcuré</strong> laboratory management system is built with modern, highly configurable software, reducing costs and minimizing obsolescence.
                    </p>
                    <Link className="inline-flex mt-3 items-center gap-10 text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] px-3 py-1 pr-1 lg:py-1 pl-4 border-2 border-[#f2f2f2] hover:bg-white hover:text-[#1955ef]" href="/lab-management" passHref>
                    Read More
                    <div className="bg-[#1955EF] w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                        <GoArrowUpRight className="text-white text-xl" />
                    </div>
                    </Link>
                </div>
            </div>

            <div className='px-2 py-2'>
                <div className="bg-white border border-[#DAD9D9] rounded-xl p-6 text-left h-full">
                    <div className="w-[50px] h-[50px] bg-[#DCEBFF] rounded-[10px] flex justify-center items-center">
                    <MdOutlineLocalHospital className="text-[#1955EF] text-2xl" />
                    </div>
                    <h3 className="font-semibold text-black mt-5 text-[18px]">Hotel Management</h3>
                    <p className="text-[15px] text-[#464646] mt-3 min-h-[100px]">
                    Comprehensive hotel management solution for seamless operations, bookings, and guest services management.
                    </p>
                    <Link className="inline-flex mt-3 items-center gap-10 text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] px-3 py-1 pr-1 lg:py-1 pl-4 border-2 border-[#f2f2f2] hover:bg-white hover:text-[#1955ef]" href="/hotel-management" passHref>
                    Read More
                    <div className="bg-[#1955EF] w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                        <GoArrowUpRight className="text-white text-xl" />
                    </div>
                    </Link>
                </div>
            </div>

            <div className='px-2 py-2'>
                <div className="bg-white border border-[#DAD9D9] rounded-xl p-6 text-left h-full">
                    <div className="w-[50px] h-[50px] bg-[#FFE5DC] rounded-[10px] flex justify-center items-center">
                    <BiClinic className="text-[#EF6419] text-2xl" />
                    </div>
                    <h3 className="font-semibold text-black mt-5 text-[18px]">Restaurant Management</h3>
                    <p className="text-[15px] text-[#464646] mt-3 min-h-[100px]">
                    Complete restaurant management system for handling orders, inventory, and customer service efficiently.
                    </p>
                    <Link className="inline-flex mt-3 items-center gap-10 text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] px-3 py-1 pr-1 lg:py-1 pl-4 border-2 border-[#f2f2f2] hover:bg-white hover:text-[#1955ef]" href="/restaurant-management" passHref>
                    Read More
                    <div className="bg-[#1955EF] w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                        <GoArrowUpRight className="text-white text-xl" />
                    </div>
                    </Link>
                </div>
            </div>

            <div className='px-2 py-2'>
                <div className="bg-white border border-[#DAD9D9] rounded-xl p-6 text-left h-full">
                    <div className="w-[50px] h-[50px] bg-[#EFFFDC] rounded-[10px] flex justify-center items-center">
                    <BiClinic className="text-[#2A5C0B] text-2xl" />
                    </div>
                    <h3 className="font-semibold text-black mt-5 text-[18px]">Jewellery ERP</h3>
                    <p className="text-[15px] text-[#464646] mt-3 min-h-[100px]">
                    Specialized ERP solution for jewellery businesses with inventory tracking and billing capabilities.
                    </p>
                    <Link className="inline-flex mt-3 items-center gap-10 text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] px-3 py-2 pr-1 lg:py-1 pl-4 border-2 border-[#f2f2f2] hover:bg-white hover:text-[#1955ef]" href="/jewellery-erp" passHref>
                    Read More
                    <div className="bg-[#1955EF] w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                        <GoArrowUpRight className="text-white text-xl" />
                    </div>
                    </Link>
                </div>
            </div>

            <div className='px-2 py-2'>
                <div className="bg-white border border-[#DAD9D9] rounded-xl p-6 text-left h-full">
                    <div className="w-[50px] h-[50px] bg-[#EFFFDC] rounded-[10px] flex justify-center items-center">
                    <BiClinic className="text-[#2A5C0B] text-2xl" />
                    </div>
                    <h3 className="font-semibold text-black mt-5 text-[18px]">Billing & Inventory Management</h3>
                    <p className="text-[15px] text-[#464646] mt-3 min-h-[100px]">
                    ProfitPlus is a powerful yet easy-to-use billing software and inventory management system designed for retail shops...
                    </p>
                    <Link className="inline-flex mt-3 items-center gap-10 text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] px-3 py-2 pr-1 lg:py-1 pl-4 border-2 border-[#f2f2f2] hover:bg-white hover:text-[#1955ef]" href="/billing-inventory-management" passHref>
                    Read More
                    <div className="bg-[#1955EF] w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                        <GoArrowUpRight className="text-white text-xl" />
                    </div>
                    </Link>
                </div>
            </div>

            <div className='px-2 py-2'>
                <div className="bg-white border border-[#DAD9D9] rounded-xl p-6 text-left h-full">
                    <div className="w-[50px] h-[50px] bg-[#EFFFDC] rounded-[10px] flex justify-center items-center">
                    <BiClinic className="text-[#2A5C0B] text-2xl" />
                    </div>
                    <h3 className="font-semibold text-black mt-5 text-[18px]">CRM</h3>
                    <p className="text-[15px] text-[#464646] mt-3 min-h-[100px]">
                    Our CRM system brings everything your business needs into one clean, easy-to-use platform from logging...
                    </p>
                    <Link className="inline-flex mt-3 items-center gap-10 text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] px-3 py-2 pr-1 lg:py-1 pl-4 border-2 border-[#f2f2f2] hover:bg-white hover:text-[#1955ef]" href="/crm" passHref>
                    Read More
                    <div className="bg-[#1955EF] w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                        <GoArrowUpRight className="text-white text-xl" />
                    </div>
                    </Link>
                </div>
            </div>

            <div className='px-2 py-2'>
                <div className="bg-white border border-[#DAD9D9] rounded-xl p-6 text-left h-full">
                    <div className="w-[50px] h-[50px] bg-[#EFFFDC] rounded-[10px] flex justify-center items-center">
                    <BiClinic className="text-[#2A5C0B] text-2xl" />
                    </div>
                    <h3 className="font-semibold text-black mt-5 text-[18px]">QMS</h3>
                    <p className="text-[15px] text-[#464646] mt-3 min-h-[100px]">
                    Our Queue Management System (QMS) streamlines how customers or patients move through your service process.
                    </p>
                    <Link className="inline-flex mt-3 items-center gap-10 text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] px-3 py-2 pr-1 lg:py-1 pl-4 border-2 border-[#f2f2f2] hover:bg-white hover:text-[#1955ef]" href="/qms" passHref>
                    Read More
                    <div className="bg-[#1955EF] w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                        <GoArrowUpRight className="text-white text-xl" />
                    </div>
                    </Link>
                </div>
            </div>

        </Slider>
    </div>
  )
}

export default ProductsSlider