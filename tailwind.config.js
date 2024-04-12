import withMT from "@material-tailwind/react/utils/withMT.js";

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#272727",
        secondary: "#323232",
        ternary: "#151515",
        "form-input": "#3D3D3B",
      },
    },
  },
  plugins: [],
});
