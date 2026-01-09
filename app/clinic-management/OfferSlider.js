'use client';

import React from 'react'

import Slider from "react-slick";


import Image from 'next/image';

import { GoArrowUpRight } from "react-icons/go";
import { MdOutlineLocalHospital } from "react-icons/md";
import { BiClinic } from "react-icons/bi";

import offer_slider_01 from "../../assets/imagesource/offer_slider_01.png";
import offer_slider_02 from "../../assets/imagesource/offer_slider_02.png";
import offer_slider_03 from "../../assets/imagesource/offer_slider_03.png";

import offer_slider_04 from "../../assets/imagesource/offer_slider_04.png";
import offer_slider_05 from "../../assets/imagesource/offer_slider_05.png";
import offer_slider_06 from "../../assets/imagesource/offer_slider_06.png";
import offer_slider_07 from "../../assets/imagesource/offer_slider_07.png";
import offer_slider_08 from "../../assets/imagesource/offer_slider_08.png";
import offer_slider_09 from "../../assets/imagesource/offer_slider_09.png";
import offer_slider_10 from "../../assets/imagesource/offer_slider_10.png";
import offer_slider_11 from "../../assets/imagesource/offer_slider_11.png";
import offer_slider_12 from "../../assets/imagesource/offer_slider_12.png";
import offer_slider_13 from "../../assets/imagesource/offer_slider_13.png";
import offer_slider_14 from "../../assets/imagesource/offer_slider_14.png";
import offer_slider_15 from "../../assets/imagesource/offer_slider_15.png";
import offer_slider_16 from "../../assets/imagesource/offer_slider_16.png";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';

const OfferSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
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

            <div className='px-2 p-0'>
                <div className='offer_slider_wrap'>
                    <Image src={offer_slider_01} alt='offer_slider_01' className='mb-0' />
                    <div className='offer_slider_content'>
                        <div className='offer_slider_content_box'>
                            <h3>Footfall and Revenue Dashboard</h3>
                            <p>A graphical presentation of doctor wise patient consultation and revenue generation 
                                over a selected period is available based on the user’s role and privileges.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-2 p-0'>
                <div className='offer_slider_wrap'>
                    <Image src={offer_slider_02} alt='offer_slider_02' className='mb-0' />
                    <div className='offer_slider_content'>
                        <div className='offer_slider_content_box'>
                            <h3>Availability Dashboard</h3>
                            <p>
                                A calendar window to display availability of doctors with patient booking counter. This feature makes front desk 
                                job easy selecting a certain date and booking appointment on same window with just a click.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-2 p-0'>
                <div className='offer_slider_wrap'>
                    <Image src={offer_slider_03} alt='offer_slider_03' className='mb-0' />
                    <div className='offer_slider_content'>
                        <div className='offer_slider_content_box'>
                            <h3>Registration, Billing & Appointment Management</h3>
                            <p>
                                Patient registration requires only four basic details, with billing completed in minutes using multiple payment options. 
                                Appointments can be booked by phone or in person, and easily rescheduled or cancelled with refunds when applicable. 
                                Additional clinical services can be billed through the OPD section, and printable stationery is available for 
                                prescriptions. Once an appointment is confirmed, a queue number is generated and displayed on the QMS board.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-2 p-0'>
                <div className='offer_slider_wrap'>
                    <Image src={offer_slider_04} alt='offer_slider_04' className='mb-0' />
                    <div className='offer_slider_content'>
                        <div className='offer_slider_content_box'>
                            <h3>Queue Management System</h3>
                            <p>
                                Application is compatible with any Queue management System (QMS) with serial communication port or exposed REST API.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-2 p-0'>
                <div className='offer_slider_wrap'>
                    <Image src={offer_slider_05} alt='offer_slider_05' className='mb-0' />
                    <div className='offer_slider_content'>
                        <div className='offer_slider_content_box'>
                            <h3>Nursing Notes</h3>
                            <p>
                                Application has provision to capture patient vitals collected by out-patient nurse. Vitals collected ar results, 
                                images not older than one year can be uploaded in the system for doctor’s reference.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-2 p-0'>
                <div className='offer_slider_wrap'>
                    <Image src={offer_slider_06} alt='offer_slider_06' className='mb-0' />
                    <div className='offer_slider_content'>
                        <div className='offer_slider_content_box'>
                            <h3>Doctor Consultation</h3>
                            <p>
                                Doctor consultation window has been designed to collect all information in specified prescription format 
                                (observation, provisional diagnosis, clinical advice – medication, reporting, imaging) with integration availability 
                                with diagnostic system, pharmacy. Digitized prescription can be prepared either by typing or by using digital pen and 
                                printed directly on printer or exported as portable document.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-2 p-0'>
                <div className='offer_slider_wrap'>
                    <Image src={offer_slider_07} alt='offer_slider_07' className='mb-0' />
                    <div className='offer_slider_content'>
                        <div className='offer_slider_content_box'>
                            <h3>Digital Prescription</h3>
                            <p>
                                Digitized prescription is provisioned either by typing or by using light pen and printed directly on printer or exported 
                                as portable document. Prescription is automatically retained for future reference and linked with patient id. 
                                It is also available in mobile. Medicines, lab tests and imaging prescribed in prescription is automatically 
                                notified to front desk and respective departments.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-2 p-0'>
                <div className='offer_slider_wrap'>
                    <Image src={offer_slider_08} alt='offer_slider_08' className='mb-0' />
                    <div className='offer_slider_content'>
                        <div className='offer_slider_content_box'>
                            <h3>Telemedicine</h3>
                            <p>
                                Telemedicine facility available over the mobile app or using camera integrated with application.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-2 p-0'>
                <div className='offer_slider_wrap'>
                    <Image src={offer_slider_09} alt='offer_slider_09' className='mb-0' />
                    <div className='offer_slider_content'>
                        <div className='offer_slider_content_box'>
                            <h3>EHR, EMR</h3>
                            <p>
                                Patient’s prescription is retained in digital format. Electronic Health and Medical records are collected using ABDM integration and clinical records.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='px-2 p-0'>
                <div className='offer_slider_wrap'>
                    <Image src={offer_slider_10} alt='offer_slider_10' className='mb-0' />
                    <div className='offer_slider_content'>
                        <div className='offer_slider_content_box'>
                            <h3>Doctor Scheduling, vacation and slot switching</h3>
                            <p>
                                A pleasant and visual form is designed to schedule consulting doctor’s visiting schedule. There is option of blocking 
                                calendar for vacation to auto discard any appointment during vacation. Options available to switch visiting time as well.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-2 p-0'>
                <div className='offer_slider_wrap'>
                    <Image src={offer_slider_11} alt='offer_slider_11' className='mb-0' />
                    <div className='offer_slider_content'>
                        <div className='offer_slider_content_box'>
                            <h3>Billing & Reports</h3>
                            <p>
                                Ample of reports and analytics available for clinical management categorized singularly or in combination of doctor, 
                                patient, specialty, time-period, demography, diagnosis, prescribed medicines, lab tests, imaging, revenues, payment mode etc.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-2 p-0'>
                <div className='offer_slider_wrap'>
                    <Image src={offer_slider_12} alt='offer_slider_12' className='mb-0' />
                    <div className='offer_slider_content'>
                        <div className='offer_slider_content_box'>
                            <h3>Finance</h3>
                            <p>
                                Receipt vouchers is automatically posted against each confirmed booking. Each refund triggers an automated 
                                payment voucher as well. Integrated Finance module is a full-fledged accounting module with cash/bank book, 
                                books of ledger, daybook, periodical trial balance, profit and loss and balance sheet. This module is equipped 
                                and capable enough to handle accounts of all clinic income and expenses.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-2 p-0'>
                <div className='offer_slider_wrap'>
                    <Image src={offer_slider_13} alt='offer_slider_13' className='mb-0' />
                    <div className='offer_slider_content'>
                        <div className='offer_slider_content_box'>
                            <h3>Follow up reminder</h3>
                            <p>
                                An automated patient consultation follow-up reminder is sent as advised by doctor through SMS
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-2 p-0'>
                <div className='offer_slider_wrap'>
                    <Image src={offer_slider_14} alt='offer_slider_14' className='mb-0' />
                    <div className='offer_slider_content'>
                        <div className='offer_slider_content_box'>
                            <h3>Prescribed Lab test, imaging, and medicines auto notification</h3>
                            <p>
                                Medicines, lab tests and imaging prescribed in prescription is automatically notified to front desk and respective departments.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-2 p-0'>
                <div className='offer_slider_wrap'>
                    <Image src={offer_slider_15} alt='offer_slider_15' className='mb-0' />
                    <div className='offer_slider_content'>
                        <div className='offer_slider_content_box'>
                            <h3>SMS, e-Mail, other communication channel integration</h3>
                            <p>
                                Application can be integrated with any SMS gateway over the REST API on internet. It can also be 
                                integrated with any Email service provider through REST or SMTP. Other communication channels (Facebook, WhatsApp, Twitters etc.) 
                                can also be integrated with the application provided REST API integration is available.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-2 p-0'>
                <div className='offer_slider_wrap'>
                    <Image src={offer_slider_16} alt='offer_slider_16' className='mb-0' />
                    <div className='offer_slider_content'>
                        <div className='offer_slider_content_box'>
                            <h3>Role based access (RBAC)</h3>
                            <p>
                                An automated patient consultation follow-up reminder is sent as advised by doctor through SMSMenu 
                                wise view/add/modify/delete option available against assigned role. Thus, access level is categorized on role 
                                assigned to front desk, accounts and manager and accordingly application privileges distributed
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </Slider>
    </div>
  )
}

export default OfferSlider