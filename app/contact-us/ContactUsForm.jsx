'use client';

import { Button, Label, Textarea, TextInput } from "flowbite-react";
import Image from "next/image";
import captcha_img from "../../assets/imagesource/captcha_img.png";
import { useForm } from "react-hook-form";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiLogoGmail, BiSolidPhone } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { contactUs } from "../Reducer/ContactUsSlice";
import { toast } from "react-toastify";

const ContactUsForm=()=>{
    const{loading}=useSelector((state)=>state?.contact)
        const {
        register,
        handleSubmit,
        formState: { errors },
  } = useForm();
  const dispatch=useDispatch()
  const onSubmit=(data)=>{
    dispatch(contactUs(data)).then((res)=>{
        if(res?.payload?.status_code===200){
            toast.success(res?.payload?.message)
        }
    })
  }
  
    return(
        <>
    <form onSubmit={handleSubmit(onSubmit)}>
         <div className="lg:flex gap-12">
    <div className="lg:w-7/12 mb-8 lg:mb-0">
        <div className="mb-6">
            <h2 className="text-[19px] leading-[25px] lg:text-[40px] lg:leading-[50px] pb-4 text-black font-bold">
            Get in touch <span className="text-[#ff0016]">with us</span>   
            </h2>
            <p className="text-[#464646] font-medium text-sm lg:text-base lg:pb-0 pb-0 ${helveticaNeue.className}">
            Start your journey with xcelcuré™ and upgrade your hospital, clinic, or laboratory to a smarter, unified digital ecosystem.
            </p>
        </div>
        <div className="flex gap-4 form_area mb-4">
            <div className="w-6/12">
                <div className="mb-0 block">
                <Label htmlFor="base">Name <span>*</span></Label>
                </div>
                <TextInput {...register("name",{ required: "Name is required" })} id="base" type="text" sizing="md" placeholder="Enter Name" />
             {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
            </div>
            <div className="w-6/12">
                <div className="mb-0 block">
                <Label htmlFor="base">Email Address <span>*</span></Label>
                </div>
                <TextInput {...register("email",{required: "Email is required",})} id="base" type="email" sizing="md" placeholder="Enter Email" />
            {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
            </div>
        </div>
        <div className="flex gap-4 form_area mb-4">
            <div className="w-6/12">
                <div className="mb-0 block">
                <Label htmlFor="base">Phone <span>*</span></Label>
                </div>
                <TextInput {...register("phone",{ required: "Phone is required", minLength: { value: 10, message: "Invalid phone number" }})} id="base" type="text" sizing="md" />
                {errors.phone && <span className="text-red-500 text-xs">{errors.phone.message}</span>}
            </div>
            <div className="w-6/12">
                <div className="mb-0 block">
                <Label htmlFor="base">Organization Name <span>*</span></Label>
                </div>
                <TextInput {...register("organization_name",{required: "Organization name is required"})} id="base" type="text" sizing="md" />
                 {errors.organization_name && (
                <span className="text-red-500 text-xs">{errors.organization_name.message}</span>
              )}
            </div>
        </div>
        <div className="flex gap-4 form_area mb-4">
            <div className="w-full">
                <div className="mb-0 block">
                <Label htmlFor="base">Message <span>*</span></Label>
                </div>
                <Textarea {...register("message",{
                required: "Message is required",
              })} id="comment" placeholder="Enter Message"  rows={5} />
            {errors.message && <span className="text-red-500 text-xs">{errors.message.message}</span>}
            </div>
        </div>
        <div className="mb-4">
            <div className="mt-2">
            <Image src={captcha_img} alt='captcha_img' className="w-5/12" />
            </div>
        </div>
        <div className="form_area submit_btn">
        <Button 
        disabled={loading}
        className={loading ? "opacity-60 cursor-not-allowed" : ""}
        type="submit">
          {loading?"Waiting...":"Contact Us"}  
            </Button>
        </div>
    </div>
     <div className="lg:w-5/12 bg-[#1955EF] rounded-[10px] shadow-xl p-5 lg:p-10 mb-6 lg:mb-0">
        <div className='mb-10 pb-8 border-b border-[#5081FF]'>
                            <h3 className='text-[#FFFFFF] text-[19px] leading-[25px] lg:text-[24px] lg:leading-[26px] font-semibold pb-2 lg:pb-4'>Contact Info</h3>
                            <p className='text-[#FFFFFF] text-sm lg:text-[14px] leading-[20px]'>
                                Have questions about digitizing your healthcare facility? Reach out to learn how xcelcuré™ can streamline operations, enhance patient care, and simplify daily workflows.
                            </p>
                        </div>
                        <div className='mb-4 pb-5 flex items-center'>
                            <div className='w-3/12'>
                                    <div className='w-[63px] h-[63px] bg-[#FFFFFF] rounded-full flex items-center justify-center'>
                                    <FaMapMarkerAlt className='text-[#1955EF] text-3xl' />
                                </div>
                            </div>
                            <div className='w-9/12'>
                                <div className='mb-2'>
                                    <p className='text-[#ffffff] text-[18px] lg:text-[18px] leading-[26px] font-semibold pb-0'>Our Location</p>
                                </div>
                                <div className='text-[12px] lg:text-[13px] leading-[16px] font-medium text-[#ffffff] pl-0'>
                                    Module-115, SDF Building, GP Block, Sector V, Bidhannagar, Kolkata, West Bengal - 700091
                                </div>
                            </div>
                        </div>
                        <div className='mb-4 pb-5 flex items-center'>
                            <div className='w-3/12'>
                                    <div className='w-[63px] h-[63px] bg-[#FFFFFF] rounded-full flex items-center justify-center'>
                                    <BiSolidPhone className='text-[#1955EF] text-3xl' />
                                </div>
                            </div>
                            <div className='w-9/12'>
                                <div className='mb-2'>
                                    <p className='text-[#ffffff] text-[18px] lg:text-[18px] leading-[26px] font-semibold pb-0'>Phone Number</p>
                                </div>
                                <div className='text-[12px] lg:text-[13px] leading-[16px] font-medium text-[#ffffff] pl-0'>(+91) 9836149149</div>
                            </div>
                        </div>
                        <div className='mb-4 pb-5 flex items-center'>
                            <div className='w-3/12'>
                                    <div className='w-[63px] h-[63px] bg-[#FFFFFF] rounded-full flex items-center justify-center'>
                                    <BiLogoGmail className='text-[#1955EF] text-3xl' />
                                </div>
                            </div>
                            <div className='w-9/12'>
                                <div className='mb-2'>
                                    <p className='text-[#ffffff] text-[18px] lg:text-[18px] leading-[26px] font-semibold pb-0'>Email Id</p>
                                </div>
                                <div className='text-[12px] lg:text-[13px] leading-[16px] font-medium text-[#ffffff] pl-0'>admin@xcelcure.com</div>
                                <div className='text-[12px] lg:text-[13px] leading-[16px] font-medium text-[#ffffff] pl-0'>icare@xcelcure.com</div>
                            </div>
                        </div>
    </div>
    </div>
    </form>
        </>
    )
}
export default ContactUsForm