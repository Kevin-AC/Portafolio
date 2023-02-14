/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors:{
        'BG':'#F3EFE0',
        'gray':'#6D7275',
        'black':'#000000',
        'flahWhite':'#F1F2F6',
        'background':'#282C33',
        'primary':'#C778DD',
        'gray2':'#ABB2BF',
        'white':'#FFFFFF',
      },
      fontFamily:{
        'FiraCode':'Fira Code'
      },
      backgroundImage:{
        'topography':"url('./Img/topography/topography.svg')"
      },
      width:{
        '584':'584px',
        '330':'330px'
      }
    },
  },
  plugins: [],
}
