import { Card } from "antd"
import '../../globals.css';

const CardItem1 = ({ Icon, title, desc }) => {
  return(
    <Card hoverable className="group lg:p-2 transition ease-in-out delay-100 hover:-translate-y-2 lato-font text-[#777777]">
      <div className='box-content w-8 h-8 md:w-10 md:h-10 xl:w-12 xl:h-12 mb-2 md:mb-4 xl:mb-4 bg-blue-50 rounded flex items-center justify-center'>
        {Icon && <Icon className="text-base md:text-2xl xl:3xl text-[#3772FF] group-hover:translate-x-6 transition ease-in-out duration-500"/>}
      </div>
      <div className="text-sm md:text-base xl:text-xl font-semibold mb-2">{title}</div>
      <p className="text-xs md:text-sm xl:text-base xl:leading-5">{desc}</p>
    </Card>
  );
};
export default CardItem1;