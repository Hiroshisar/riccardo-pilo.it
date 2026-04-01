export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        test: "#ff0000",
        "laser-blue": "#1d59c1",
        "dusk-blue": "#374a67",
        "pacific-blue": "#25a6ba",
        "sky-aqua": "#27cae3",
        "custom-white": "#ffffff"
      },

      backgroundImage: {
        "gradient-main":
          "linear-gradient(135deg, #374a67, #1d59c1, #25a6ba, #27cae3)"
      },

      fontFamily: {
        lexend: ["Lexend Exa", "sans-serif"],
        sans: ["ui-sans-serif", "system-ui"],
        mono: ["SUSE Mono", "monospace"]
      },

      fontSize: {
        display: ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h1: ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        h2: ["2rem", { lineHeight: "1.25" }],
        h3: ["1.5rem", { lineHeight: "1.3" }],

        "body-lg": ["1.125rem", { lineHeight: "1.75" }],
        body: ["1rem", { lineHeight: "1.7" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],

        label: ["0.75rem", { letterSpacing: "0.08em" }]
      }
    }
  },

  plugins: []
};
