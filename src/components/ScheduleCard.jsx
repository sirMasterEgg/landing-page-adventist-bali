import PropTypes from "prop-types";

const ScheduleCard = ({ date, time, title, description }) => {
  return (
    <div className="flex flex-row border border-white text-white w-full lg:w-[411px] min-h-[206px] gap-[25px] rounded-xl bg-primary p-[25px]">
      <div className="bg-[#E8312B] px-4 py-2 rounded h-24 flex flex-col items-center justify-evenly">
        <h1 className="text-center text-white">{date}</h1>
        <h2 className="text-center text-white">{time}</h2>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-archivo text-[22px] font-bold leading-[33px] tracking-wider text-left">
          {title}
        </h1>
        <p className="text-xl leading-[34px] text-left ">{description}</p>
      </div>
    </div>
  );
};
ScheduleCard.propTypes = {
  date: PropTypes.string,
  time: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
export default ScheduleCard;
