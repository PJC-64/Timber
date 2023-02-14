const fetch = require('node-fetch')

module.exports = async (location = "Gateshead") => {
    const res1 = await fetch("https://wttr.in/" + location + "?format=4");
    const res2 = await res1.text();
    console.log(res2);
    return res2;
}
