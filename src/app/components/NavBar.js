"use client"
import { useState, useEffect } from "react";
import clsx from "clsx";
import { Button } from "antd";
import { AiOutlineClose } from "react-icons/ai";
import { LuMenu } from "react-icons/lu";
import { MdLogin, MdOutlinePersonOutline } from "react-icons/md";
import '../globals.css';

export const NavBar = () => {
  const [isSideMenuOpen, setMenu] = useState(false);

  const navLinks = [
    {
      label: "Нүүр",
      href: "/" 
    },
    {
      label: "Танилцуулга",
      href: "#about" 
    },
    {
      label: "Давуу тал",
      href: "#features" 
    },
    {
      label: "Хамтрагч байгууллагууд",
      href: "#partners" 
    },
    {
      label: "Холбоо барих",
      href: "#contact" 
    }
  ]

  return(
      <div className="fixed top-0 z-20 w-full flex justify-center items-center h-16 sm:h-20 2xl:h-22 bg-white border-b">
        <div className="w-4/5 h-full flex justify-between items-center">
          {/* Logo */}
          <div className="h-full flex gap-0 sm:gap-8 items-center w-full sm:w-fit">
            <Button icon={<LuMenu className="text-xl"/>} size="medium" className="custom-btn block 2xl:hidden cursor-pointer hover:bg-gray-400 flex items-center" onClick={() => setMenu(true)}/>
            <a href="/" className="py-4 h-full flex flex-1 justify-center sm:flex-none">
              <img src="/images/logo.png" className="h-full"/>
            </a>
          </div>

          {/* Navigations */}
          <div className="flex items-center">
            <div className="hidden 2xl:block 2xl:flex 2xl:items-center">
              {navLinks.map((d, i)=>(
                <Button key={i} type="text" size="large" href={d.href} className="px-4 py-6 text-[#777777]" style={{ borderRadius: 0 }}>{d.label}</Button>
              ))}
              <div className="px-4 text-[#777777]">|</div>
            </div>
            <div className="hidden flex items-center sm:block">
              <Button type="default" size="large" className="px-2 mx-2 sm:px-4" style={{ borderRadius: 5, fontWeight: 500 }}>Нэвтрэх</Button>
              <Button type="primary" size="large" className="px-2 mx-2 sm:px-4" style={{ borderRadius: 5, fontWeight: 500 }}>Бүртгүүлэх</Button>
            </div>
          </div>

          {/* Responsive sidebar */}
          <div className={clsx("fixed h-full w-screen top-0 right-0", {"hidden":!isSideMenuOpen})}>
            <section className="h-screen max-w-full bg-[#FFFFFF] flex flex-col absolute top-0 left-0 px-8 z-50 items-center flex-1">
              <div className="w-80 h-20 py-4 flex justify-between">
                <img src="/images/logo.png" className="h-full flex-1 text-center object-contain"/>
                <AiOutlineClose className="text-xl text-[#8E8E93] cursor-pointer" onClick={() => setMenu(false)}/>
              </div>
              <div className="block flex flex-col items-center sm:hidden">
                <Button type="text" icon={<MdLogin className="text-lg"/>} className="w-80 flex justify-start py-6 text-[#8E8E93]">Нэвтрэх</Button>
                <Button type="text" icon={<MdOutlinePersonOutline className="text-lg"/>} className="w-80 flex justify-start py-6 text-[#8E8E93]">Бүртгүүлэх</Button>
              </div>
              <div className="flex flex-col items-center">
                {navLinks.map((d, i)=>(
                  <Button key={i} type="text" href={d.href} className="w-80 py-6 flex justify-start text-[#8E8E93]" onClick={() => setMenu(false)}>{d.label}</Button>
                ))}
              </div>
            </section>
            <div className="box-content	bg-black/50 backdrop-blur-sm h-full" onClick={() => setMenu(false)}/>
          </div>
        </div>
      </div>
  );
}