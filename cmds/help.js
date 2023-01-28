const menus = {
  main: `
    outside [command] <options>

    forecast .................. show 10-day weather forecast
    today ..................... show weather for today
    version ................... show package version
    help ...................... show help menu for a command`,

  today: `
    outside today <options>

    --location, -l  ........... the location to use`,
  
  forecast: `
    outside forecast <options>

    --location, -l ............ the location to use`,
}

module.exports = (args) => {
  const subCmd = args._[0] === 'help'
  ? args._[1]
  : args._[0]

  console.log(menus[subCmd] || menus.main)

}