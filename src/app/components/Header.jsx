"use client"
import { HiOutlineMenuAlt1, HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useState } from "react";
import { Button, Input } from "antd";
import '../globals.css';
import { LuSearch } from "react-icons/lu";

export const Header = () => {
    const [isSideMenuOpen, setMenu] = useState(false);
    const navLinks = [
        {
            label: "Эхлэл",
            href: "http://localhost:3000/"
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
        }
    ]
    const MenuIcon = () => {
        return (
          <div onClick={() => setMenu(true)} className="group cursor-pointer">
            <span className="block h-0.5 mb-1.5 w-6 bg-black group-hover:w-3 transitionMenu"></span>
            <span className="block h-0.5 mb-1.5 w-3 bg-black group-hover:w-5 transitionMenu"></span>
            <span className="block h-0.5 w-5 bg-black group-hover:w-6 transitionMenu"></span>
          </div>
        );
    };
    const { Search } = Input;
    return(
        <div className="w-full h-16 md:h-20 2xl:h-24 px-10 bg-white border-b fixed top-0 z-20 flex justify-center items-center">
            <div className="w-full h-full flex items-center justify-between">
                {/* Menu, Logo */}
                <div className="h-full w-fit flex gap-4 items-center flex-shrink-0 mr-8">
                    <MenuIcon/>
                    <div className="h-full">
                        <img src="../../../../images/logo.png" className="h-full py-5 object-contain"/>
                    </div>
                </div>
                <Search prefix={<LuSearch className="text-[#BFBFBF]"/>} placeholder="Бүтээгдэхүүн хайх" allowClear enterButton="Хайх" size="large" className="w-full px-8"/>
                <div className="flex gap-12 items-center">
                    <a href="../../page.js" className="font-semibold hover:underline hover:text-blue-500">Эхлэл</a>
                    <a href="https://smartorder.mn/categories" className="font-semibold hover:underline hover:text-blue-500">Ангилал</a>
                    <a href="https://smartorder.mn/vendors" className="font-semibold hover:underline hover:text-blue-500">Нийлүүлэгч</a>
                    <a href="/" className="font-semibold text-blue-500 hover:underline hover:text-blue-500">Захиалга</a>
                    <IoPersonCircleOutline className="text-5xl"/>
                </div>
            </div>
        </div>
    );
}