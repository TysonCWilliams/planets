const api = axios.create({
  baseURL: "http://localhost:3000/api/",
  timeout: 10000
})

function getStars() {
  api.get('/stars').then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
}