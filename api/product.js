import { Apisful } from '~/api/index.js'

export default {
  async list (filter) {
    const response = await Apisful.get('products/', { params: { filter: JSON.stringify(filter) } })
    return response.data.results
  },

  async get (productId) {
    const response = await Apisful.get(`products/${productId}/`, { params: { expand: 'id' } })
    return response.data
  }
}