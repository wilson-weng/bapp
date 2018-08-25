const request = require('../../utils/request.js')

const sendCode = payload => {
  return request.post('mp/code/send', payload)
    .then(res => {
      return res
    })
}

const login = payload => {
  return request.post('mp/login', payload)
    .then(res => {
      return res
    })
    .catch(res => {
      return res
    })
}

module.exports = {
  sendCode,
  login,
}
