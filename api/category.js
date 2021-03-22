import { Apisful } from '~/api/index.js'

export default {
  async list () {
    const response = await Apisful.get('categories/')
    return response.data.results
  }
}