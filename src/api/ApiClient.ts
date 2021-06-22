import axios from 'axios'

class ApiClient {
  apiName = ''

  async getRecepies() {
    return axios.get(this.apiName)
  }
}

export const DataProvider = new ApiClient()
