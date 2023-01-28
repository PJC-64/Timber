const getWeather = require('../utils/weather')
const ora = require('ora')

module.exports = async (args) => {

  const spinner = ora().start()

  try {

    const location = args.location || args.l
    const weather = getWeather(location)

    spinner.stop()

    console.log(`Current conditions in ${location}:`)
    console.log(`\t${weather.condition.temp} deg ${weather.condition.text}`)

  } catch (err) {

    spinner.stop()
    console.error(err)

  }
}
