/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
        sm: "20px",
        md: "24px",
        lg: "32px",
        xl: "48px",
        "2xl": "52px",
        "3xl": "76px",
        "4xl": "136px",
        "5xl": "160px",
      },
    },
    screens: {
      xxs: "375px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1366px",
      "2xl": "1600px",
      "3xl": "1920px",
      "4xl": "2560px",
      "5xl": "3840px",
    },
    extend: {
      colors: {
        primary: "#131424",
        secondary: "#393A47",
        accent: "#F13024",
      },
      backgroundImage: {
        explosion: 'url("/bg-explosion.png")',
        circles: 'url("/bg-circles.png")',
        circleStar: 'url("/circle-star.svg")',
        site: 'url("/site-bg.svg")',
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
      },
      fontFamily: {
        sora: [`var(--font-sora)`, "sans-serif"],
      },
    },
  },
  container: {
    center: true,
    padding: {
      DEFAULT: "15px",
      sm: "20px",
      md: "24px",
      lg: "32px",
      xl: "40px",
      "2xl": "48px",
      "3xl": "56px",
      "4xl": "76px",
      "5xl": "96px",
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
