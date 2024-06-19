export const Title = ({ divClassName = "", hrClassName = "", title }) => {
  return(
    <div>
      <div className={`text-center text-lg sm:text-2xl font-bold mt-8 ${divClassName}`}>{title}</div>
      <hr className={`w-24 h-1 mx-auto my-4 bg-blue-400 border-0 rounded md:mb-10 md:mt-4 ${hrClassName}`}/>
    </div> 
  );
};