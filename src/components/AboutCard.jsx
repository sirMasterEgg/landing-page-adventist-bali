import PropTypes from "prop-types";

const AboutCard = ({ icon, title, description }) => {
  return (
    <div className="border border-white text-white w-full h-auto xl:w-[411px] xl:h-[380px] bg-primary">
      <div
        className="flex flex-col p-16 gap-4"
        style={{
          height: "calc(100% - 16px)",
        }}
      >
        <img src={icon} alt={`${title} Icon`} className="w-16" />
        <h1 className="font-archivo text-[26px] font-bold leading-[44px] tracking-tighter text-left">
          {title}
        </h1>
        <p>{description}</p>
      </div>
      <div className="h-[16px] bg-[#E8312B]"></div>
    </div>
  );
};
AboutCard.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
export default AboutCard;
