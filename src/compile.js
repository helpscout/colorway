const axios = require('axios')
const BASE_URL = 'https://raw.githubusercontent.com/helpscout/colorway/modules/'

const getModuleUrl = url => (url ? `${BASE_URL}${url}` : null)

exports.get = async url => {
  if (!url) return

  const fetchUrl = getModuleUrl(url)
  const results = await axios.get(fetchUrl)

  console.log(results.data)
}

exports.get()
