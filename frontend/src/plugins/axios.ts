import axios from 'axios'

const URL = import.meta.env.VITE_APP_LOCAL_HOST

const axiosIns = axios.create({
  baseURL: URL,
})

export default axiosIns
