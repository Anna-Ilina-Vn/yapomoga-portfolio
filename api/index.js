import axios from 'axios'

export const Apisful = axios.create({
  // We are using apisful.com as a backend for this e-commerce website
  baseURL: 'https://api.apisful.com/v1/collections/',
  headers: {
    'X-Api-Key': 'VtX7dlufT04KduJzKfEJx1_boE0cMSXp-1wnj6q4D9w'
  },
  validateStatus (status) {
    return status >= 200 && status < 500
  }
})