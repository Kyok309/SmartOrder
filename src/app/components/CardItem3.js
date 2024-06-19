import { Card } from "antd"
import '../globals.css';

export const CardItem3 = ({ Icon, title, desc }) => {
    return(
      <Card hoverable className="group transition-shadow delay-100 ease-in-out transform hover:shadow-[0_4px_20px_0_rgba(255,255,255,1)] lato-font text-[#777777]">
        <div className="flex justify-between">
          <div className="box-content w-10 h-10 sm:w-12 sm:h-12 mr-4 bg-blue-50 rounded flex items-center justify-center flex-shrink-0">
            {Icon && <Icon className="text-xl sm:text-3xl text-[#3772FF] group-hover:-translate-y-6 transition ease-in-out duration-500"/>}
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-base sm:text-xl font-semibold">{title}</div>
            <p className="text-sm sm:text-base">{desc}</p>
          </div>
        </div>
      </Card>
    );
  };