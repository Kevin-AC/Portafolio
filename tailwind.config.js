/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors:{
        'blanco':'#F4F9F8',
        'azulOscuro':'#24253c',
        'gris':'#2F3233',
        'grisClaro':'#7B817F',
        'Borgoña':'#581845 ',
        'black':'#040410',
        'lila':'#e96e76',
       
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
        '845':'845'
      },
      margin:{
        '500':'500px'
      }
      
    },
  },
  plugins: [],
}
