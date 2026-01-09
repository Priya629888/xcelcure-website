import React from 'react';
import Link from "next/link";
import Image from 'next/image';

import { Label, TextInput, Textarea, Datepicker, Button  } from "flowbite-react";

import hospital_banner from "../../assets/imagesource/hospital_banner.png";
import social_img from "../../assets/imagesource/social_img.png";
import contact_img from "../../assets/imagesource/contact_img.png";
import captcha_img from "../../assets/imagesource/captcha_img.png";
import hospital_01 from "../../assets/imagesource/hospital_01.png";
import crm_img from "../../assets/imagesource/crm_img.png";

import crm_img_01 from "../../assets/imagesource/crm_img_01.png";
import crm_img_02 from "../../assets/imagesource/crm_img_02.png";
import crm_img_03 from "../../assets/imagesource/crm_img_03.png";
import crm_img_04 from "../../assets/imagesource/crm_img_04.png";
import crm_img_05 from "../../assets/imagesource/crm_img_05.png";
import crm_img_06 from "../../assets/imagesource/crm_img_06.png";
import crm_img_07 from "../../assets/imagesource/crm_img_07.png";
import crm_img_08 from "../../assets/imagesource/crm_img_08.png";

import { BiCheck } from "react-icons/bi";

import { GoArrowUpRight } from "react-icons/go";
import { MdMiscellaneousServices } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { BiSolidUniversalAccess } from "react-icons/bi";
import { PiDevicesFill } from "react-icons/pi";
import { BiSolidCustomize } from "react-icons/bi";
import { BiSolidLockAlt } from "react-icons/bi";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { BiSolidUser } from "react-icons/bi";

const page = () => {
  return (
    <div>
        {/* Banner section start here */}
        <div className='banner_area py-0 lg:p-0'>
            <div className="inner_banner_area relative lg:mx-[30px] mx-4 my-5 lg:my-0">
                <Image src={hospital_banner} alt='hospital_banner' className="" />
                <div className="banner_content_area absolute w-full h-full left-0 top-0">
                    <div className='max-w-6xl mx-auto flex justify-center items-center h-full'>
                        <div className="w-full px-0 pt-0 lg:pt-0">
                            <h1 className="text-[18px] leading-[24px] lg:text-[50px] lg:leading-[60px] text-white font-bold mb-0 lg:mb-0 pl-4 lg:pl-0">Privacy <span className='text-[#FF0016]'>Policy</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Banner section ends here */}

        {/* wrapper section start here */}
        <div className='wrapper_section mb-10 px-4 lg:px-0'>
            <div className="max-w-6xl mx-auto lg:py-[80px]">
                <div className='w-full'>
                    <div>
                        <h2 className="text-[19px] leading-[25px] lg:text-[38px] lg:leading-[45px] pb-2 lg:pb-8 text-black font-bold text-center">
                            Privacy Policy <span className="text-[#ff0016]">xcelcuré™</span>
                        </h2>
                        <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-3 pb-3 ${helveticaNeue.className}">
                            When you use xcelcuré mobile app, some personal information is collected from and about you. We are committed to protecting the 
                            security of this information and safeguarding your privacy. This privacy policy sets out the details of the personal information 
                            collected, the manner in which it is collected, by whom as well as the purposes for which it is used. At registration you accepted 
                            the terms of this Privacy Policy and your use of the App signifies your continued acceptance thereof. This Privacy Policy may be 
                            revised from time to time and you will be notified of all such changes. In order to use the App, you will be required to consent 
                            to both the terms of the Privacy Policy and the xcelcure Hospital Management System integrated with Mobile appData Access and 
                            Knowledge Sharing Protocol as revised from time to time.
                        </p>
                        <div className='mb-4'>
                           <p className="text-[#ff0016] font-medium text-sm lg:text-base lg:pb-3 pb-3 ${helveticaNeue.className}">
                               <strong>1. INFORMATION COLLECTED AND MANNER OF COLLECTION</strong>
                            </p>
                            <div className='bg-white border border-[#dfdfdf] rounded-[10px] p-3'>
                                <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className}">
                                    When you register on the App, the following information is collected from you and stored securely on a server operated 
                                    and managed by the cloud datacenter (Microsoft/Digital Ocean/AWS) –
                                </p>
                                <ul className='mb-4 pl-5'>
                                    <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-1 pb-1 ${helveticaNeue.className} list-disc">name</li>
                                    <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-1 pb-1 ${helveticaNeue.className} list-disc">phone number</li>
                                    <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-1 pb-1 ${helveticaNeue.className} list-disc">age</li>
                                    <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-1 pb-1 ${helveticaNeue.className} list-disc">sex</li>
                                    <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-1 pb-1 ${helveticaNeue.className} list-disc">postal address</li>
                                    <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-1 pb-1 ${helveticaNeue.className} list-disc">email address and</li>
                                    <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-1 pb-1 ${helveticaNeue.className} list-disc">same details of your family members (optional)</li>
                                </ul>
                                <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} border-b border-[#dfdfdf] mb-4">
                                    This information will be stored on the Server and a unique digital id (DiD) will be pushed to your App. The DiD will 
                                    thereafter be used to identify you in all subsequent App related transactions and will be associated with any data or 
                                    information uploaded from the App to the Server. At registration, your location details are also captured and uploaded to the Server.
                                </p>
                                <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} border-b border-[#dfdfdf] mb-4">
                                    When any of your family members are admitted in hospital, their billing summary, clinical information will be shared 
                                    with you only. This information will be stored on the Server and a unique digital id (DiD) will be pushed to your App. 
                                    The DiD will thereafter be used to identify you in all subsequent App related transactions and will be associated with any 
                                    data or information uploaded from the App to the Server. At registration, your location details are also captured and uploaded to the Server.
                                </p>
                                <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} border-b border-[#dfdfdf] mb-4">
                                    The App collects your location data and stores it securely on your mobile device.This information will 
                                    only be uploaded to the Server along with your DiD.
                                </p>
                                <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} border-b border-[#dfdfdf] mb-4">
                                    App has provision to upload your medical records – prescriptions, images, diagnostic records and medicines.
                                </p>
                                <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} border-b border-[#dfdfdf] mb-4">
                                   The App has provision of online doctor consultation, appointment booking, upload and sharing of medical 
                                   records with doctor. Payment is done through a secured payment gateway by UPI, debit or credit card,
                                </p>
                                <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className}">
                                   The App shall facilitate the verification of the User identity through the Aadhaar Number of the user for the 
                                   purpose of registration. The Aadhaar number shall not be stored by iPurna App.
                                </p>
                            </div>
                        </div>
                        <div className='mb-4'>
                           <p className="text-[#ff0016] font-medium text-sm lg:text-base lg:pb-3 pb-3 ${helveticaNeue.className}">
                               <strong>2. USE OF INFORMATION</strong>
                            </p>
                            <div className='bg-white border border-[#dfdfdf] rounded-[10px] p-3'>
                                <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className}">
                                   The personal information collected from you at the time of registration under Clause 1(a) above, will be stored on the Server 
                                   and only be used by the Xcelcure Technologies LLP in anonymized, aggregated datasets for the purpose of generating reports, 
                                   heat maps and other statistical visualizations for the purpose of the management of citizen healthcare in the country. Your DiD 
                                   will only be co-related with your personal information in order to communicate to you the probability that you have requested a 
                                   service through our App.
                                </p>
                                <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} border-b border-[#dfdfdf] mb-4">
                                    The information collected from any other user’s mobile device and uploaded and stored on the Server in accordance with Clause 1(b) 
                                    will be used to calculate your probability of having been required medical help or address a medical related query.
                                </p>
                                <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} border-b border-[#dfdfdf] mb-4">
                                    The information collected under Clause 1(c) will be used by the nfinity Navigator Services to evaluate, based on the self-assessment 
                                    tests and the GPS locations from where they are being uploaded, whether a disease cluster is developing at any geographic location.
                                </p>
                                <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} border-b border-[#dfdfdf] mb-4">
                                    The information securely uploaded and stored on the Server under Clause 1(e) will be used to calculate the probability of those 
                                    who need doctor consultation based on specialization.
                                </p>
                                <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} border-b border-[#dfdfdf] mb-4">
                                    The App has provision of online doctor consultation, appointment booking, upload and sharing of medical records with doctor. 
                                    Payment is done through a secured payment gateway by UPI, debit or credit card,
                                </p>
                                <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} border-b border-[#dfdfdf] mb-4">
                                   The information collected under Clause 1(f), 1(g) and 1 (h), shall be used for the purpose of facilitating the 
                                   registration and download required user specific document / report.
                                </p>
                                <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className}">
                                   The information collected under Clause 1 will not be used for any purpose other than those mentioned in Clause 2.
                                </p>
                            </div>
                        </div>
                        <div className='mb-4'>
                           <p className="text-[#ff0016] font-medium text-sm lg:text-base lg:pb-3 pb-3 ${helveticaNeue.className}">
                               <strong>3. RETENTION</strong>
                            </p>
                            <div className='bg-white border border-[#dfdfdf] rounded-[10px] p-3'>
                                <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className}">
                                   All personal information collected from you under Clause 1(a) at the time of registration will be retained for as long as your account 
                                   remains in existence and if any medical or administrative interventions have been commenced under Clause 2, subject to Clause 3(b) below, 
                                   for such period thereafter as is required for such interventions to be completed.
                                </p>
                                <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} border-b border-[#dfdfdf] mb-4">
                                    All personal information collected under Clauses 1(b), 1(c), 1(d) and 1(e) will be retained on the mobile device permanently until 
                                    you uninstall the app or close your account. Prescriptions, medical reports and other documents older than one year will be purged from server.
                                </p>
                                <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className}">
                                    Nothing set out herein shall apply to the anonymized, aggregated datasets generated by the personal data of registered users of the App 
                                    or any reports, heat maps or other visualization created using such datasets. Nothing set out herein shall apply to medical reports, 
                                    diagnoses or other medical information generated by medical professionals in the course of treatment.
                                </p>
                            </div>
                        </div>
                        <div className='mb-4'>
                           <p className="text-[#ff0016] font-medium text-sm lg:text-base lg:pb-3 pb-3 ${helveticaNeue.className}">
                               <strong>4. RIGHTS</strong>
                            </p>
                            <div className='bg-white border border-[#dfdfdf] rounded-[10px] p-3'>
                                <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} border-b border-[#dfdfdf] mb-4">
                                   As a registered user, you have the right to access your profile at any time to add, remove or modify any registration information that you have supplied.
                                </p>
                                <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className}">
                                    You cannot manage the communications that you receive from us or how you receive them. If you no longer wish to use the App you are 
                                    free to delete the App. Please note that deleting the app will delete all the information collected and stored on your phone but 
                                    will not delete any information stored on the cloud. If you wish to delete the registration information referred to in Clause 1(a) 
                                    and stored on the backend servers, you may cancel your registration. Once you confirm that you want to cancel registration, all 
                                    the information you had provided to us under Clause 1(a) will be deleted after the expiry of 30 days from the date of such cancellation.
                                </p>
                            </div>
                        </div>
                        <div className='mb-4'>
                           <p className="text-[#ff0016] font-medium text-sm lg:text-base lg:pb-3 pb-3 ${helveticaNeue.className}">
                               <strong>5. DATA SECURITY</strong>
                            </p>
                            <div className='bg-white border border-[#dfdfdf] rounded-[10px] p-3'>
                                <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className}">
                                    The App is equipped with standard security features to protect the confidentiality and security of your information. 
                                    Data is encrypted in transit as well as at rest. Personal information provided at the time of registration is encrypted 
                                    before being uploaded to the cloud where it is stored in a secure encrypted server. Personal information that is stored in 
                                    the Apps of other registered users that you come in contact with is securely encrypted and is incapable of being accessed by such user.
                                </p>
                            </div>
                        </div>
                        <div className='mb-4'>
                           <p className="text-[#ff0016] font-medium text-sm lg:text-base lg:pb-3 pb-3 ${helveticaNeue.className}">
                               <strong>6. DISCLOSURES AND TRANSFER</strong>
                            </p>
                            <div className='bg-white border border-[#dfdfdf] rounded-[10px] p-3'>
                                <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} border-b border-[#dfdfdf] mb-4">
                                   You have the option to generate a QR code of your current health status that can then be displayed on your phone so that anyone with a 
                                   compatible QR code reader will be able to verify your current health status by scanning the QR code. The QR Code scanning feature 
                                   requires access to the camera on the user’s device. The App can also receive requests for updates of your health status from third 
                                   parties with whom you work or otherwise regularly interact. You will have the option to either accept or reject these update requests. 
                                   If you accept the update request, information about your current health status will be disclosed to such person in accordance with the 
                                   terms of the request that you consented to.
                                </p>
                                <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className}">
                                    Save as otherwise set out in this Clause 6 as well as in Clause 2 above with respect to information provided to persons carrying 
                                    out medical and administrative interventions necessary, No personal information collected by the App will be disclosed or transferred 
                                    to any third party.
                                </p>
                            </div>
                        </div>
                        <div className='mb-4'>
                           <p className="text-[#ff0016] font-medium text-sm lg:text-base lg:pb-3 pb-3 ${helveticaNeue.className}">
                               <strong>7. GRIEVANCES</strong>
                            </p>
                            <div className='bg-white border border-[#dfdfdf] rounded-[10px] p-3'>
                                <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className}">
                                    If you have any concerns or questions in relation to this Privacy Policy, you may address them to the Grievance Officer 
                                    whose name and address are as follows: helpdesk@ipurna.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* wrapper section ends here */}

    </div>
  )
}

export default page