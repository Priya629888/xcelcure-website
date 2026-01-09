"use client";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import home_about from "../assets/imagesource/home_about.png";
import home_banner_img from "../assets/imagesource/banner_img.png";
import arrow_icon from "../assets/imagesource/arrow_icon.png";
import long_01 from "../assets/imagesource/long_01.png";
import sort_01 from "../assets/imagesource/sort_01.png";
import surve_01 from "../assets/imagesource/surve_01.png";
import { GoArrowUpRight } from "react-icons/go";
import { BiClinic } from "react-icons/bi";

import feature_01 from "../assets/imagesource/feature_01.png";
import feature_02 from "../assets/imagesource/feature_02.png";
import feature_03 from "../assets/imagesource/feature_03.png";
import social_img from "../assets/imagesource/social_img.png";
import contact_img from "../assets/imagesource/contact_img.png";
import captcha_img from "../assets/imagesource/captcha_img.png";
import watch_btn from "../assets/imagesource/watch_btn.png";

import { Label, TextInput, Textarea, Datepicker, Button, Modal, ModalBody, ModalFooter, ModalHeader  } from "flowbite-react";

import { MdOutlineLocalHospital } from "react-icons/md";
import { BsFillPlayCircleFill } from "react-icons/bs";

import localFont from "next/font/local";
import ProductsSlider from "./productsSlider/page";
import FeaturesSlider from "./FeaturesSlider/page";
import BannerSlider from "./BannerSlider/page";
import DemoForm from "./DemoForm";
import { ToastContainer } from "react-toastify";
const helveticaNeue = localFont({
  src: [
    {
      path: "../assets/fonts/helveticaneuecyr-roman.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-helvetica-neue",
});


export default function Home() {

  const [openVideoModal, setOpenVideoModal] = useState(false);

  return (
    <div className={`${helveticaNeue.variable} antialiased home_wrapper_arera`}>
   
       {/* Home banner section start here */}
       <div className="home_banner_area pt-4 lg:pt-0">
          
          <div className="max-w-6xl mx-auto lg:py-4 px-4 lg:px-0">
              <div className="lg:flex gap-20">
                 <div className="lg:w-6/12 pr-0 mb-6 flex justify-center items-center">
                    <div>
                      <h1 className="text-[#0B0B2C] text-[25px] lg:text-[49px] lg:leading-[62px] font-extrabold capitalize pb-4 ${helveticaNeue.className}">
                        Transform your <br></br> hospital digitally with <span className="text-[#ff0016] block">xcelcuré™.</span></h1>
                        <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-10 pb-5 ${helveticaNeue.className}">
                          Transform your hospital into a more efficient, human-centric, and competitive ecosystem with <strong>xcelcuré™</strong>. 
                          Our intelligent HMS unifies patient data, streamlines processes, and boosts operational and financial performance. 
                          Flexible hosting, easy migration, faster TAT, and secure encrypted data make it a future-proof solution.
                        </p>
                        <Link className="inline-flex items-center gap-10 text-black bg-[#ffffff] font-medium text-xs lg:text-base rounded-[35px] px-2 py-1 pr-1 lg:py-1 pl-4 border-2 border-[#f2f2f2] hover:bg-white hover:text-[#1955ef]" href="/#request_a_demo" passHref>
                          Schedule a Demo
                          <div className="bg-[#1955EF] lg:w-[48px] lg:h-[48px] w-[35px] h-[35px] rounded-[100px] flex justify-center items-center">
                            <GoArrowUpRight className="text-white text-xl" />
                          </div>
                        </Link>

                        <div className="flex justify-between items-center mt-10">
                            <div className="flex items-center w-7/12">
                              <div className="flex items-center w-6/12 relative">
                                 <div className="w-[60px] h-[60px] bg-[#0047FF] rounded-full"></div>
                                 <p className="text-[#000000] text-[30px] lg:text-[40px] font-extrabold absolute left-[40px] top-[8px] lg:top-[2px]">10+</p>
                              </div>
                              <div className="w-6/12 border-l border-[#D4D4D4] pl-[15px]">
                                <h3 className="text-black text-[14px] lg:text-[16px] leading-[16px] lg:leading-[20px] font-bold">years of experiences</h3>
                              </div>
                            </div>
                            <button onClick={() => setOpenVideoModal(true)} className="cursor-pointer w-5/12 flex justify-end">
                                <Image src={watch_btn} alt='watch_btn' className="w-[120px]" />
                            </button>
                        </div>
                    </div>
                 </div>
                 <div className="lg:w-6/12 home_slider">
                    <BannerSlider />
                 </div>
              </div>
          </div>
       </div>
       {/* Home banner section ends here */}
       {/* About section start here */}
       <div className="home_about_section mt-[50px] mb-[20px]">
          <div className="max-w-6xl mx-auto lg:py-4 px-4 lg:px-0">
              <div className="lg:flex gap-12">
                  <div className="lg:w-6/12 mb-4 lg:mb-0">
                    <Image src={home_about} alt='logo' />
                  </div>
                  <div className="lg:w-6/12">
                     <span className="text-[#1955EF] text-[15px] lg:text-[18px] leading-[24px] uppercase pb-1 lg:pb-4 block font-medium">ABOUT US</span>
                     <h2 className="text-[20px] leading-[30px] lg:text-[40px] lg:leading-[50px] pb-2 lg:pb-4 text-black font-bold">Unified <span className="text-[#ff0016]">Digital Solutions</span> for Hospitals, Clinics, and Laboratories</h2>
                     <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-8 pb-5 ${helveticaNeue.className}"><strong>xcelcuré™</strong> is a modern hospital management system integrated with mobile app. Its structure based on the three 
                      keys in the healthcare sector - Technological enablement, Digitization and Automation. Digital transformation with 
                      this Hospital Management System switches traditional hospitals into Smart Hospitals. Moreover. Smart hospitals 
                      have the potential for exponential growth.</p>
                      <Link className="inline-flex items-center gap-10 text-black bg-[#ffffff] font-medium text-xs lg:text-base rounded-[35px] px-2 py-1 pr-1 lg:py-1 pl-4 border-2 border-[#f2f2f2] hover:bg-white hover:text-[#1955ef]" href="/partner-with-us" passHref>
                        Partner With Us
                        <div className="bg-[#1955EF] lg:w-[48px] lg:h-[48px] w-[35px] h-[35px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                  </div>
              </div>
          </div>
       </div>
       {/* About section ends here */}

       {/* middle image section start here */}
        <div className="home_about_section mt-[50px] mb-[20px]">
          <div className="max-w-6xl mx-auto lg:py-4 px-4 lg:px-0">
             <div className="lg:flex gap-4">
                <div className="lg:w-3/12 mb-4 lg:mb-0">
                   <Image src={sort_01} alt='sort_01' /> 
                </div>
                <div className="lg:w-3/12 bg-[#1F47F7] rounded-[30px] pb-4 lg:p-0 mb-4 lg:mb-0">
                  <p className="text-white text-[16px] leading-[20px] p-4">xcelcuré™ unifies hospitals, clinics, and labs on one intelligent platform to boost efficiency, streamline workflows, and enhance patient care.</p>
                  <div className="flex items-center justify-end">
                    <Link className="inline-flex items-center gap-2 mt-2 text-white bg-[#00B149] font-medium text-xs lg:text-sm rounded-[35px] py-2 pr-1 lg:py-1 pl-2 border-2 border-[#00B149] hover:bg-[#000000] hover:text-[#ffffff]" href="/" passHref>
                      Get an Estimate
                      <div className="bg-[#ffffff] w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                        <GoArrowUpRight className="text-black text-xl" />
                      </div>
                    </Link>
                    <Image src={surve_01} alt='surve_01' />
                  </div>
                </div>
                <div className="lg:w-6/12 mb-4 lg:mb-0">
                   <Image src={long_01} alt='long_01' />
                </div>
             </div>
          </div>
        </div>
       {/* middle image section ends here */}

       {/* product section ends here */}
      
       <div className="product_section my-10 lg:my-20">
          <div className="max-w-6xl mx-auto lg:py-4 px-4 lg:px-0">
              <div className="text-center pb-5">
                 <span className="text-[#1955EF] text-[15px] lg:text-[18px] leading-[24px] uppercase lg:pb-4 block font-medium">OUR PRODUCTS</span>
                  <h2 className="text-[25px] leading-[35px] lg:text-[40px] lg:leading-[50px] pb-4 text-black font-bold">Products that we provide at <span className="text-[#ff0016]">xcelcuré™</span></h2>
                  <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-8 pb-5 ${helveticaNeue.className} lg:w-7/12 mx-auto">
                    Discover the integrated hospital, clinic, lab, and pharmacy management, etc solutions that help providers deliver safer, faster, and more connected care.
                  </p>
              </div>

              <ProductsSlider />
              
          </div>
       </div>

       {/* product section ends here */}


       {/* Technology section start here */}
       <div className="technology_section py-0">
          <div className="max-w-6xl mx-auto lg:py-0 px-4 lg:px-0">
              <div className="lg:flex gap-12 py-[15px]">
                  <div className="lg:w-6/12 flex items-center">
                     <div>
                        <span className="text-[#1955EF] text-[15px] lg:text-[18px] leading-[24px] leading-[24px] uppercase lg:pb-4 block font-medium">TECHNOLOGIES USED</span>
                        <h2 className="text-[25px] leading-[35px] lg:text-[40px] lg:leading-[50px] pb-6 text-black font-bold">
                          Technology behind <span className="text-[#ff0016]"> xcelcuré™</span>
                        </h2>
                     </div>
                  </div>
              </div>
              <div className="lg:h-[550px] flex justify-center items-center">
                <button onClick={() => setOpenVideoModal(true)} className="lg:text-white text-[#1955EF] hover:text-[#1955EF] cursor-pointer"><BsFillPlayCircleFill className="text-[70px]" /></button>
              </div>
              <div className="lg:flex gap-12 py-[15px] lg:py-12">
                  <div className="lg:w-5/12">&nbsp;</div>
                  <div className="lg:w-7/12">
                      <p className="text-[15px] text-[#464646] mt-3 min-h-[100]">
                        <strong>Xcelcuré</strong> is a single-page web application built with a dynamic, code-first architecture, 
                        enabling fast and automatic data synchronization via secure REST APIs over TLS 1.2. It is database-agnostic, supports 
                        SSO for mobile access to patient and doctor records, and can be hosted on Linux or Windows. All transactions are encrypted 
                        and stored safely behind a secured virtual network firewall.
                      </p>
                      <Link className="inline-flex mt-5 items-center gap-10 text-black bg-[#ffffff] font-medium text-xs lg:text-sm rounded-[35px] px-3 py-1 pr-1 lg:py-1 pl-4 border-2 border-[#f2f2f2] hover:bg-white hover:text-[#1955ef]" href="/hospital-management" passHref>
                        Let’s Switch to Xcelcure
                        <div className="bg-[#1955EF] w-[38px] h-[38px] rounded-[100px] flex justify-center items-center">
                          <GoArrowUpRight className="text-white text-xl" />
                        </div>
                      </Link>
                  </div>
              </div>
          </div>
       </div>
       {/* Technology section ends here */}


        {/* FEATURES section ends here */}
      
       <div className="product_section my-10 lg:my-20">
          <div className="max-w-6xl mx-auto lg:py-4 px-4 lg:px-0">
              <div className="text-center pb-5">
                 <span className="text-[#1955EF] text-[15px] lg:text-[18px] leading-[24px] uppercase pb-4 block font-medium">FEATURES</span>
                  <h2 className="text-[25px] leading-[35px] lg:text-[40px] lg:leading-[50px] pb-4 text-black font-bold">Key Features of <span className="text-[#ff0016]">xcelcuré™</span></h2>
                  <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-8 pb-5 ${helveticaNeue.className} lg:w-7/12 mx-auto">
                    Discover the core capabilities that make <strong>xcelcuré™</strong> a powerful, secure, and efficient healthcare management solution.
                  </p>
              </div>

              <FeaturesSlider />

          </div>
       </div>

       {/* FEATURES section ends here */}


       {/* MULTICHANNEL section start here */}
       <div className="home_about_section mt-[50px] mb-[20px]">
          <div className="max-w-6xl mx-auto lg:py-4 px-4 lg:px-0">
              <div className="lg:flex gap-12">
                  <div className="lg:w-6/12 flex items-center mb-4 lg:mb-0">
                     <div>
                        <span className="text-[#1955EF] text-[15px] lg:text-[18px] leading-[24px] uppercase pb-4 block font-medium">MULTICHANNEL</span>
                        <h2 className="text-[25px] leading-[35px] lg:text-[40px] lg:leading-[50px] pb-4 text-black font-bold">
                          We are <span className="text-[#ff0016]">enthusiastic </span> about your succes
                        </h2>
                        <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-8 pb-5 ${helveticaNeue.className}">
                          We provide extensive multi-channel support and end-to-end training services to help your team confidently adapt to the 
                          platform and maintain uninterrupted operations. Whether you prefer email, chat, phone, or in-app assistance, our experts are 
                          always ready to guide you. Connect through your preferred mode of communication at any time—we’re here to support you whenever you need help.
                        </p>
                          <Link className="inline-flex items-center gap-10 text-black bg-[#ffffff] font-medium text-xs lg:text-base rounded-[35px] px-2 py-1 pr-1 lg:py-1 pl-4 border-2 border-[#f2f2f2] hover:bg-white hover:text-[#1955ef]" href="/get-estimate" passHref>
                            Get an Estimate
                            <div className="bg-[#1955EF] lg:w-[48px] lg:h-[48px] w-[35px] h-[35px] rounded-[100px] flex justify-center items-center">
                              <GoArrowUpRight className="text-white text-xl" />
                            </div>
                          </Link>
                     </div>
                  </div>
                   <div className="lg:w-6/12">
                    <Image src={social_img} alt='social_img' />
                  </div>
              </div>
          </div>
       </div>
       {/* MULTICHANNEL section ends here */}

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
       <div id="request_a_demo" className="home_about_section my-[40px] lg:my-[70px]">
          <div className="max-w-6xl mx-auto lg:py-4 px-4 lg:px-0">
              <div className="text-center mb-6 lg:mb-12">
                <span className="text-[#1955EF] text-[15px] lg:text-[18px] leading-[24px] uppercase lg:pb-4 block font-medium">CONTACT US</span>
                <h2 className="text-[25px] leading-[35px] lg:text-[40px] lg:leading-[50px] pb-4 text-black font-bold">
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




       {/* Video Modal start here */}
       {/* <Modal size="7xl" show={openVideoModal} onClose={() => setOpenVideoModal(false)}>
        <ModalHeader className="border-0 pb-0 absolute right-[-8px] top-[-8px]">&nbsp;</ModalHeader>
        <ModalBody className="bg-[#dbdbdb] rounded-[10px] pt-14 px-2 pb-2">
          <div className="space-y-6 video_section">
             <iframe src="https://www.youtube.com/embed/kXzvluUbWxY?si=OBO66naiH0paiPqT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </ModalBody>
      </Modal> */}
      {/* Video Modal ends here */}




    </div>
  );
}
