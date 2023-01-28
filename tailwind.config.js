/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors:{
        'secundario':'#F7F7FF',
        'azulOscuro':'#24253c',
        'gris':'#2F3233',
        'grisClaro':'#7B817F',
        'principal':'#070600',
        'black':'#040410',
        'Alabaster':'#E8EBE4',
        // 'xanadu':'#FFFCF9',
        // 'platinum':'#E7E5DF',
        // 'xiketic':'#0F1020'
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
