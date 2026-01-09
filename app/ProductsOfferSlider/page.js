'use client';

import React from 'react'

import Slider from "react-slick";


import Image from 'next/image';

import { GoArrowUpRight } from "react-icons/go";
import { MdOutlineLocalHospital } from "react-icons/md";
import { BiClinic } from "react-icons/bi";

import product_slider_01 from "../../assets/imagesource/product_slider_01.png";
import product_slider_02 from "../../assets/imagesource/product_slider_02.png";
import product_slider_03 from "../../assets/imagesource/product_slider_03.png";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';

const ProductsOfferSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows:false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
  };
  return (
    <div>
        <Slider {...settings}>

            <div className='px-2 p-4'>
                <div className="bg-white shadow-lg rounded-[30px] p-3 text-left">
                  <div className="relative">
                    <Image src={product_slider_01} alt='product_slider_01' className='mb-8' />
                    <div className="absolute right-[30px] lg:right-[37px] bottom-[-22px] lg:bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[20px] leading-[30px] lg:text-[28px] lg:leading-[36px] border-b border-[#E6E6E6] pb-4 pr-0 min-h-[80px]">Hospital Management System</h3>
                    <div className='min-h-[290px]'>
                      <p className="text-[15px] text-[#464646] mt-3">
                        Technology has advanced rapidly, greatly improving the quality of life and transforming healthcare. 
                        It not only enhances patient care but also reduces the workload on hospital staff, making processes more efficient and reliable.
                      </p>
                      <p className="text-[15px] text-[#464646] mt-3">
                        The three pillars driving this change are technological enablement, digitization, and automation. Together, they turn traditional 
                        hospitals into smart hospitals—modern, data-driven facilities with immense potential for exponential growth.
                      </p>
                    </div>
                  </div>
                </div>
            </div>

            <div className='px-2 py-4'>
                <div className="bg-white shadow-lg rounded-[30px] p-3 text-left">
                  <div className="relative">
                    <Image src={product_slider_02} alt='product_slider_02' className='mb-8' />
                    <div className="absolute right-[30px] lg:right-[37px] bottom-[-22px] lg:bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[20px] leading-[30px] lg:text-[28px] lg:leading-[36px] border-b border-[#E6E6E6] pb-4 pr-0 min-h-[80px]">Lab <br></br> Management</h3>
                    <div className='min-h-[290px]'>
                      <p className="text-[15px] text-[#464646] mt-3">
                        Handle your orders, automate report generations, enable smart notifications. Further, switch to analytical reports with an 
                        online Hospital management system. Radiology is equipped with an inbuilt DYCOM viewer and Integrated with PACS. Laboratory dashboard 
                        for quick view of orders, testing completed and reports generated. Availability of test data approval/rejection flow by pathologist. Integrated with Finance.
                      </p>
                    </div>
                  </div>
                </div>
            </div>

            <div className='px-2 py-4'>
                <div className="bg-white shadow-lg rounded-[30px] p-3 text-left">
                  <div className="relative">
                    <Image src={product_slider_03} alt='product_slider_03' className='mb-8' />
                    <div className="absolute right-[30px] lg:right-[37px] bottom-[-22px] lg:bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[20px] leading-[30px] lg:text-[28px] lg:leading-[36px] border-b border-[#E6E6E6] pb-4 pr-0 min-h-[80px]">Clinic</h3>
                    <div className='min-h-[290px]'>
                      <p className="text-[15px] text-[#464646] mt-3">
                        Doctor’s scheduling, availability dashboard, appointment booking, queue management and digital prescription. Access delegation 
                        for discounts and other benefits offered to patient. Automated voucher posting in Finance for booking. Integrated with SMS and Mail gateway for notification.
                      </p>
                    </div>
                  </div>
                </div>
            </div>

            <div className='px-2 p-4'>
                <div className="bg-white shadow-lg rounded-[30px] p-3 text-left">
                  <div className="relative">
                    <Image src={product_slider_01} alt='product_slider_01' className='mb-8' />
                    <div className="absolute right-[30px] lg:right-[37px] bottom-[-22px] lg:bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[20px] leading-[30px] lg:text-[28px] lg:leading-[36px] border-b border-[#E6E6E6] pb-4 pr-0 min-h-[80px]">Hospital Management System</h3>
                    <div className='min-h-[290px]'>
                      <p className="text-[15px] text-[#464646] mt-3">
                        Technology has advanced rapidly, greatly improving the quality of life and transforming healthcare. 
                        It not only enhances patient care but also reduces the workload on hospital staff, making processes more efficient and reliable.
                      </p>
                      <p className="text-[15px] text-[#464646] mt-3">
                        The three pillars driving this change are technological enablement, digitization, and automation. Together, they turn traditional 
                        hospitals into smart hospitals—modern, data-driven facilities with immense potential for exponential growth.
                      </p>
                    </div>
                  </div>
                </div>
            </div>

        </Slider>
    </div>
  )
}

export default ProductsOfferSlider