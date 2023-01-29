const $form=document.getElementById('form')
const sendmail=document.getElementById('sendmail')

$form.addEventListener('submit',sendEmail)
function sendEmail(event){
  event.preventDefault()
  const form=new FormData(this)
  console.log(form.get('email'))
  sendmail.setAttribute('href',`mailto:kevin.argumedo@gmail.com?subject=${email}&body=${form.get(mensaje)}`)
  sendmail.click()
}