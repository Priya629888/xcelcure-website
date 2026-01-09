'use client';

import React from 'react'

import Slider from "react-slick";


import Image from 'next/image';

import { GoArrowUpRight } from "react-icons/go";
import { MdOutlineLocalHospital } from "react-icons/md";
import { BiClinic } from "react-icons/bi";

import feature_01 from "../../assets/imagesource/feature_01.png";
import feature_02 from "../../assets/imagesource/feature_02.png";
import feature_03 from "../../assets/imagesource/feature_03.png";

import feature_04 from "../../assets/imagesource/feature_04.png";
import feature_05 from "../../assets/imagesource/feature_05.png";
import feature_06 from "../../assets/imagesource/feature_06.png";
import feature_07 from "../../assets/imagesource/feature_07.png";
import feature_08 from "../../assets/imagesource/feature_08.png";
import feature_09 from "../../assets/imagesource/feature_09.png";
import feature_10 from "../../assets/imagesource/feature_10.png";
import feature_11 from "../../assets/imagesource/feature_11.png";
import feature_12 from "../../assets/imagesource/feature_12.png";
import feature_13 from "../../assets/imagesource/feature_13.png";
import feature_14 from "../../assets/imagesource/feature_14.png";
import feature_15 from "../../assets/imagesource/feature_15.png";
import feature_16 from "../../assets/imagesource/feature_16.png";
import feature_17 from "../../assets/imagesource/feature_17.png";
import feature_18 from "../../assets/imagesource/feature_18.png";
import feature_19 from "../../assets/imagesource/feature_19.png";
import feature_20 from "../../assets/imagesource/feature_20.png";
import feature_21 from "../../assets/imagesource/feature_21.png";
import feature_22 from "../../assets/imagesource/feature_22.png";
import feature_23 from "../../assets/imagesource/feature_23.png";
import feature_24 from "../../assets/imagesource/feature_24.png";
import feature_25 from "../../assets/imagesource/feature_25.png";
import feature_26 from "../../assets/imagesource/feature_26.png";
import feature_27 from "../../assets/imagesource/feature_27.png";
import feature_28 from "../../assets/imagesource/feature_28.png";
import feature_29 from "../../assets/imagesource/feature_29.png";
import feature_30 from "../../assets/imagesource/feature_30.png";
import feature_31 from "../../assets/imagesource/feature_31.png";
import feature_32 from "../../assets/imagesource/feature_32.png";
import feature_33 from "../../assets/imagesource/feature_33.png";
import feature_34 from "../../assets/imagesource/feature_34.png";
import feature_35 from "../../assets/imagesource/feature_35.png";
import feature_36 from "../../assets/imagesource/feature_36.png";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';

const FeaturesSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
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
                    <Image src={feature_01} alt='feature_01' className='mb-8' />
                    <div className="absolute right-[31px] lg:right-[37px] bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[22px] leading-[28px] lg:text-[28px] lg:leading-[36px] border-b border-[#E6E6E6] pb-4 pr-0 feature_title_height">Email and SMS notification</h3>
                    <p className="text-[15px] text-[#464646] mt-3 feature_content_height">
                      Instant alerts sent to patients and staff for appointments, updates, and important actions.
                    </p>
                  </div>
                </div>
            </div>

            <div className='px-2 py-4'>
                <div className="bg-white shadow-lg rounded-[30px] p-3 text-left">
                  <div className="relative">
                    <Image src={feature_02} alt='feature_02' className='mb-8' />
                    <div className="absolute right-[31px] lg:right-[37px] bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[22px] leading-[28px] lg:text-[28px] lg:leading-[36px] border-b border-[#E6E6E6] pb-4 pr-0 feature_title_height">Intra office messaging</h3>
                    <p className="text-[15px] text-[#464646] mt-3 feature_content_height">
                      A built-in messaging system that improves coordination and streamlines communication across departments.
                    </p>
                  </div>
                </div>
            </div>

            <div className='px-2 py-4'>
                <div className="bg-white shadow-lg rounded-[30px] p-3 text-left">
                  <div className="relative">
                    <Image src={feature_03} alt='feature_03' className='mb-8' />
                    <div className="absolute right-[31px] lg:right-[37px] bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[22px] leading-[28px] lg:text-[28px] lg:leading-[36px] border-b border-[#E6E6E6] pb-4 pr-0 feature_title_height">Appointment Schedule</h3>
                    <p className="text-[15px] text-[#464646] mt-3 feature_content_height">
                      Effortlessly manage and coordinate patient appointments with a clear, organized scheduling system.
                    </p>
                  </div>
                </div>
            </div>

            <div className='px-2 py-4'>
                <div className="bg-white shadow-lg rounded-[30px] p-3 text-left">
                  <div className="relative">
                    <Image src={feature_04} alt='feature_04' className='mb-8' />
                    <div className="absolute right-[31px] lg:right-[37px] bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[22px] leading-[28px] lg:text-[28px] lg:leading-[36px] border-b border-[#E6E6E6] pb-4 pr-0 feature_title_height">Analytics and Reports</h3>
                    <p className="text-[15px] text-[#464646] mt-3 feature_content_height">
                      Get clear insights with real-time analytics and simple reports. Track performance and make smarter decisions faster.
                    </p>
                  </div>
                </div>
            </div>

            <div className='px-2 py-4'>
                <div className="bg-white shadow-lg rounded-[30px] p-3 text-left">
                  <div className="relative">
                    <Image src={feature_05} alt='feature_05' className='mb-8' />
                    <div className="absolute right-[31px] lg:right-[37px] bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[22px] leading-[28px] lg:text-[28px] lg:leading-[36px] border-b border-[#E6E6E6] pb-4 pr-0 feature_title_height">Out-patient Management</h3>
                    <p className="text-[15px] text-[#464646] mt-3 feature_content_height">
                      Streamline outpatient visits with smooth registrations, faster consultations, and efficient follow-ups all in one simple, connected system.
                    </p>
                  </div>
                </div>
            </div>

            <div className='px-2 py-4'>
                <div className="bg-white shadow-lg rounded-[30px] p-3 text-left">
                  <div className="relative">
                    <Image src={feature_06} alt='feature_06' className='mb-8' />
                    <div className="absolute right-[31px] lg:right-[37px] bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[22px] leading-[28px] lg:text-[28px] lg:leading-[36px] border-b border-[#E6E6E6] pb-4 pr-0 feature_title_height">ADT & OT Management</h3>
                    <p className="text-[15px] text-[#464646] mt-3 feature_content_height">
                      Manage admissions, discharges, transfers, and operation theatres seamlessly with real-time coordination, better scheduling, and complete visibility across departments.
                    </p>
                  </div>
                </div>
            </div>

            <div className='px-2 py-4'>
                <div className="bg-white shadow-lg rounded-[30px] p-3 text-left">
                  <div className="relative">
                    <Image src={feature_07} alt='feature_07' className='mb-8' />
                    <div className="absolute right-[31px] lg:right-[37px] bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[22px] leading-[28px] lg:text-[28px] lg:leading-[36px] border-b border-[#E6E6E6] pb-4 pr-0 feature_title_height">Nursing Station</h3>
                    <p className="text-[15px] text-[#464646] mt-3 feature_content_height">
                      Empower nursing staff with centralized patient information, task management, and real-time updates for better care coordination and faster response.
                    </p>
                  </div>
                </div>
            </div>

            <div className='px-2 py-4'>
                <div className="bg-white shadow-lg rounded-[30px] p-3 text-left">
                  <div className="relative">
                    <Image src={feature_08} alt='feature_08' className='mb-8' />
                    <div className="absolute right-[31px] lg:right-[37px] bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[22px] leading-[28px] lg:text-[28px] lg:leading-[36px] border-b border-[#E6E6E6] pb-4 pr-0 feature_title_height">License Management</h3>
                    <p className="text-[15px] text-[#464646] mt-3 feature_content_height">
                      Easily track, manage, and renew licenses with timely reminders and centralized records to stay compliant without manual effort.
                    </p>
                  </div>
                </div>
            </div>

            <div className='px-2 py-4'>
                <div className="bg-white shadow-lg rounded-[30px] p-3 text-left">
                  <div className="relative">
                    <Image src={feature_09} alt='feature_09' className='mb-8' />
                    <div className="absolute right-[31px] lg:right-[37px] bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[22px] leading-[28px] lg:text-[28px] lg:leading-[36px] border-b border-[#E6E6E6] pb-4 pr-0 feature_title_height">Pharmacy</h3>
                    <p className="text-[15px] text-[#464646] mt-3 feature_content_height">
                      Simplify pharmacy operations with accurate inventory tracking, quick billing, and safe medication dispensing all from one centralized system.
                    </p>
                  </div>
                </div>
            </div>


            <div className='px-2 py-4'>
                <div className="bg-white shadow-lg rounded-[30px] p-3 text-left">
                  <div className="relative">
                    <Image src={feature_10} alt='feature_10' className='mb-8' />
                    <div className="absolute right-[31px] lg:right-[37px] bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[22px] leading-[28px] lg:text-[28px] lg:leading-[36px] border-b border-[#E6E6E6] pb-4 pr-0 feature_title_height">Inventory Management</h3>
                    <p className="text-[15px] text-[#464646] mt-3 feature_content_height">
                      Keep track of medical supplies and equipment in real time, reduce wastage, avoid stock-outs, and ensure smooth hospital operations with smart inventory control.
                    </p>
                  </div>
                </div>
            </div>

            <div className='px-2 py-4'>
                <div className="bg-white shadow-lg rounded-[30px] p-3 text-left">
                  <div className="relative">
                    <Image src={feature_11} alt='feature_11' className='mb-8' />
                    <div className="absolute right-[31px] lg:right-[37px] bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[22px] leading-[28px] lg:text-[28px] lg:leading-[36px] border-b border-[#E6E6E6] pb-4 pr-0 feature_title_height">Laboratory Management</h3>
                    <p className="text-[15px] text-[#464646] mt-3 feature_content_height">
                      Simplify lab workflows with efficient test management, accurate reporting, and faster result delivery integrated across the system.
                    </p>
                  </div>
                </div>
            </div>

            <div className='px-2 py-4'>
                <div className="bg-white shadow-lg rounded-[30px] p-3 text-left">
                  <div className="relative">
                    <Image src={feature_12} alt='feature_12' className='mb-8' />
                    <div className="absolute right-[31px] lg:right-[37px] bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[22px] leading-[28px] lg:text-[28px] lg:leading-[36px] border-b border-[#E6E6E6] pb-4 pr-0 feature_title_height">Radiology Management</h3>
                    <p className="text-[15px] text-[#464646] mt-3 feature_content_height">
                      Simplify radiology operations with efficient scheduling, report management, and faster access to imaging results for clinicians and patients.
                    </p>
                  </div>
                </div>
            </div>

            <div className='px-2 py-4'>
                <div className="bg-white shadow-lg rounded-[30px] p-3 text-left">
                  <div className="relative">
                    <Image src={feature_13} alt='feature_13' className='mb-8' />
                    <div className="absolute right-[31px] lg:right-[37px] bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[22px] leading-[28px] lg:text-[28px] lg:leading-[36px] border-b border-[#E6E6E6] pb-4 pr-0 feature_title_height">Dicom Viewer Integrated with PACS</h3>
                    <p className="text-[15px] text-[#464646] mt-3 feature_content_height">
                      Access, view, and analyze medical images instantly with a built-in DICOM viewer seamlessly integrated with PACS for faster diagnosis and improved collaboration.
                    </p>
                  </div>
                </div>
            </div>

            <div className='px-2 py-4'>
                <div className="bg-white shadow-lg rounded-[30px] p-3 text-left">
                  <div className="relative">
                    <Image src={feature_14} alt='feature_14' className='mb-8' />
                    <div className="absolute right-[31px] lg:right-[37px] bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[22px] leading-[28px] lg:text-[28px] lg:leading-[36px] border-b border-[#E6E6E6] pb-4 pr-0 feature_title_height">Ambulance Booking & Tracking</h3>
                    <p className="text-[15px] text-[#464646] mt-3 feature_content_height">
                      Book ambulances quickly and track them in real time, ensuring faster response, better coordination, and timely patient care.
                    </p>
                  </div>
                </div>
            </div>

            <div className='px-2 py-4'>
                <div className="bg-white shadow-lg rounded-[30px] p-3 text-left">
                  <div className="relative">
                    <Image src={feature_15} alt='feature_15' className='mb-8' />
                    <div className="absolute right-[31px] lg:right-[37px] bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[22px] leading-[28px] lg:text-[28px] lg:leading-[36px] border-b border-[#E6E6E6] pb-4 pr-0 feature_title_height">Blood Bank</h3>
                    <p className="text-[15px] text-[#464646] mt-3 feature_content_height">
                      Maintain accurate records of blood units, inventory status, and availability to ensure timely access and safe blood management across the facility.
                    </p>
                  </div>
                </div>
            </div>

            <div className='px-2 py-4'>
                <div className="bg-white shadow-lg rounded-[30px] p-3 text-left">
                  <div className="relative">
                    <Image src={feature_16} alt='feature_16' className='mb-8' />
                    <div className="absolute right-[31px] lg:right-[37px] bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[22px] leading-[28px] lg:text-[28px] lg:leading-[36px] border-b border-[#E6E6E6] pb-4 pr-0 feature_title_height">Blood Collection, Extraction & Inventory</h3>
                    <p className="text-[15px] text-[#464646] mt-3 feature_content_height">
                      Track blood collection, testing, and inventory in real time to ensure availability, safety, and efficient blood bank operations.
                    </p>
                  </div>
                </div>
            </div>

            <div className='px-2 py-4'>
                <div className="bg-white shadow-lg rounded-[30px] p-3 text-left">
                  <div className="relative">
                    <Image src={feature_17} alt='feature_17' className='mb-8' />
                    <div className="absolute right-[31px] lg:right-[37px] bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[22px] leading-[28px] lg:text-[28px] lg:leading-[36px] border-b border-[#E6E6E6] pb-4 pr-0 feature_title_height">Packages, Procedures</h3>
                    <p className="text-[15px] text-[#464646] mt-3 feature_content_height">
                      Easily create, manage, and apply treatment packages and procedures with transparent pricing and accurate billing.
                    </p>
                  </div>
                </div>
            </div>

            <div className='px-2 py-4'>
                <div className="bg-white shadow-lg rounded-[30px] p-3 text-left">
                  <div className="relative">
                    <Image src={feature_18} alt='feature_18' className='mb-8' />
                    <div className="absolute right-[31px] lg:right-[37px] bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[22px] leading-[28px] lg:text-[28px] lg:leading-[36px] border-b border-[#E6E6E6] pb-4 pr-0 feature_title_height">TPA Management</h3>
                    <p className="text-[15px] text-[#464646] mt-3 feature_content_height">
                      Simplify third-party administrator processes with smooth insurance coordination, faster approvals, and accurate claim tracking.
                    </p>
                  </div>
                </div>
            </div>

            <div className='px-2 py-4'>
                <div className="bg-white shadow-lg rounded-[30px] p-3 text-left">
                  <div className="relative">
                    <Image src={feature_19} alt='feature_19' className='mb-8' />
                    <div className="absolute right-[31px] lg:right-[37px] bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[22px] leading-[28px] lg:text-[28px] lg:leading-[36px] border-b border-[#E6E6E6] pb-4 pr-0 feature_title_height">Integrated Accounting with Monthly P/L Analysis</h3>
                    <p className="text-[15px] text-[#464646] mt-3 feature_content_height">
                      Track finances effortlessly with integrated accounting and clear monthly profit & loss insights for better control.
                    </p>
                  </div>
                </div>
            </div>

            <div className='px-2 py-4'>
                <div className="bg-white shadow-lg rounded-[30px] p-3 text-left">
                  <div className="relative">
                    <Image src={feature_20} alt='feature_20' className='mb-8' />
                    <div className="absolute right-[31px] lg:right-[37px] bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[22px] leading-[28px] lg:text-[28px] lg:leading-[36px] border-b border-[#E6E6E6] pb-4 pr-0 feature_title_height">Staff Management & Access Delegation</h3>
                    <p className="text-[15px] text-[#464646] mt-3 feature_content_height">
                      Easily manage staff roles, schedules, and permissions while ensuring secure, role-based access across the system.
                    </p>
                  </div>
                </div>
            </div>

            <div className='px-2 py-4'>
                <div className="bg-white shadow-lg rounded-[30px] p-3 text-left">
                  <div className="relative">
                    <Image src={feature_21} alt='feature_21' className='mb-8' />
                    <div className="absolute right-[31px] lg:right-[37px] bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[22px] leading-[28px] lg:text-[28px] lg:leading-[36px] border-b border-[#E6E6E6] pb-4 pr-0 feature_title_height">Internal Communication</h3>
                    <p className="text-[15px] text-[#464646] mt-3 feature_content_height">
                      Enable quick, secure communication between departments and staff to ensure smooth coordination and faster decisions.
                    </p>
                  </div>
                </div>
            </div>

            <div className='px-2 py-4'>
                <div className="bg-white shadow-lg rounded-[30px] p-3 text-left">
                  <div className="relative">
                    <Image src={feature_22} alt='feature_22' className='mb-8' />
                    <div className="absolute right-[31px] lg:right-[37px] bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[22px] leading-[28px] lg:text-[28px] lg:leading-[36px] border-b border-[#E6E6E6] pb-4 pr-0 feature_title_height">SMS, Mail, WhatsApp</h3>
                    <p className="text-[15px] text-[#464646] mt-3 feature_content_height">
                      Send instant updates, reminders, and notifications to patients and staff across SMS, email, and WhatsApp from one unified platform.
                    </p>
                  </div>
                </div>
            </div>

            <div className='px-2 py-4'>
                <div className="bg-white shadow-lg rounded-[30px] p-3 text-left">
                  <div className="relative">
                    <Image src={feature_23} alt='feature_23' className='mb-8' />
                    <div className="absolute right-[31px] lg:right-[37px] bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[22px] leading-[28px] lg:text-[28px] lg:leading-[36px] border-b border-[#E6E6E6] pb-4 pr-0 feature_title_height">Nursing Roster</h3>
                    <p className="text-[15px] text-[#464646] mt-3 feature_content_height">
                      Simplify Nursing Rosters with Smart Scheduling, Accurate Staffing, and Faster Shift Allocation
                    </p>
                  </div>
                </div>
            </div>

            <div className='px-2 py-4'>
                <div className="bg-white shadow-lg rounded-[30px] p-3 text-left">
                  <div className="relative">
                    <Image src={feature_24} alt='feature_24' className='mb-8' />
                    <div className="absolute right-[31px] lg:right-[37px] bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[22px] leading-[28px] lg:text-[28px] lg:leading-[36px] border-b border-[#E6E6E6] pb-4 pr-0 feature_title_height">SLA & TAT Management</h3>
                    <p className="text-[15px] text-[#464646] mt-3 feature_content_height">
                      Track SLAs and turnaround times across all tests with real-time visibility, automated alerts, and actionable insights to prevent delays and improve operational efficiency.
                    </p>
                  </div>
                </div>
            </div>

            <div className='px-2 py-4'>
                <div className="bg-white shadow-lg rounded-[30px] p-3 text-left">
                  <div className="relative">
                    <Image src={feature_25} alt='feature_25' className='mb-8' />
                    <div className="absolute right-[31px] lg:right-[37px] bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[22px] leading-[28px] lg:text-[28px] lg:leading-[36px] border-b border-[#E6E6E6] pb-4 pr-0 feature_title_height">Department wise Dashboard</h3>
                    <p className="text-[15px] text-[#464646] mt-3 feature_content_height">
                      View performance breakdowns by department to track progress, identify delays, and ensure smooth coordination across teams.
                    </p>
                  </div>
                </div>
            </div>

            <div className='px-2 py-4'>
                <div className="bg-white shadow-lg rounded-[30px] p-3 text-left">
                  <div className="relative">
                    <Image src={feature_26} alt='feature_26' className='mb-8' />
                    <div className="absolute right-[31px] lg:right-[37px] bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[22px] leading-[28px] lg:text-[28px] lg:leading-[36px] border-b border-[#E6E6E6] pb-4 pr-0 feature_title_height">Key Performance Metrics Dashboard</h3>
                    <p className="text-[15px] text-[#464646] mt-3 feature_content_height">
                      Gain controlled, real-time insights into operational KPIs to identify risks, prevent SLA breaches, and ensure compliance with healthcare quality and governance standards.
                    </p>
                  </div>
                </div>
            </div>

            <div className='px-2 py-4'>
                <div className="bg-white shadow-lg rounded-[30px] p-3 text-left">
                  <div className="relative">
                    <Image src={feature_27} alt='feature_27' className='mb-8' />
                    <div className="absolute right-[31px] lg:right-[37px] bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[22px] leading-[28px] lg:text-[28px] lg:leading-[36px] border-b border-[#E6E6E6] pb-4 pr-0 feature_title_height">Clinical Staffs Payout</h3>
                    <p className="text-[15px] text-[#464646] mt-3 feature_content_height">
                      Ensure accurate, transparent, and policy-driven payout calculations for clinical staff, with full traceability, audit logs, and adherence to organizational and regulatory guidelines.
                    </p>
                  </div>
                </div>
            </div>

            <div className='px-2 py-4'>
                <div className="bg-white shadow-lg rounded-[30px] p-3 text-left">
                  <div className="relative">
                    <Image src={feature_28} alt='feature_28' className='mb-8' />
                    <div className="absolute right-[31px] lg:right-[37px] bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[22px] leading-[28px] lg:text-[28px] lg:leading-[36px] border-b border-[#E6E6E6] pb-4 pr-0 feature_title_height">Transaction Reports</h3>
                    <p className="text-[15px] text-[#464646] mt-3 feature_content_height">
                      Access detailed transaction reports capturing every test order, modification, approval, and result delivery to ensure full traceability, accountability, and regulatory compliance
                    </p>
                  </div>
                </div>
            </div>

            <div className='px-2 py-4'>
                <div className="bg-white shadow-lg rounded-[30px] p-3 text-left">
                  <div className="relative">
                    <Image src={feature_29} alt='feature_29' className='mb-8' />
                    <div className="absolute right-[31px] lg:right-[37px] bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[22px] leading-[28px] lg:text-[28px] lg:leading-[36px] border-b border-[#E6E6E6] pb-4 pr-0 feature_title_height">Executive Summary on Hospital Performance</h3>
                    <p className="text-[15px] text-[#464646] mt-3 feature_content_height">
                      A high-level, compliance-ready view of hospital performance to support executive oversight and informed decision-making.
                    </p>
                  </div>
                </div>
            </div>

            <div className='px-2 py-4'>
                <div className="bg-white shadow-lg rounded-[30px] p-3 text-left">
                  <div className="relative">
                    <Image src={feature_30} alt='feature_30' className='mb-8' />
                    <div className="absolute right-[31px] lg:right-[37px] bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[22px] leading-[28px] lg:text-[28px] lg:leading-[36px] border-b border-[#E6E6E6] pb-4 pr-0 feature_title_height">MIS Reports</h3>
                    <p className="text-[15px] text-[#464646] mt-3 feature_content_height">
                      Generate accurate, audit-ready MIS reports that ensure regulatory compliance, operational transparency, and informed decision-making across laboratory operations.
                    </p>
                  </div>
                </div>
            </div>

            <div className='px-2 py-4'>
                <div className="bg-white shadow-lg rounded-[30px] p-3 text-left">
                  <div className="relative">
                    <Image src={feature_31} alt='feature_31' className='mb-8' />
                    <div className="absolute right-[31px] lg:right-[37px] bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[22px] leading-[28px] lg:text-[28px] lg:leading-[36px] border-b border-[#E6E6E6] pb-4 pr-0 feature_title_height">Patient Medical History (EHR)</h3>
                    <p className="text-[15px] text-[#464646] mt-3 feature_content_height">
                      A centralized, compliant EHR for maintaining accurate patient medical histories with secure access, audit trails, and regulatory-ready data management.
                    </p>
                  </div>
                </div>
            </div>

            <div className='px-2 py-4'>
                <div className="bg-white shadow-lg rounded-[30px] p-3 text-left">
                  <div className="relative">
                    <Image src={feature_32} alt='feature_32' className='mb-8' />
                    <div className="absolute right-[31px] lg:right-[37px] bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[22px] leading-[28px] lg:text-[28px] lg:leading-[36px] border-b border-[#E6E6E6] pb-4 pr-0 feature_title_height">Automated Discharge Summary</h3>
                    <p className="text-[15px] text-[#464646] mt-3 feature_content_height">
                      Create structured discharge summaries in real time using system-validated data, supporting audit readiness, interoperability, and regulatory compliance.
                    </p>
                  </div>
                </div>
            </div>

            <div className='px-2 py-4'>
                <div className="bg-white shadow-lg rounded-[30px] p-3 text-left">
                  <div className="relative">
                    <Image src={feature_33} alt='feature_33' className='mb-8' />
                    <div className="absolute right-[31px] lg:right-[37px] bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[22px] leading-[28px] lg:text-[28px] lg:leading-[36px] border-b border-[#E6E6E6] pb-4 pr-0 feature_title_height">Automated Nursing Roster</h3>
                    <p className="text-[15px] text-[#464646] mt-3 feature_content_height">
                      Ensure consistent, compliant nurse staffing through automated scheduling that balances workload, qualifications, and continuity of care.
                    </p>
                  </div>
                </div>
            </div>

            <div className='px-2 py-4'>
                <div className="bg-white shadow-lg rounded-[30px] p-3 text-left">
                  <div className="relative">
                    <Image src={feature_34} alt='feature_34' className='mb-8' />
                    <div className="absolute right-[31px] lg:right-[37px] bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[22px] leading-[28px] lg:text-[28px] lg:leading-[36px] border-b border-[#E6E6E6] pb-4 pr-0 feature_title_height">Automated recurring/series charges</h3>
                    <p className="text-[15px] text-[#464646] mt-3 feature_content_height">
                      Configure and automate recurring patient charges based on approved care plans, supporting transparent billing, audit readiness, and regulatory compliance.
                    </p>
                  </div>
                </div>
            </div>

            <div className='px-2 py-4'>
                <div className="bg-white shadow-lg rounded-[30px] p-3 text-left">
                  <div className="relative">
                    <Image src={feature_35} alt='feature_35' className='mb-8' />
                    <div className="absolute right-[31px] lg:right-[37px] bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[22px] leading-[28px] lg:text-[28px] lg:leading-[36px] border-b border-[#E6E6E6] pb-4 pr-0 feature_title_height">Role Based Module Access</h3>
                    <p className="text-[15px] text-[#464646] mt-3 feature_content_height">
                      Grant access by role to protect sensitive patient data, maintain audit trails, and ensure compliance across all healthcare modules.
                    </p>
                  </div>
                </div>
            </div>

            <div className='px-2 py-4'>
                <div className="bg-white shadow-lg rounded-[30px] p-3 text-left">
                  <div className="relative">
                    <Image src={feature_36} alt='feature_36' className='mb-8' />
                    <div className="absolute right-[31px] lg:right-[37px] bottom-[-15px]">
                      <Link className=" text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] hover:bg-white hover:text-[#1955ef]" href="/" passHref>
                        <div className="bg-[#1955EF] hover:bg-black w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="font-bold text-black mt-3 text-[22px] leading-[28px] lg:text-[28px] lg:leading-[36px] border-b border-[#E6E6E6] pb-4 pr-0 feature_title_height">Electronic Medical Records</h3>
                    <p className="text-[15px] text-[#464646] mt-3 feature_content_height">
                      Track SLAs and turnaround times across all tests with real-time visibility, automated alerts, and actionable insights to prevent delays and improve operational efficiency.
                    </p>
                  </div>
                </div>
            </div>

        </Slider>
    </div>
  )
}

export default FeaturesSlider