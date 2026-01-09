'use client';

import { Button, Label, Textarea, TextInput } from "flowbite-react";
import Image from "next/image";
import contact_img from "../../assets/imagesource/contact_img.png";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getEstimate } from "../Reducer/EstimateSlice";
import { toast } from "react-toastify";

const GetEstimateForm=()=>{
    const{loading}=useSelector((state)=>state?.estimate)
        const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch=useDispatch()
  const onSubmit=(data)=>{
    dispatch(getEstimate(data)).then((res)=>{
        console.log("res",res);
        
        if(res?.payload?.status_code===200){
            toast.success(res?.payload?.message)
        }
    })
  }
    return(
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="lg:flex gap-12">
        <div className="lg:w-7/12">
        <div className="flex gap-4 form_area mb-4">
            <div className="w-6/12">
            <div className="mb-0 block">
                <Label htmlFor="base">Name <span>*</span></Label>
            </div>
            <TextInput {...register("name",{required:"Name is required"})} id="base" type="text" sizing="md" placeholder="Enter Name" />
            {
                errors?.name&&(
                    <span className="text-red-500">
                        {errors?.name?.message}
                    </span>
                )
            }
            </div>
            <div className="w-6/12">
            <div className="mb-0 block">
                <Label htmlFor="base">Email Address <span>*</span></Label>
            </div>
            <TextInput {...register("email",{required:"Email is required"})} id="base" type="email" sizing="md" placeholder="Enter Email" />
              {
                errors?.email&&(
                    <span className="text-red-500">
                        {errors?.email?.message}
                    </span>
                )
            }
            </div>
        </div>
        <div className="flex gap-4 form_area mb-4">
            <div className="w-6/12">
            <div className="mb-0 block">
                <Label htmlFor="base">Phone <span>*</span></Label>
            </div>
            <TextInput {...register("phone",{required:"Phone is required"})} id="base" type="text" sizing="md" />
              {
                errors?.phone&&(
                    <span className="text-red-500">
                        {errors?.phone?.message}
                    </span>
                )
            }
            </div>
            <div className="w-6/12">
            <div className="mb-0 block">
                <Label htmlFor="base">Organization Name <span>*</span></Label>
            </div>
            <TextInput {...register("organization_name",{required:"Organization name required"})} id="base" type="text" sizing="md" />
             {
                errors?.organization_name&&(
                    <span className="text-red-500">
                        {errors?.organization_name?.message}
                    </span>
                )
            }
            </div>
        </div>
        <div className="flex gap-4 form_area mb-4">
            <div className="w-6/12">
            <div className="mb-0 block">
                <Label htmlFor="base">Website <span>*</span></Label>
            </div>
            <TextInput {...register("website",{required:"Website Required"})} id="base" type="text" sizing="md" />
             {
                errors?.website&&(
                    <span className="text-red-500">
                        {errors?.website?.message}
                    </span>
                )
            }
            </div>
            <div className="w-6/12">
            <div className="mb-0 block">
                <Label htmlFor="base">Business <span>*</span></Label>
            </div>
            <TextInput {...register("business",{required:"Business Required"})}id="base" type="text" sizing="md" />
              {
                errors?.business&&(
                    <span className="text-red-500">
                        {errors?.business?.message}
                    </span>
                )
            }
            </div>
        </div>
        <div className="lg:flex gap-4 form_area mb-4">
            <div className="w-full">
            <div className="mb-0 block">
                <Label htmlFor="base">Message <span>*</span></Label>
            </div>
            <Textarea {...register("message",{required:"Message required"})} id="comment" placeholder="Enter Message"  rows={5} />
              {
                errors?.message&&(
                    <span className="text-red-500">
                        {errors?.message?.message}
                    </span>
                )
            }
            </div>
        </div>
        <div className="form_area submit_btn">
            <Button

            type="submit"
            disabled={loading}
            className={loading ? "opacity-60 cursor-not-allowed" : ""}
            >{loading?"Waiting...":"Request Estimate"}
            </Button>
        </div>
        </div>
         
        <div className="lg:w-5/12 mt-4 lg:mt-0">
        <Image src={contact_img} alt='contact_img' />
        </div>
        </div>
        </form>
        </>
    )
}
export default GetEstimateForm