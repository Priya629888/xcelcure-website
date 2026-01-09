'use client';
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const HealthcareMobileApp = () => {
  return (
    <div className='HealthcareMobileApp_area'>
        <Tabs className="flex gap-5 lg:gap-10">

            <div className="w-4/12">
                <TabList>
                    <Tab>Citizen Profile</Tab>
                    <Tab>Doctor Profile</Tab>
                    <Tab>Nurse Profile</Tab>
                    <Tab>Admin Profile</Tab>
                    <Tab>Patient Care</Tab>
                    <Tab>Blood Bank</Tab>
                    <Tab>Finance and Inventory</Tab>
                    <Tab>Dashboards / Reports</Tab>
                </TabList>
            </div>

            <div className="w-8/12">
                <TabPanel>
                    <div>
                        <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className}">Citizen can upload family medical records, set vaccine & medicine reminder, order medicine online, get appointment booked 
                        for consultancy, avail doctor consultancy over video conferencing. They can search and avail nearby medical facilities 
                        displayed on mobile from marketplace. In case any of family member get admitted in hospital, billing details, patient status, 
                        doctor consultancy is available.</p>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className}">Doctor gets notified on patient’s admission under him. He can view patient’s medical records, treatment history, 
                        provide advice and prescribe new medicines if required. Doctor gets alert on patient’s criticality. He can even consult 
                        with medicine with video call. Discharge summary input and other medical instruction can be provided easily from the mobile 
                        app. Doctor can also avail nearby medical facilities posted at marketplace from the app.</p>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className}">Nurse can use mobile app to check patient’s medical history, latest advice from doctor, administer medicine. 
                            They can use mobile app for checking roaster. Nurse can also avail nearby medical facilities posted at marketplace from the app.</p>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className}">Hospital administrator can use the mobile app to get updated on latest billing information, bed availabilities, 
                            KPI dashboard, analytics on billing, footfall, service, customer satisfaction and TAT.</p>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className}">Mobile app integrated xcelcure HMS web application have a quality , robust &user friendly OPD management software module , 
                            which is handling lucidly all the OPD KPI's , e.g., Patient registration details , Appointment Scheduler, Visit details 
                            of the patients , Quick entry access, prescription details , Billing information ,admission of the patient/ transferring to 
                            IPD (if required) & final discharging of the patient.</p>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className}">Our xcelcure HMS Software -blood bank module having the parameters of Rapid response to urgent request for blood components , 
                            Checking pre -transfusion samples & request, Assessing of immunological compatibility between doner & patient ,selecting 
                            suitable blood component of each clinical condition, Donor list , Donated blood /and blood products are safe before using to the 
                            patients . xcelcure have performed all this activity effortlessly.</p>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className}">Regarding Inventory management our xcelcure application have a robust module & feature which catering to the process or 
                            procedures of ordering ,storing and utilizing the hospital inventories .For Finance , application have giving all the details 
                            of accountings like group & sub ledger ,voucher, cash/bank book , ledger book and all the related finance parameters execute effortlessly.</p>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        <p className="text-[#69697B] font-medium text-sm lg:text-base lg:pb-5 pb-5 ${helveticaNeue.className}">There are number of dashboard including KPI Dashboard, Revenue & footfall dashboard, Finance dashboard for better management. 
                            There are number of reports to present every minute details of patient care and billing. All reports have export facility in different format.</p>
                    </div>
                </TabPanel>
            </div>
        </Tabs>
    </div>
  )
}

export default HealthcareMobileApp