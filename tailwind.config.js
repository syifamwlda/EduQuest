/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        edu: {
          blue: "#4776E6",
          sky: "#65C7F7",
          purple: "#8B70E8",
          yellow: "#FFD85E",
          coral: "#FF8A80",
          mint: "#69DDB5",
          bg: "#F6F8FF",
          surface: "#FFFFFF",
          text: "#253453",
          muted: "#7B86A5",
          orange: "#FF9F43",
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(71, 118, 230, 0.08)',
        'card': '0 4px 20px -2px rgba(37, 52, 83, 0.06)',
        'floating': '0 14px 40px -4px rgba(71, 118, 230, 0.16)',
        'glow-blue': '0 0 20px rgba(71, 118, 230, 0.35)',
        'glow-yellow': '0 0 20px rgba(255, 216, 94, 0.45)',
      },
      animation: {
        'bounce-subtle': 'bounce 2s infinite',
        'pulse-glow': 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}

