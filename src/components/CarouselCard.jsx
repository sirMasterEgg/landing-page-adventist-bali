import PropTypes from "prop-types";

const CarouselCard = ({ icon, title, description }) => {
  return (
    <div className="border border-white w-[239px] h-[160px] p-[15px] text-white rounded-2xl">
      <h2 className="font-extrabold text-2xl mb-[10px]">
        <span className="inline-flex gap-[10px]">
          <img src={icon} alt={`${title} Icon`}></img> {title}
        </span>
      </h2>
      <p className="text-lg text-justify">{description}</p>
    </div>
  );
};

CarouselCard.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
export default CarouselCard;
