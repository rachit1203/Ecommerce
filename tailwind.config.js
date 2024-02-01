/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#fff",
        button: "#000",
        gray: {
          "100": "#0d0d0d",
          "200": "rgba(0, 0, 0, 0.4)",
          "300": "rgba(0, 0, 0, 0.7)",
          "400": "rgba(0, 0, 0, 0.04)",
          "500": "rgba(255, 255, 255, 0.5)",
          "600": "rgba(0, 0, 0, 0.3)",
          "700": "rgba(0, 0, 0, 0.5)",
          "800": "rgba(250, 250, 250, 0.4)",
          "900": "rgba(250, 250, 250, 0.7)",
        },
        text: "#fafafa",
        "secondary-2": "#db4444",
        salmon: "#f55e5e",
        secondary: "#f5f5f5",
        button1: "#00ff66",
        limegreen: "#00cc33",
        gainsboro: "rgba(217, 217, 217, 0.3)",
        "hover-button": "#e07575",
        powderblue: "#cbe4e8",
        darkslategray: {
          "100": "rgba(51, 51, 51, 0.5)",
          "200": "rgba(51, 51, 51, 0.09)",
        },
        springgreen: "rgba(0, 255, 102, 0.6)",
      },
      spacing: {},
      fontFamily: {
        "title-16px-regular": "Poppins",
        "heading-24px-bold": "Inter",
      },
      borderRadius: {
        "11xs-4": "1.4px",
        "28xl": "47px",
      },
    },
    fontSize: {
      base: "16px",
      xs: "12px",
      xl: "20px",
      "5xl": "24px",
      sm: "14px",
      lgi: "19px",
      "17xl": "36px",
      "3xl": "22px",
      "10xl": "29px",
      "2xs": "11px",
      "29xl": "48px",
      "19xl": "38px",
      "13xl": "32px",
      "7xl": "26px",
      "91xl": "110px",
      "35xl": "54px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
