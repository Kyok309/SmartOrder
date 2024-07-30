"use client"
import { IoPersonCircleOutline, IoSearch } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Button, Input, Grid, ConfigProvider } from "antd";
import clsx from "clsx";
import '../../globals.css';

const { useBreakpoint } = Grid;

export const Header = () => {
    const [isSideMenuOpen, setMenu] = useState(false);
    const MenuIcon = () => {
        return (
          <div onClick={() => setMenu(true)} className="group cursor-pointer w-6">
            <span className="block h-0.5 mb-1.5 w-6 bg-black group-hover:w-3 transitionMenu"></span>
            <span className="block h-0.5 mb-1.5 w-3 bg-black group-hover:w-5 transitionMenu"></span>
            <span className="block h-0.5 w-5 bg-black group-hover:w-6 transitionMenu"></span>
          </div>
        );
    };
    const navLinks = [
        {
            label: "Эхлэл",
            href: "http://localhost:3000/"
        },
        {
            label: "Дашборд",
            href: "https://smartorder.mn/dashboard"
        },
        {
            label: "Ангилал",
            href: "https://smartorder.mn/categories"
        },
        {
            label: "Нийлүүлэгч",
            href: "https://smartorder.mn/vendors"
        },
        {
            label: "Захиалга",
            href: "/"
        },
        {
            label: "Нэхэмжлэх",
            href: "https://smartorder.mn/invoices"
        },
        {
            label: "Миний оноо",
            href: "https://smartorder.mn/points"
        },
        {
            label: "Загвар",
            href: "https://smartorder.mn/templates"
        },
        {
            label: "Салбар",
            href: "https://smartorder.mn/branches"
        },
        {
            label: "Захиалагч",
            href: "https://smartorder.mn/customers"
        },
        {
            label: "Лавлах",
            href: "https://smartorder.mn/about"
        }
    ]
    const screens = useBreakpoint();
    const { Search } = Input;
    const SearchInput = () =>{
        return(
            <ConfigProvider
                theme={{
                    components: {
                        Input: {
                            colorBgContainer: '#F3F3F3',
                            controlHeight: 48,
                            fontSize: 16,
                            colorTextPlaceholder: '#818181',
                            lineWidth: 0,
                            algorithm: true,
                        },
                    },
                }}>
                <Search prefix={<IoSearch className="text-[#818181] text-lg mx-2"/>} placeholder="Бүтээгдэхүүн хайх" allowClear 
                enterButton={screens.xl ? (<Button type="primary" className="px-8"><IoSearch className="text-lg ml-2"/><span className="text-base font-semibold mr-2">Хайх</span></Button>) : (<Button type="primary"><IoSearch/></Button>)} className="w-full px-8"/>
            </ConfigProvider>
        );
    }

    return(
        <div className="w-full h-16 md:h-20 2xl:h-24 px-10 bg-white border-b fixed top-0 z-20 flex justify-center items-center">
            {/* Navbar */}
            <div className="w-full h-full flex items-center justify-between">
                {/* Menu, Logo */}
                <div className="h-full w-fit flex gap-4 items-center flex-shrink-0 mr-8">
                    <MenuIcon/>
                    <div className="h-full">
                        <img src="../../../../images/logo.png" className="h-full py-6 object-contain"/>
                    </div>
                </div>
                <SearchInput/>
                <div className="flex gap-12 items-center">
                    <a href="../../" className="font-semibold hover:underline hover:text-blue-500">Эхлэл</a>
                    <a href="https://smartorder.mn/categories" className="font-semibold hover:underline hover:text-blue-500">Ангилал</a>
                    <a href="https://smartorder.mn/vendors" className="font-semibold hover:underline hover:text-blue-500">Нийлүүлэгч</a>
                    <a href="/" className="font-semibold text-blue-500 hover:underline hover:text-blue-500">Захиалга</a>
                    <IoPersonCircleOutline className="text-5xl"/>
                </div>
                {/* Responsive sidebar */}
                <div className={clsx("fixed h-full w-screen top-0 right-0", {"hidden" : !isSideMenuOpen})}>
                    <section className="h-screen max-w-full bg-[#FFFFFF] flex flex-col absolute top-0 left-0 z-50 items-center">
                        <div className="w-52 sm:w-64 h-16 py-2 flex items-center">
                            <AiOutlineClose className="text-xl text-[#8E8E93] cursor-pointer" onClick={() => setMenu(false)}/>
                        </div>
                        <div className="h-full flex flex-col">
                            <div className="w-full bg-gray-100 flex gap-4 py-10">
                                <IoPersonCircleOutline className="text-6xl"/>
                                <div className="flex flex-col gap-4">
                                    <div>Urtnasan</div>
                                    <div>Утас: 88556273</div>
                                </div>
                            </div>
                            <div className="px-6 md:px-10 flex flex-col gap-6">
                                {navLinks.map((d)=>(
                                    <a href={d.href} className={d.label==='Захиалга' ? "w-52 sm:w-60 text-black text-sm hover:underline hover:text-blue-500" : "w-52 sm:w-60 text-black text-sm hover:underline hover:text-blue-500"} onClick={() => setMenu(false)}>{d.label}</a>
                                ))}
                            </div>
                            <div className="py-2 md:py-4 mb-8 px-6 md:px-10 sticky bottom-8">
                                <a href="localhost:3000" className="w-52 sm:w-64 text-black text-sm hover:underline hover:text-blue-500">Гарах</a>
                            </div>
                        </div>
                    </section>
                    <div className="box-content	bg-black/40 h-full" onClick={() => setMenu(false)}/>
                </div>
            </div>
        </div>     
    );
}