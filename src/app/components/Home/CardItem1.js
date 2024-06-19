import { Card } from "antd"
import '../../globals.css';

export const CardItem1 = ({ Icon, title, desc }) => {
  return(
    <Card hoverable className="group lg:p-4 transition ease-in-out delay-100 hover:-translate-y-2 lato-font text-[#777777]">
      <div className='box-content w-10 h-10 sm:w-12 sm:h-12 mb-8 bg-blue-50 rounded flex items-center justify-center'>
        {Icon && <Icon className="text-xl sm:text-3xl text-[#3772FF] group-hover:translate-x-6 transition ease-in-out duration-500"/>}
      </div>
      <div className="text-base sm:text-xl font-semibold mb-2">{title}</div>
      <p className="text-sm sm:text-base">{desc}</p>
    </Card>
  );
};