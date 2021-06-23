import axios from 'axios'

class ApiClient {
  apiName = ''

  async getRecipes() {
    return axios.get(this.apiName)
  }
}

export const DataProvider = new ApiClient()
