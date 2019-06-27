import axios from 'axios'

export default {

  fetchObjetoCollection () {
    return axios.get()
      .then(response => {
        return response.data
      })
  },

  fetchSingleObjeto (id) {
    return axios.get()
      .then(response => {
        return response.data
      })
  }
}
