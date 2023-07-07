/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      dropShadow: {
      "header-shadow": ' box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;',
                  },
            },
        
        fontFamily: {
          
          lexendG : ['Lexend Giga'],
          AlegreyaSansSC : ['Alegreya Sans SC'],
          Lobster : ['Lobster'],
          LexandExa : ['Lexend Exa'],
          
        },
        },
  plugins: [],
}