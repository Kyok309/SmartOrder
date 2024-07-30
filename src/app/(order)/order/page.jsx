"use client"
import { React } from 'react';
import { Header } from '../_components/Header';
import OrderTable from '../_components/OrderTable';
import StateDropdown from '../_components/StateDropdown';
import { DatePicker } from 'antd';
import '../../globals.css'


export default function Order(){
    return(
        <main className="bg-white mt-18 md:mt-24 2xl:mt-28 flex justify-center lato-font">
            <Header/>
            <div className="flex flex-col gap-4 w-11/12 border">
                <div className="text-xl font-semibold mt-8 ml-8">Захиалгын жагсаалт</div>
                <div className="flex gap-8 ml-8 my-4">
                    <StateDropdown/>
                    <DatePicker/>
                </div>
                <div className="w-full flex justify-center items-center">
                <OrderTable/>
                </div>
            </div>
        </main>
    );
}