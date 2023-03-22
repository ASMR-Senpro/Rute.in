/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "serif"],
    },
    fontSize: {
      "h-xl": ["3rem", "4.5rem"], // 48px
      "h-lg": ["2rem", "3rem"], // 32px
      "h-md": ["1.5rem", "2.25rem"], // 24px
      "h-sm": ["1.25rem", "1.875rem"], // 20px

      "b-xl": ["1.125rem", "2rem"], // 18px
      "b-lg": ["1rem", "1.75rem"], // 16px
      "b-md": ["0.875rem", "1.5rem"], // 14px
      "b-sm": ["0.75rem", "1.3rem"], // 12px
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFF",
      black: "#000",
      neutral: {
        50: "#FAFAFA",
        100: "#D3D3D3",
        300: "#B5B5B5",
        500: "#787878",
        700: "#5B5B5B",
        900: "#2A2A2A",
      },
      beige: {
        50: "#F0EEEB",
        100: "#E8E5E0",
        300: "#D2CCC3",
        500: "#9F9990",
        700: "#6E685F",
        900: "#59544D",
      },
      cyan: {
        50: "#E1F0F2",
        100: "#C3E2E5",
        300: "#AACFD5",
        500: "#68B8C1",
        700: "#298A91",
        900: "#206E74",
      },
      orange: {
        50: "#FDDBCB",
        100: "#FCC2A5",
        300: "#FBB592",
        500: "#F98E59",
        700: "#F87433",
        900: "#F75A0D",
      },
      red: {
        50: "#F3B5BB",
        100: "#EE909A",
        300: "#E76A78",
        500: "#E76A78",
        700: "#B43845",
        900: "#872A34",
      },
    },
  },
  plugins: [],
}
