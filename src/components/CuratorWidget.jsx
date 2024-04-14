import React, { useEffect } from "react";

// custom css button
// button.crt-load-more {
//   border: 1px solid #fff !important;
//   width: 100%;
//   padding: 1.25rem; /* 5 * 0.25rem = 1.25rem */
//   color: #fff !important; /* White color */
//   font-weight: 700; /* Bold font weight */
//   transition-property: all;
//   transition-duration: 0.5s; /* 500ms */
//   text-transform: uppercase;
//   background-color: rgb(255 255 255 / 0%) !important;
// }
// button.crt-load-more:hover {
//   background-color: #fff !important; /* White color */
//   color: #000 !important;
// }

const CuratorWidget = ({ feedId }) => {
  const loadScript = (src, libraryId) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.id = libraryId;
      document.body.appendChild(script);

      script.onload = () => {
        // add a small timeout to give it time to load
        setTimeout(() => {
          resolve(true);
        }, 100);
      };
    });
  };

  useEffect(() => {
    loadScript(`https://cdn.curator.io/published/${feedId}.js`);
  }, [feedId]);

  return <div data-crt-feed-id={feedId}></div>;
};

export default CuratorWidget;
