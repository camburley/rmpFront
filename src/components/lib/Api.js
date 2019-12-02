const Axios = require('axios')

const apiHost = (process.env.REACT_APP_API_HOST || 'http://localhost:3002')

module.exports = {

    create: function(data) {
        return Axios.post(apiHost + '/api/contract/contract_list/', data)
          .then(function (response) {
            console.log(response, 'GOT the response')
            return response
          })
          .catch(function (error) {
            return undefined
          })
      },
      







}