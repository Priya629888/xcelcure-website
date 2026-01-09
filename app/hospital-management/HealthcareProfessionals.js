'use client';
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const HealthcareProfessionals = () => {
  return (
    <div className='HealthcareMobileApp_area HealthcareProfessionals_area'>
        <Tabs className="flex gap-5 lg:gap-10">

            <div className="w-8/12">
                <TabPanel>
                    <div>
                       <ul className='mb-4 pl-4'>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">Monitoring & improving real-time data for development of independent departments like Housekeeping, Maintenance, F&B, Laundry etc.</li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">Better customer delight and reducing negative review (since issues are addressed instantly). Better patient care resulting in early recovery of patient and thereby increasing business.</li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">KPI (Key Performance Indicator) dashboard highlights hospital performance metrics and alert for any improvement area.</li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">Optimization & Utilization of manpower based on request frequency in certain hours (e.g. In hospitals, frequency of most request of change of linen happens during 3am-8am)</li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">Optimization of inventory and immediate escalation in case of failed TAT, with real time grievance management.</li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">Reducing Clinical Negligence cases using TAT based alarming service to Doctors, Nurse, Patient Parties and associated TPA/Insurance cos -based on digital bed notes/prescriptions- biometric based validation on every round for patient, doctors, nurse.</li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">Facility’s Respective Personnel and authorities gets timely alerts (rather in advance) for all renewal of licenses, date of expiry, etc.</li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">Reduces last minute rush</li>
                       </ul>
                       <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className}">This includes different kind of filing with respective agencies, authorities, etc.</p>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                       <ul className='mb-4 pl-4'>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">In-Patient Treatment history, bed notes are synchronized with Mobile application.</li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">Automated discharge summary</li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">Can see the schedule and manage time and appointments better.</li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">Doctors will be able to see the patient wise bed notes, live patient vitals tagged with timestamp.</li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">Doctors will be able to see if their patients were administered proper treatment on time as per their recommended bed notes. If there is any change in treatment protocol/Bed Notes- needed based on the vitals of patient, doctors can write/edit/add up new bed notes. The same gets ALERTED to NURSING DESK AND NURSING APP ON DUTY.</li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">From anywhere in the world with internet connectivity, doctors will get to see all of their IPD patient statuses.</li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">Convenient to do Video Consultancy/Virtual Consultation (Telemedicine)</li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">This is a unique software which ensures that doctor’s recommended treatment protocols are followed on time on patients. It ensures Nurses administers protocols rightly on time, without missing it.</li>
                       </ul>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                       <ul className='mb-4 pl-4'>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            On duty nurses will get regular & updated alerts on respective patients, based on the doctor’s bed notes (digital). In case of manual bed note only once they need to convert it digitally through the app.
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Nurses will never miss their timely treatment protocol management on patients. Even if they miss unwillingly, they will get alert so that they can administer treatment protocol.
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            If vitals/health gets deteriorated for any patient, the moment they update the same in the nursing app of xcelcure, it will automatically get updated and the on duty doctors will be alerted.
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            xcelcure will segregate and hand over all non-clinical jobs in the hospital to the respective team and automatically will follow up with them with clear monitoring of TAT. In case service requests are missed, or does not arrive on time, the same will be escalated – (Change of linen, mopping floor, increase/reduce ac temp, light not functional, tea/coffee etc.).
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Automated Nursing roster helps prepare optimized roster for nurses.
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Easier Automated AI driven duty handover
                         </li>
                       </ul>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                       <ul className='mb-4 pl-4'>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Patients medical history is maintained with encryption and security.
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Patients can see around their nearby clinical facilities & availabilities - Doctors | Hospital | Diagnostic Centre | Pharmacy
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Once the patient is admitted to xcelcure networked hospital, the patient party will get regular health & billing updates about the patient almost live; which gets updated on xcelcure. The patient party can get to eVisit the patient & also with Doctors
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            xcelcure internally coordinates with insurance companies/Govt. Health Schemes as and when needed and make the claim/cashless process convenient and easier for the patient.
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Patients will be able to take a 2nd opinion based on their available digital health records online instantly from across the globe.
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Many patients as per their need and budget can avail treatment from different healthcare organizations; in planned cases.
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Live bed availability status with geo-tagging.
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Insurance, TPA and corporate hassle-free coordination and cashless facilities.
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Medicine, Vaccine, tests, follow up reminders to patients.
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Updated national and international healthcare tips on a daily basis.
                         </li>
                       </ul>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                       <ul className='mb-4 pl-4'>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Here non-clinical team includes - F&B, Housekeeping, Maintenance, Electrical, Plumbing, Security; Biomedical engg. (Repair, AMC, CMC, Reporting etc.
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            In any hospital, nursing facility and services are havoc dependent on Nursing team’s efficiency, but there is adequate deficiency of Nurse-Patient ratio. Hence there is a tremendous load of non clinical request + clinical practice protocol for nurses
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            xcelcure enables single click -bed/patient wise Service Request Ticket Generation (SRTG) through xcelcure Nursing App Module, which are monitored, tagged with time frame, closed upon closure successfully the service or otherwise escalated.
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Nurses can dedicatedly provide nursing and care to patients instead of following up with other verticals. Improves Patient Delight services and reduce grievances a lot
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Digitally managing entire inventory for one or multiple premises, or across premises. Optimizing and allocation of reqd inventories, based on inventory status alerts management and responsible persons to issue PO, ask for quotations from vendors, indicate the market price and help negotiate with the vendor. If it’s processed well in advance, the cost would be saved; it would be a systematic- option for single click PO. Individual dashboard view with order status, item stock level and reorder level.
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Complete HR Module with role-based access control on application. Complete Finance Module with multi-company architecture. All hospital transactions are classified under multiple profit centres. All financial reports are generated against the profit center.
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Generation of dept wise detailed report along with actionable. Tracker is placed within the application to track unresolved issues and carried forward the next day as the report. Requests are generated from the nursing station for the services of non-clinical departments
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Single window MIS dashboard- vertical wise,
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Complete Finance & Accounting Module- no need for any other accounting software
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Indicative data analytics on scope of improvement
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Single click P&L Statement, Balance Sheet
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Secure , Encrypted, Role based
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Daily end of the day settlement closure of updated Clinical Record Statement Vs. Financial statements
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Geo tagged, availability wise OLA/UBER kind of Ambulance App, integrated with xcelcure Marketplace
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            xcelcure Marketplace would know which facility is having availability and would integrate with the Ambulance App
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Once the patient is picked up in an ambulance through xcelcure app, then the patient details are sent to nearby available selected place by patient/patient parties- accordingly hospital facility is also intimated
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Reduction in waiting
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Saving Golden Hours for treating patients.
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            xcelcure Marketplace and Mobile application helps people find nearby medical facilities like doctor, diagnostic center, pharmacy, blood bank, Oxygen center etc.
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Any person can store, manage family tree medical records using mobile app.- if the treating hospital is a xcelcure network hospital then system automatically pushes all data against respective profile securely.
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Online doctor consultation
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Visibility on current and pending bills Vs. Treatment administered on patients 24x7x365 days
                         </li>
                       </ul>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                       <ul className='mb-4 pl-4'>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Test availability and booking
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Geo tagged sample collection facility
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Clinical Team can directly book tests for IPD/OPD patients
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            xcelcure will segregate and hand over all non-clinical jobs in the hospital to the respective team and automatically will follow up with them with clear monitoring of TAT. In case service requests are missed, or does not arrive on time, the same will be escalated – (Change of linen, mopping floor, increase/reduce ac temp, light not functional, tea/coffee etc.).
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Once test is done and reported the same report is sent to Dr, Patient, Nurse on Duty and Dr on Duty for updation
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Complete Laboratory Management supported with DICOM & PACS
                         </li>
                       </ul>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                       <ul className='mb-4 pl-4'>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Live authenticated database
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Single platform monitoring multiple premises, all beneficiaries under xcelcure networked hospital
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Statement kind report
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Visibility on current and pending bills Vs. Treatment administered on patients 24x7x365 days
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Daily end of the day settlement closure of updated Clinical Record Statement Vs. Financial statements
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Reduction in Clinical Negligence and better patient care
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Identification & Reduction of fraud billing by tallying historic clinical data of patients, similar serial no of medicine sold to other patients from data pool by the iAnalytics platform of xcelcure
                         </li>
                       </ul>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                       <ul className='mb-4 pl-4'>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Drs can write prescription based on available alternative medicine available in the pharmacy stock for OPD/IPD patients
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Depending on OPD patient’s consent , Hospital Pharmacy can keep their respective order ready and thus minimize hospital waiting time
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            IPD, OT direct supply against digital request, stock settlement and billing updation against patient.
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Patients can get online pharmacy or pharmacy delivered from local networked stores.
                         </li>
                         <li className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className} list-disc">
                            Suggestion on Drs prescribed medicine to same molecule generic drugs and thus reduce cost of treatment
                         </li>
                       </ul>
                    </div>
                </TabPanel>
            </div>

            <div className="w-4/12">
                <TabList>
                    <Tab>Hospital Administration</Tab>
                    <Tab>Doctors</Tab>
                    <Tab>Nurse</Tab>
                    <Tab>Patient & Patient Parties</Tab>
                    <Tab>Hospital Non-Clinical Team</Tab>
                    <Tab>Laboratory & Imaging</Tab>
                    <Tab>Health Scheme</Tab>
                    <Tab>Pharmacy</Tab>
                </TabList>
            </div>

        </Tabs>
    </div>
  )
}

export default HealthcareProfessionals