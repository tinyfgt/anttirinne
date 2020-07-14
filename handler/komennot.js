const { readdirSync } = require ("fs");
const { table } = require("console");
const ascii = require ("ascii-table")
const table = new ascii().setHeading("komento", "Load status")
module.exports = (client) => {

    readdirSync(`./komennot/${dir}/`).filter(f => f.endsWith(".js"));
}