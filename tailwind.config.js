/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors:{
        'secundario':'#F7F7FF',
        'grisClaro':'#7B817F',
        'principal':'#070600',
        'semiOscuro':'rgba(0, 0, 0, 0.5)',
        'Alabaster':'#E8EBE4',
        'hover':'#0F0F0F',
      },
      fontFamily:{
        'Roboto':'Roboto', 
        'Montserrat':'Montserrat',
      },
      backgroundImage:{
        'Twitter':"./img/css.svg",
        'Git':"./img/git.svg",
        'GitHub':"./img/github.svg",
        'Html':"./img/html5-.svg",
        'Css':"./img/css.svg",
        'Tailwind':"./img/tailwind.svg",
        'Js':"./img/javascript.svg",
        'FrontendM':"./img/frontendmentor.svg",
        'Linkedin':"./img/linkedin.svg",
        'Mail':"./img/mail.svg",
        
      },
      width:{
        '375':'375px',
        '896':'896px'
      },
   
      
    },
  },
  plugins: [],
}
