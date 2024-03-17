/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
			colors: {
				"black": "#171A1D",
				"primary": "#9101AE",
				"white": "#F5EDEB"
			}
		},
  },
  plugins: [],
}

