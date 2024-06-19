"use client";
import { React, useRef } from 'react';
import './globals.css'

import { Carousel } from 'antd';
import Counter from './components/Home/Counter';
import { Title } from './components/Home/Title';
import { CardItem1 } from './components/Home/CardItem1';
import { CardItem2 } from './components/Home/CardItem2';
import { CardItem3 } from './components/Home/CardItem3';
import { NavBar } from './components/Home/NavBar';

import { BsGlobe2 } from "react-icons/bs";
import { GrTasks } from "react-icons/gr";
import { LuBadgeDollarSign } from "react-icons/lu";


import { FaCubes, FaFacebookF, FaTwitter, FaLinkedin, FaYoutube, FaLevelDownAlt, FaCube, FaUserPlus, FaSlidersH, FaRegClock, FaRegImage, FaGift, FaCheckCircle, FaUserTimes, FaRegMoneyBillAlt, FaCreditCard, FaCloud, FaLock, FaComments } from "react-icons/fa";
import { MdUploadFile, MdLaptopMac, MdMonitor } from "react-icons/md";

import { TbArrowsJoin2 } from "react-icons/tb";
import { HiOutlineUserGroup } from "react-icons/hi";
import { PiChartLineUpBold } from "react-icons/pi";

import { FiPhone, FiMail } from "react-icons/fi";
import { FaRegCopyright } from "react-icons/fa6";

import { CgWebsite } from "react-icons/cg";


export default function Home() {
  const triggerRef = useRef(null);
  return (
    <main className="bg-white">
      <NavBar/>
      {/* Content */}
      <div className="w-full z-10 2xl:mt-20 xs:mt-16 flex flex-col items-center">
        {/* Carousel */}
        <section className="w-full">
          <Carousel arrows infinite={true} autoplay arrowSize="20" className="w-full">
            <img src="/images/car1.png"/>
            <img src="/images/car2.png"/>
            <img src="/images/car3.png"/>
          </Carousel>
        </section>

        {/* Танилцуулга */}
        <section id="about" className="text-center w-3/4 py-12 xl:py-20 flex flex-col items-center">
          <Title title="Системийн танилцуулга"/>
          <div className="text-xs md:text-sm xl:text-base">Smart Order - систем нь бөөний худалдаа эрхлэгч (бэлтгэн нийлүүлэгч тал) болон жижиглэн худалдаа эрхлэгчдийн (захиалагч тал)
            хоорондын бараа бүтээгдэхүүний захиалга, хүргэлтийг автоматжуулсан B2B систем юм. Захиалагч онлайнаар бараа бүтээгдэхүүний
            захиалгыг хүссэн үедээ гар утсаар, вэб-ээр, компьютер дээрх дэсктоп програмаар үүсгэх боломжтой бөгөөд тэдгээр захиалгыг 
            Бэлтгэн нийлүүлэгч тал онлайнаар хүлээн авах, удирдах боломжтой.
          </div>
          <img src="/images/order.webp" className="mt-8"/>
        </section>

        {/* Давуу тал */}
        <section id="features" className="w-3/4 py-12 xl:py-20 flex flex-col items-center">
          <Title title="Давуу тал"/>
          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
            <CardItem1 Icon={BsGlobe2} title="Онлайн захиалга хийх" desc="Та Smart Order системийг ашигласнаар Монгол улсад үйл ажиллагаа явуулж буй бүхий л 
                бэлтгэн нийлүүлэгчийн барааны мэдээллүүдийг авах, захиалга хийх, 
                хүргүүлэх боломжтой болно."/>
            <CardItem1 Icon={MdMonitor} title="Хүссэн төхөөрөмжөө ашиглах" desc="Та Smart Order системийг Android, iOS аль ч үйлдлийн системтэй гар утаснаас, 
                вэб хөтчөөр, суурин болон зөөврийн компьютераас хүссэн төхөөрөмжөөрөө 
                ашиглан захиалга өгөх боломжтой."/>
            <CardItem1 Icon={FaCloud} title="Smart ERP - системээс захиалга өгөх" desc="Хэрвээ та Smart ERP-ийн аль нэг програмыг ашигладаг бол тухайн 
                програм дотроосоо шууд Smart Order системийг ажиллуулж захиалга өгөх боломжтой."/>
            <CardItem1 Icon={GrTasks} title="Байгууллага хоорондын ERP систем холболт" desc="Smart Order систем нь Smart ERP-ийн дэд системүүдтэй интеграци 
                хийгдсэн бөгөөд Байгууллага хоорондын системүүдийг холбох дундын шийдэл болон хөгжүүлэгдсэн."/>
            <CardItem1 Icon={FaRegMoneyBillAlt} title="Дотоод системээсээ барааны мэдээллээ удирдах" desc="Smart ERP системээс шууд барааны мэдээлэл, үнэ, хөнгөлөлт, урамшуулал, 
                үлдэгдлийн мэдээллүүдээ илгээх, шинэчлэх боломжтой. Олон системүүд 
                нээж ажиллах шаардлагагүй болно."/>
            <CardItem1 Icon={FaCreditCard} title="Онлайн төлбөр, Зээлийн үйлчилгээ" desc="Smart Order систем дээр арилжааны банкнуудын онлайн төлбөр төлөлтийн холболтууд 
                хийгдэж байгаа бөгөөд, мөн банк бус санхүүгийн байгууллагуудын зээлийн 
                аппликейшнүүдтэй холбогдох хөгжүүлэлтүүд хийж байна."/>
            <CardItem1 Icon={LuBadgeDollarSign} title="Урамшуулал, Хөнгөлөлт, Бонус" desc="Захиалга хийх бүртээ оноо цуглуулах, дараагийн захиалгадаа 
                зарцуулах боломжуудтай бөгөөд, төрөл бүрийн хөнгөлөлт урамшуулал зарлагдана."/>
            <CardItem1 Icon={FaLock} title="Аюулгүй, Найдвартай ажиллагаа" desc="Систем нь Дата төв дээр байршуулсан тусгай сервер дээр ажилладаг 
                учраас доголдол саатал гарахгүй, байнгын найдвартай ажиллана."/>
            <CardItem1 Icon={FaComments} title="24/7 support" desc="Систем нь Дата төв дээр байршуулсан тусгай сервер дээр ажилладаг 
                учраас доголдол саатал гарахгүй, байнгын найдвартай ажиллана."/>
          </div>
        </section>

        {/* Counter */}
        <section className="w-full py-12 xl:py-20 sm:py-40 text-white text-lg sm:text-2xl bg-[#3772FF] flex items-center justify-center" ref={triggerRef}>
          <div className="w-4/5 grid grid-cols-2 gap-8 lg:w-3/4 lg:grid-cols-4 justify-between place-items-start">
            <div className="flex flex-col">
              <TbArrowsJoin2 size="48px" className="mb-4"/>
              <Counter start={0} end={325} duration={2000} trigger={triggerRef} text="Нийлүүлэгчийн тоо"/>
            </div>
            <div className="flex flex-col">
              <FaCubes size="48px" className="mb-4"/>
              <Counter start={0} end={31158} duration={2000} trigger={triggerRef} text="Барааны тоо"/>
            </div>
            <div className="flex flex-col">
              <HiOutlineUserGroup size="48px" className="mb-4"/>
              <Counter start={0} end={17968} duration={2000} trigger={triggerRef} text="Захиалагчийн тоо"/>
            </div>
            <div className="flex flex-col">
              <PiChartLineUpBold size="48px" className="mb-4"/>
              <Counter start={0} end={1497} duration={2000} trigger={triggerRef} text="Сарын дундаж захиалга"/>
            </div>
          </div>
        </section>

        {/* Нийлүүлэгч танд */}
        <section className="w-3/4 py-12 xl:py-20 flex flex-col items-center">
          <Title title="Манай систем нийлүүлэгч танд"/>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
            <CardItem2 Icon={FaLevelDownAlt} title="Зардлыг бууруулна (10%-50%)" desc="Бэлтгэн нийлүүлэгч байгууллагын захиалга авах, түгээлт борлуулалт хийхтэй холбоотой 
            явагддаг процессыг автоматжуулж, шаардлагагүй нэмэлт зардлуудыг бууруулах боломжийг олгоно."/>
            <CardItem2 Icon={FaCube} title="Барааны дэлгэрэнгүй мэдээлэл хүргэх хялбар болно" desc="Шинээр ирсэн бараанд зориулж танилцуулга, брошур бэлтгэх, 
            тараах материал явуулах шаардлагагүй болно. Барааны дэлгэрэнгүй мэдээллүүдээ системдээ бүртгээд бүх харилцагчид хүргэх боломжтой."/>
            <CardItem2 Icon={FaUserPlus} title="Харилцагчийн тоо, шинэ борлуулалтын сувгууд нэмэгдэнэ" desc="Системийг ашиглаж буй бүх харилцагчид танай бараа 
            бүтээгдэхүүний мэдээллийг цаг алдалгүй шууд авах боломжтой болно. Ингэснээр өмнө нь борлуулалт хийж байгаагүй шинэ 
            харилцагч нар нэмэгдэх, борлуулалтын сувгаа өргөжүүлэх боломж үүснэ."/>
            <CardItem2 Icon={FaSlidersH} title="Үйлдвэрлэл, татан авалтын хэмжээг бодитоор тооцоолно" desc="Захиалгын тоо хэмжээнд суурилсан үйлдвэрлэл, татан авалтыг 
            хэрэгжүүлсэнээр бодит тооцоолол хийх боломжтой болох бөгөөд, үр ашиггүй зардлуудыг бууруулна."/>
            <CardItem2 Icon={FaRegClock} title="Цаг хугацаа хэмнэнэ" desc="Онлайнаар буюу интернетээр дамжуулж захиалга хүлээн авсанаар асар их цаг хугацааг хэмнэх 
            боломжтой юм. Тухайн өдрийн захиалгуудыг оройд нь эсвэл маргааш нэгтгэж хүлээн авах биш тэр дор нь хүлээж авах, хүргэлтэнд гаргах ч боломжтой."/>
            <CardItem2 Icon={MdUploadFile} title="Шинэ захиалгууд автоматаар дотоод ERP систем рүү орж ирнэ" desc="Smart order систем дээр бүртгэгдсэн шинэ захиалгууд танай 
            Smart ERP- систем дээр шууд орж ирнэ. Тусдаа бүртгэл хийх, дахин шивих зэрэг гараар хийгддэг бүх үйлдлүүд бүрмөсөн байхгүй болно."/>
            <CardItem2 Icon={PiChartLineUpBold} title="Борлуулалт өснө" desc="Шинэ борлуулалтын суваг нэмэгдсэнээр захиалга авч чаддаггүй, алддаг байсан борлуулалтууд өөрсдөө орж 
            ирэх болно. Ингэснээр борлуулалтын дүн болон тоо хэмжээг дээд хэмжээнд хүртэл нэмэгдүүлэх боломжтой."/>
            <CardItem2 Icon={FaRegImage} title="Онцгой шинэ бараа, баннер сурталчилгаа хүргэнэ" desc="Захиалагчдад онцгой бараанууд, шинээр нэмэгдсэн бараануудын мэдээлэл
             хүргэх боломжтой бөгөөд нэмэлт баннер сурталчилгаанууд байршуулах боломжтой."/>
          </div>
        </section>

        {/* Худалдан авагч танд */}
        <section className="p-12 xl:p-16 bg-[#3772FF] w-full flex justify-center items-center">
          <div className="w-full sm:w-3/4 flex flex-col justify-center items-center">
            <Title divClassName="text-white" hrClassName="bg-white" title="Манай систем худалдан авагч танд"/>
            <div className="w-full mb-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <CardItem3 Icon={FaCube} title="Барааны дэлгэрэнгүй мэдээлэл авах хялбар болно" desc="Бэлтгэн нийлүүлэгч байгууллагуудын 
              шинэ буюу өмнө нь авч байгаагүй бараануудын дэлгэрэнгүй мэдээллийг авах нэг системээс хялбар авах боломжтой. Эндээс 
              та бүх төрлийн бараа бүтээгдэхүүний ерөнхий мэдээлэл, орц найрлага, хэрэглэх заавар, үнэ, хөнгөлөлт урамшууллын мэдээллийг авч болно."/>
              <CardItem3 Icon={CgWebsite} title="Бүх нийлүүлэгчийн танилцуулга, барааны мэдээллийг авна" desc="Бэлтгэн нийлүүлэгч байгууллагуудын танилцуулга, 
              тэдгээрийн борлуулдаг бараа бүтээгдэхүүнийг хайх, шүүх, харьцуулах боломжтой болно. Ингэснээр сонголт хийх боломж нь нэмэгдэнэ."/>
              <CardItem3 Icon={MdLaptopMac} title="Хүссэн төхөөрөмжөө ашиглан 24/7 захиалга үүсгэх" desc="Та өглөө, орой хэдийд ч байсан өөрийн завтай үедээ худалдан 
              авалтын захиалгыг үүсгэх боломжтой. Ингэхдээ гар утаснаасаа, компьютер-с ямар ч төхөөрөмжөөр захиалгаа үүсгэх, боломжтой."/>
              <CardItem3 Icon={FaGift} title="Урамшуулал, Хөнгөлөлтийн мэдээлэл авна" desc="Шинээр зарлагдсан хөнгөлөлт, урамшууллын мэдээллүүд таны гар 
              утсанд шууд мэдэгдэх бөгөөд идэвхитэй явагдаж буй хөнгөлөлт урамшууллын мэдээллүүдийг ч авч болно."/>
              <CardItem3 Icon={FaCheckCircle} title="Захиалгын төлөв хянах, удирдах боломжтой болно" desc="Өөрийн чинь захиалгыг тухайн байгууллага хүлээж авсан эсэх, 
              хүргэхээр гаргасан эсэх, хүргэсэн эсэх бүх төлвүүдийг хянаж явах боломжтой бөгөөд цаг тухай бүрт нь танд мэдэгдэл очих болно."/>
              <CardItem3 Icon={FaUserTimes} title="Худалдааны төлөөлөгч, Түгээгчийг хүлээх шаардлагагүй болно" desc="Захиалга өгөх гэж худалдааны төлөөлөгчийг хүлээх, 
              утсаар олон дахин ярих шаардлагагүй болно. Та Smart Order - програм руугаа ороод л хүссэн бараагаа захиална."/>
              <CardItem3 Icon={FaRegMoneyBillAlt} title="Зээлээр татан авалт хийх боломжууд үүснэ" desc="Smart Order системд холболт хийгдсэн байгууллагуудын зээлийн 
              боломжуудаар худалдан авалтаа хийх боломжтой."/>
              <CardItem3 Icon={FaCreditCard} title="Нэхэмжлэхүүдээ хянах, төлбөр төлөх боломжтой болно" desc="Захиалга үүсгээд холбоотой нэхэмжлэхээ шууд хүлээж авах боломжтой. 
              Энэ нь автоматаар үүсэх бөгөөд таны төлбөрийг автоматаар шалгаж захиалгыг тань баталгаажуулна."/>
            </div>
          </div>
        </section>

        {/* Апп татах */}
        <section className="w-full flex justify-center items-center py-16 xl:py-24">
          <div className="w-3/4 grid grid-cols-1 gap-8 xl:grid-cols-2 xl:gap-0 place-items-center">
            <div className="flex flex-col gap-6">
              <div className="font-bold leading-6 text-base md:leading-10 md:text-3xl lg:leading-relaxed lg:text-4xl">
                Та өөрийн гар утаснаасаа SmartOrder аппликейшныг ашиглан захиалга хийж болно.
              </div>
              <div className="flex gap-4">
                <a href="https://apps.apple.com/us/app/smart-order-mobile/id1535159480" target="_blank">
                  <img src="/images/app-store.webp"/>
                </a>
                <a href="https://play.google.com/store/apps/details?id=smartlogic.ordermobile.droid" target="_blank">
                  <img src="/images/google-play.webp"/>
                </a>
              </div>
            </div>
            <img src="/images/phone.png"/>
          </div>
        </section>

        {/* Хамтрагч байгууллагууд */}
        <section id="partners" className="w-full flex flex-col justify-center items-center py-12 xl:py-20">
          <Title title="Хамтрагч байгууллагууд"/>
          <div className="w-3/4 grid grid-cols-3 gap-2 py-8 lg:grid-cols-4 xl:grid-cols-6 place-items-center">
            <img src="/images/companies/smart-logic.webp"/>
            <img src="/images/companies/naran-foods.webp"/>
            <img src="/images/companies/naran-cosmetics.webp"/>
            <img src="/images/companies/max-exim.webp"/>
            <img src="/images/companies/v.webp"/>
            <img src="/images/companies/bimex-holding.webp"/>
            <img src="/images/companies/crm.webp"/>
            <img src="/images/companies/jazar.webp"/>
            <img src="/images/companies/gsm-group.webp"/>
            <img src="/images/companies/max-market.webp"/>
            <img src="/images/companies/hxt.webp"/>
            <img src="/images/companies/snejnii.webp"/>
            <img src="/images/companies/hvvgiin-gutal.webp"/>
            <img src="/images/companies/tea-world.webp"/>
            <img src="/images/companies/mcbc.webp"/>
            <img src="/images/companies/tech-store.webp"/>
            <img src="/images/companies/world-food.webp"/>
            <img src="/images/companies/food-management.webp"/>
            <img src="/images/companies/focus-point.webp"/>
            <img src="/images/companies/unimat.webp"/>
            <img src="/images/companies/jana-vision.webp"/>
            <img src="/images/companies/etm.webp"/>
            <img src="/images/companies/lupilu.webp"/>
            <img src="/images/companies/monbakery.webp"/>
            <img src="/images/companies/lavai.webp"/>
            <img src="/images/companies/world-sweets.webp"/>
            <img src="/images/companies/hvn-od.webp"/>
            <img src="/images/companies/gelato.webp"/>
            <img src="/images/companies/electro-complect.webp"/>
            <img src="/images/companies/oyog-impex.webp"/>
            <img src="/images/companies/martin-trade.webp"/>
            <img src="/images/companies/hih.webp"/>
            <img src="/images/companies/dorwon-olzii.webp"/>
            <img src="/images/companies/sts-foods.webp"/>
            <img src="/images/companies/ochir-daginas.webp"/>
            <img src="/images/companies/vlemj-organic.webp"/>
            <img src="/images/companies/vndsen-hvns.webp"/>
            <img src="/images/companies/random.webp"/>
            <img src="/images/companies/tsk-winery.webp"/>
            <img src="/images/companies/svv-huwitsaat.webp"/>
            <img src="/images/companies/og-family.webp"/>
            <img src="/images/companies/hos-iweel.webp"/>
            <img src="/images/companies/hvns-service.webp"/>
            <img src="/images/companies/dans-dvvren.webp"/>
            <img src="/images/companies/dugui.webp"/>
            <img src="/images/companies/x.webp"/>
            <img src="/images/companies/tae.webp"/>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div id="contact" className="w-full sm:px-16 lg:px-24 py-8 bg-gray-100 flex justify-center items-center">
        <div className="w-full p-4 flex flex-col gap-4 justify-between items-center lg:w-3/4 lg:flex-row lg:gap-16 lg:items-start">

          <div className="flex flex-col items-center lg:items-start text-gray-500">
            <div className="inline-flex items-center gap-4">
              <FiPhone className="flex-shrink-0 text-sm sm:text-base"/>
              <a href="tel:+97677019090" target="_blank" className="text-xs md:text-base text-blue-500 visited:text-purple-500 hover:underline">7701 9090</a>
            </div>
            <div className="inline-flex items-center gap-4">
              <FiMail className="flex-shrink-0 text-sm sm:text-base"/>
              <a href="mailto:info@smartorder.mn" target="_blank" className="text-xs md:text-base text-blue-500 visited:text-purple-500 hover:underline">info@smartorder.mn</a>
            </div>
            <div className="inline-flex items-center gap-4">
              <FaRegCopyright className="flex-shrink-0 text-sm sm:text-base"/>
              <span className="text-xs md:text-base">
                2024
                <a href="https://smartlogic.mn/" target="_blank" className="text-blue-500 visited:text-purple-500 hover:underline"> Smart Logic LLC </a>
                Зохиогчийн эрхээр хамгаалагдсан.
              </span>
            </div>
          </div>

          <div className="flex gap-4 text-blue-500 text-base md:text-lg xl:text-xl">
            <a href="https://www.facebook.com/smartordermn" target="_blank">
              <FaFacebookF/>
            </a>
            <a href="https://x.com/smartlogicmn" target="_blank">
              <FaTwitter/>
            </a>
            <a href="https://www.linkedin.com/company/smart-logic-llc" target="_blank">
              <FaLinkedin/>
            </a>
            <a href="https://www.youtube.com/channel/UC7zaw-uiFL6iVJqpTQ0rE2w" target="_blank">
              <FaYoutube/>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
