import { Card } from "antd"
import '../globals.css';

export const CardItem1 = ({ Icon, title, desc }) => {
    return(
      <Card hoverable className="group p-4 transition ease-in-out delay-100 hover:-translate-y-2 lato-font text-[#777777]">
        <div className='box-content w-12 h-12 mb-8 bg-blue-50 rounded flex items-center justify-center'>
          {Icon && <Icon size="28px" className="text-[#3772FF] group-hover:translate-x-6 transition ease-in-out duration-500"/>}
        </div>
        <div className="text-xl mb-2 font-bold">{title}</div>
        <p className="text-base">{desc}</p>
      </Card>
    );
  };