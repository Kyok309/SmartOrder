import { Card } from "antd"
import '../../globals.css';

export const CardItem2 = ({ Icon, title, desc }) => {
  return(
    <Card hoverable className="group lg:p-4 transition ease-in-out delay-100 lato-font text-[#777777]">
      <div className="flex justify-between">
        <div className="box-content w-8 h-8 md:w-10 md:h-10 xl:w-12 xl:h-12 mr-4 bg-blue-50 rounded flex items-center justify-center flex-shrink-0">
          {Icon && <Icon className="text-base md:text-2xl xl:3xl text-[#3772FF] group-hover:-translate-y-6 transition ease-in-out duration-500"/>}
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-sm md:text-base xl:text-xl font-semibold">{title}</div>
          <p className="text-xs md:text-sm xl:text-base">{desc}</p>
        </div>
      </div>
    </Card>
  );
};