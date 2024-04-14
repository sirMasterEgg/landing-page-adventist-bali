const MapsEmbed = () => {
  // #gmap-canvas .text-marker{}.map-generator{max-width: 100%; max-height: 100%; background: none;
  return (
    <>
      <iframe
        style={{
          height: "100%",
          width: "100%",
          maxWidth: "100%",
          background: "none",
        }}
        src="https://www.google.com/maps/embed/v1/place?q=Seventh+Day+Adventist+Church+Hang+Tuah+Bali,+Jalan+Drupadi,+Panjer,+Denpasar+City,+Bali,+Indonesia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
      ></iframe>
    </>
  );
};
export default MapsEmbed;
