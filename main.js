const $form=document.getElementById('form')
const sendmail=document.getElementById('sendmail')

$form.addEventListener('submit',sendEmail)
function sendEmail(event){
  event.preventDefault()
  const form=new FormData(this)
  sendmail.setAttribute('href',`mailto:kevin.argumedo@gmail.com?subject=${form.get(email)}&body=${form.get(mensaje)}`)
  sendmail.click()
}