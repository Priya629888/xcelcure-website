'use client';
import { configureStore } from '@reduxjs/toolkit';
import EstimateSlice from './EstimateSlice'
import ContactUsSlice from './ContactUsSlice'
import PartnerSlice from './PartnerSlice'
import DemoSlice from './DemoSlice'
const store=configureStore(
    {
        reducer:{
            estimate:EstimateSlice,
            contact:ContactUsSlice,
            partner:PartnerSlice,
            demo:DemoSlice
        },
        devTools: process.env.NODE_ENV
    }
)
export default store