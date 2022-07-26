import axios from "axios"

export default (history = null) => {

    const headers = { 'Content-Type': 'application/json'}
    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    const axiosInstance = axios.create({
      baseURL: "http://localhost:8080/",
      headers,
    })

  axiosInstance.interceptors.response.use(
    (response) =>
      new Promise((resolve, reject) => {
        resolve(response)
      }),
    (error) => {
      if (!error.response) {
        return new Promise((resolve, reject) => {
          reject(error)
        })
      }
    }
  )

  return axiosInstance
}