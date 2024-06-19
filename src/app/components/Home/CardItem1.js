import { Card } from "antd"
import '../../globals.css';

export const CardItem1 = ({ Icon, title, desc }) => {
  return(
    <Card hoverable className="group lg:p-4 transition ease-in-out delay-100 hover:-translate-y-2 lato-font text-[#777777]">
      <div className='box-content w-8 h-8 md:w-12 md:h-12 mb-2 md:mb-4 xl:mb-8 bg-blue-50 rounded flex items-center justify-center'>
        {Icon && <Icon className="text-sm md:text-3xl text-[#3772FF] group-hover:translate-x-6 transition ease-in-out duration-500"/>}
      </div>
      <div className="text-sm md:text-lg xl:text-xl font-semibold mb-2">{title}</div>
      <p className="text-xs md:sm xl:text-lg">{desc}</p>
    </Card>
  );
};