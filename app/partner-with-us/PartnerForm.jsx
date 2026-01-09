// 'use client';
// import { Button, Label, Select, Textarea, TextInput } from "flowbite-react"
// import contact_img from "../../assets/imagesource/contact_img.png";
// import captcha_img from "../../assets/imagesource/captcha_img.png";
// import { useForm } from "react-hook-form";
// import Image from "next/image";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getCountry } from "../Reducer/PartnerSlice";
// const PartnerForm=()=>{
//     const{loading,countryList}=useSelector((state)=>state?.partner)
//     const dispatch=useDispatch()
//     useEffect(()=>{
// dispatch(getCountry())
//     },[])
//             const {
//             register,
//             handleSubmit,
//             formState: { errors },
//       } = useForm();

// console.log("countryList",countryList);

//     return(
//         <>
//         <form>
//          <div className="lg:flex gap-12">
//             <div className="lg:w-7/12">
//             <div className="flex gap-4 form_area mb-4">
//                 <div className="w-6/12">
//                 <div className="mb-0 block">
//                     <Label htmlFor="base">Name <span>*</span></Label>
//                 </div>
//                 <TextInput id="base" type="text" sizing="md" placeholder="Enter Name" />
//                 </div>
//                 <div className="w-6/12">
//                 <div className="mb-0 block">
//                     <Label htmlFor="base">Email Address <span>*</span></Label>
//                 </div>
//                 <TextInput id="base" type="email" sizing="md" placeholder="Enter Email" />
//                 </div>
//             </div>
//             <div className="flex gap-4 form_area mb-4">
//                 <div className="w-6/12">
//                 <div className="mb-0 block">
//                     <Label htmlFor="base">Phone <span>*</span></Label>
//                 </div>
//                 <TextInput id="base" type="text" sizing="md" />
//                 </div>
//                 <div className="w-6/12">
//                 <div className="mb-0 block">
//                     <Label htmlFor="base">Organization Name <span>*</span></Label>
//                 </div>
//                 <TextInput id="base" type="text" sizing="md" />
//                 </div>
//             </div>
//             <div className="flex gap-4 form_area mb-4">
//                 <div className="w-6/12">
//                 <div className="mb-0 block">
//                     <Label htmlFor="base">Job Level <span>*</span></Label>
//                 </div>
//                 <TextInput id="base" type="text" sizing="md" />
//                 </div>
//                 <div className="w-6/12">
//                 <div className="mb-0 block">
//                     <Label htmlFor="base">Country <span>*</span></Label>
//                 </div>
//                 {/* <TextInput id="base" type="text" sizing="md" /> */}
//                 <Select>
//                     <option>Select Country</option>
//                     {
//                         countryList?.data?.map((country)=>(
//                             <option>{country?.label}</option>
//                         ))
//                     }
//                 </Select>
//                 </div>
//             </div>
//             <div className="flex gap-4 form_area mb-4">
//                 <div className="w-6/12">
//                 <div className="mb-0 block">
//                     <Label htmlFor="base">Website <span>*</span></Label>
//                 </div>
//                 <TextInput id="base" type="email" sizing="md" />
//                 </div>
//                 <div className="w-6/12">
//                 <div className="mb-0 block">
//                     <Label htmlFor="base">Business <span>*</span></Label>
//                 </div>
//                 <TextInput id="base" type="text" sizing="md" />
//                 </div>
//             </div>
//             <div className="lg:flex gap-4 form_area mb-4">
//                 <div className="lg:w-6/12">
//                 <div className="mb-0 block">
//                     <Label htmlFor="base">Message <span>*</span></Label>
//                 </div>
//                 <Textarea id="comment" placeholder="Enter Message" required rows={5} />
//                 </div>
//                 <div className="lg:w-6/12">
//                 <div className="mb-0 block">
//                     &nbsp;
//                 </div>
//                 <div className="mt-8">
//                     <Image src={captcha_img} alt='captcha_img' className="w-9/12" />
//                 </div>
//                 </div>
//             </div>
//             <div className="form_area">
//                 <Button type="submit">Request Partner</Button>
//             </div>
//             </div>
//             <div className="lg:w-5/12 mt-4 lg:mt-0">
//             <Image src={contact_img} alt='contact_img' />
//             </div>
//         </div>
//         </form>
//         </>
//     )
// }
// export default PartnerForm

"use client";

import { Button, Label, Select, Textarea, TextInput } from "flowbite-react";
import contact_img from "../../assets/imagesource/contact_img.png";
import captcha_img from "../../assets/imagesource/captcha_img.png";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { getCountry, partnerWithUs } from "../Reducer/PartnerSlice";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";

const PartnerForm = () => {
  const dispatch = useDispatch();
  const { loading, countryList } = useSelector((state) => state.partner);
  const recaptchaRef = useRef(null);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const handleCaptchaChange = (value) => {
    if (value) {
      setIsCaptchaVerified(true);
    } else {
      setIsCaptchaVerified(false);
    }
  };

  useEffect(() => {
    dispatch(getCountry());
  }, [dispatch]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    if (!isCaptchaVerified) {
      toast.error("Please complete the Captcha");
      return;
    }
    dispatch(partnerWithUs(data)).then((res) => {
      if (res?.payload?.status_code === 200) {
        toast.success(res?.payload?.message);
        reset();
        setIsCaptchaVerified(false);
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="lg:flex form_area gap-12">
        <div className="lg:w-7/12">
          {/* Name + Email */}
          <div className="flex gap-4 mb-4">
            <div className="w-6/12">
              <Label>Name *</Label>
              <TextInput
                placeholder="Enter Name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <span className="text-red-500 text-xs">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className="w-6/12">
              <Label>Email *</Label>
              <TextInput
                type="email"
                placeholder="Enter Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                })}
              />
              {errors.email && (
                <span className="text-red-500 text-xs">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>

          {/* Phone + Organization */}
          <div className="flex gap-4 mb-4">
            <div className="w-6/12">
              <Label>Phone *</Label>
              <TextInput
                {...register("phone", {
                  required: "Phone is required",
                  minLength: { value: 10, message: "Invalid phone number" },
                })}
              />
              {errors.phone && (
                <span className="text-red-500 text-xs">
                  {errors.phone.message}
                </span>
              )}
            </div>

            <div className="w-6/12">
              <Label>Organization *</Label>
              <TextInput
                {...register("organization_name", {
                  required: "Organization name is required",
                })}
              />
              {errors.organization_name && (
                <span className="text-red-500 text-xs">
                  {errors.organization_name.message}
                </span>
              )}
            </div>
          </div>

          {/* Job Level + Country */}
          <div className="flex gap-4 mb-4">
            <div className="w-6/12">
              <Label>Job Level *</Label>
              <TextInput
                {...register("job_level", {
                  required: "Job level is required",
                })}
              />
              {errors.job_level && (
                <span className="text-red-500 text-xs">
                  {errors.job_level.message}
                </span>
              )}
            </div>

            <div className="w-6/12">
              <Label>Country *</Label>
              <Select
                {...register("country_id", { required: "Country is required" })}
              >
                <option value="">Select Country</option>
                {countryList?.data?.map((country) => (
                  <option key={country.value} value={country.value}>
                    {country.label}
                  </option>
                ))}
              </Select>
              {errors.country && (
                <span className="text-red-500 text-xs">
                  {errors.country.message}
                </span>
              )}
            </div>
          </div>

          {/* Website + Business */}
          <div className="flex gap-4 mb-4">
            <div className="w-6/12">
              <Label>Website *</Label>
              <TextInput
                {...register("website", { required: "Website is required" })}
              />
              {errors.website && (
                <span className="text-red-500 text-xs">
                  {errors.website.message}
                </span>
              )}
            </div>

            <div className="w-6/12">
              <Label>Business *</Label>
              <TextInput
                {...register("business", { required: "Business is required" })}
              />
              {errors.business && (
                <span className="text-red-500 text-xs">
                  {errors.business.message}
                </span>
              )}
            </div>
          </div>

          {/* Message */}
          <div className="flex gap-4 mb-4">
            <div className="w-6/12">
              <Label>Message *</Label>
              <Textarea
                rows={5}
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && (
                <span className="text-red-500 text-xs">
                  {errors.message.message}
                </span>
              )}
            </div>

            <div className="w-6/12 mt-8">
              {/* <Image src={captcha_img} alt="captcha_img" className="w-9/12" /> */}
              <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              onChange={handleCaptchaChange}
            />
            </div>
          </div>

          {/* Submit */}
          <div className="form_area submit_btn">
            <Button
              type="submit"
              disabled={loading||!isCaptchaVerified}
              className={(loading || !isCaptchaVerified)? "opacity-60 cursor-not-allowed" : ""}
            >
              {loading ? "Waiting" : "Request Partner"}
            </Button>
          </div>
        </div>

        <div className="lg:w-5/12 mt-4">
          <Image src={contact_img} alt="contact_img" />
        </div>
      </div>
    </form>
  );
};

export default PartnerForm;
