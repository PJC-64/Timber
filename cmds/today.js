const getWeather = require('../utils/weather')
const ora =require('ora')

module.exports = async (args) => {

  try {

    const location = args.location || args.l
    const weather = getWeather(location)

    console.log(weather)

  } catch (err) {

    spinner.stop()
    console.error(err)

  }
}
