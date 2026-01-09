"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, Modal, ModalBody, ModalFooter, ModalHeader, Checkbox, Label, TextInput, Select } from "flowbite-react";
import Link from 'next/link';
import  logo from '../../assets/imagesource/logo.png';
import Image from 'next/image';


const Header = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterStepOneModal, setOpenRegisterStepOneModal] = useState(false);
  const [openRegisterStepTwoModal, setOpenRegisterStepTwoModal] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const navbarRef = useRef(null);

  const toggleNavbar = () => {
    console.log('Toggle clicked, current state:', isNavbarOpen);
    setIsNavbarOpen(!isNavbarOpen);
    setIsSubmenuOpen(false); // Close submenu when closing navbar
  };

  // const toggleSubmenu = (e) => {
  //   e.preventDefault();
  //   setIsSubmenuOpen(!isSubmenuOpen);
  //   console.log(isSubmenuOpen, "isSubmenuOpen");
  // };

  const toggleSubmenu = (e) => {
    console.log("togglemenu");
    
  e.preventDefault();
  e.stopPropagation(); // 🔥 important
  setIsSubmenuOpen((prev) => !prev);
};


  const closeNavbar = () => {
     console.log('Closing navbar');
    setIsNavbarOpen(false);
    setIsSubmenuOpen(false);
  };

  // Close on body click (outside navbar)
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
     
  //     const toggleButton = document.querySelector('.toggle_point button');
  //     if (toggleButton && toggleButton.contains(event.target)) {
  //       return; 
  //     }

  //     if (navbarRef.current && !navbarRef.current.contains(event.target)) {
  //       setIsNavbarOpen(false);
  //       setIsSubmenuOpen(false);
  //     }
  //   };

  //   if (isNavbarOpen) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [isNavbarOpen]);


  useEffect(() => {
  const handleClickOutside = (event) => {
    if (!navbarRef.current) return;

    // Ignore clicks inside navbar
    if (navbarRef.current.contains(event.target)) return;

    // Ignore toggle button
    const toggleButton = document.querySelector('.toggle_point button');
    if (toggleButton && toggleButton.contains(event.target)) return;

    closeNavbar();
  };

  if (isNavbarOpen) {
    document.addEventListener("click", handleClickOutside);
  }

  return () => {
    document.removeEventListener("click", handleClickOutside);
  };
}, [isNavbarOpen]);


  const finalRegisterHandler = () => {
    setOpenRegisterStepTwoModal(true);
    setOpenRegisterStepOneModal(false);
  }
  
  return (
    <div>
      <div className="header_section w-full lg:pb-0 bg-white">
        <div className="max-w-6xl mx-auto pt-6 lg:py-8 px-4 lg:px-0">
          <div className="w-full">
            <div className="header_top lg:flex justify-between items-center">
              <div className="flex items-center justify-between w-full lg:w-auto">
                <div className="mr-2 w-5/12 lg:w-auto">
                  <Link href="/" passHref>
                      <Image src={logo} alt='logo' />
                  </Link>
                </div>
                
                {/* Mobile toggle button */}
                <div className="lg:hidden toggle_point">
                  <button 
                    onClick={toggleNavbar}
                    className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-default"
                    aria-expanded={isNavbarOpen}
                  >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="menu_section pb-0 w-full lg:w-auto">
                <div className="main_menu">
                  {/* Desktop and Mobile Menu */}
                  <div 
                    ref={navbarRef}
                    className={`${isNavbarOpen ? 'block' : 'hidden'} lg:block w-full lg:w-auto`}
                    id="navbar-default"
                  >
                    <ul className="flex flex-col lg:flex-row lg:space-x-8 mt-4 lg:mt-0 font-medium border border-gray-100 lg:border-0 rounded-lg bg-gray-50 lg:bg-transparent p-4 lg:p-0">
                      <li onClick={closeNavbar}>
                        <Link href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                            Home
                        </Link>
                      </li>
                      <li onClick={closeNavbar}>
                        <Link href="/about-us" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                          About Us
                        </Link>
                      </li>
                      <li onClick={closeNavbar}>
                        <Link href="/why-us" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                          Why Us?
                        </Link>
                      </li>
                      <li className="relative group">
                        <div 
                          onClick={toggleSubmenu}
                          className="block py-2 px-0 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 cursor-pointer flex justify-between items-center"
                        >
                          <span className="pt-1">Our Products</span>
                          <svg 
                            className={`w-4 h-4 ml-1 transition-transform lg:hidden ${isSubmenuOpen ? 'rotate-180' : ''}`}
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                        <ul className={`${isSubmenuOpen ? 'block' : 'hidden'} lg:hidden lg:group-hover:block pl-4 lg:pl-0 lg:absolute lg:left-0 lg:top-full lg:bg-white lg:shadow-lg lg:rounded-lg lg:mt-0 lg:py-2 lg:min-w-[250px] lg:z-50`}>
                           <li onClick={closeNavbar}>
                               <Link href="/hospital-management" className="block py-2 px-3 text-gray-900 hover:bg-gray-100 lg:hover:bg-blue-50 lg:rounded">Hospital Management</Link>
                           </li>
                           <li onClick={closeNavbar}>
                               <Link href="/lab-management" className="block py-2 px-3 text-gray-900 hover:bg-gray-100 lg:hover:bg-blue-50 lg:rounded">Lab Management</Link>
                           </li>
                           <li onClick={closeNavbar}>
                               <Link href="/clinic-management" className="block py-2 px-3 text-gray-900 hover:bg-gray-100 lg:hover:bg-blue-50 lg:rounded">Clinic Management</Link>
                           </li>
                           <li onClick={closeNavbar}>
                               <Link href="/jewellery-erp" className="block py-2 px-3 text-gray-900 hover:bg-gray-100 lg:hover:bg-blue-50 lg:rounded">Jewellery ERP</Link>
                           </li>
                           <li onClick={closeNavbar}>
                               <Link href="/restaurant-management" className="block py-2 px-3 text-gray-900 hover:bg-gray-100 lg:hover:bg-blue-50 lg:rounded">Restaurant Management</Link>
                           </li>
                           <li onClick={closeNavbar}>
                               <Link href="/billing-inventory-management" className="block py-2 px-3 text-gray-900 hover:bg-gray-100 lg:hover:bg-blue-50 lg:rounded">Billing & Inventory Management</Link>
                           </li>
                           <li onClick={closeNavbar}>
                               <Link href="/hotel-management" className="block py-2 px-3 text-gray-900 hover:bg-gray-100 lg:hover:bg-blue-50 lg:rounded">Hotel Management</Link>
                           </li>
                           <li onClick={closeNavbar}>
                               <Link href="/crm" className="block py-2 px-3 text-gray-900 hover:bg-gray-100 lg:hover:bg-blue-50 lg:rounded">CRM</Link>
                           </li>
                           <li onClick={closeNavbar}>
                               <Link href="/qms" className="block py-2 px-3 text-gray-900 hover:bg-gray-100 lg:hover:bg-blue-50 lg:rounded">QMS</Link>
                           </li>
                        </ul>
                      </li>
                      

                      <li onClick={closeNavbar}>
                        <Link href="/contact-us" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
                
              <div className="mr-0 lg:mr-0 flex items-center mt-6 lg:mt-0 hidden lg:block">
                <div className="flex gap-2">
                  <Link href="/#request_a_demo" className="text-white bg-[#1955EF] cursor-pointer font-medium text-xs lg:text-base rounded-[25px] px-3 py-2 lg:px-8 lg:py-2.5 border-2 border-[#1955EF] hover:bg-white hover:text-[#1955EF]">
                      Schedule a Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header




