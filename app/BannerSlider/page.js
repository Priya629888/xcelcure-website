'use client';

import React from 'react'

import Slider from "react-slick";


import Image from 'next/image';

import { GoArrowUpRight } from "react-icons/go";
import { MdOutlineLocalHospital } from "react-icons/md";
import { BiClinic } from "react-icons/bi";

import banner_img from "../../assets/imagesource/banner_img.png";
import feature_02 from "../../assets/imagesource/feature_02.png";
import feature_03 from "../../assets/imagesource/feature_03.png";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';

const BannerSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
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
                arrows:true,
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

            <div className='px-1 p-0'>
                <Image src={banner_img} alt='banner_img' className='mb-0' />
            </div>
            <div className='px-1 p-0'>
                <Image src={banner_img} alt='banner_img' className='mb-0' />
            </div>
            <div className='px-1 p-0'>
                <Image src={banner_img} alt='banner_img' className='mb-0' />
            </div>


        </Slider>
    </div>
  )
}

export default BannerSlider