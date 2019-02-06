const fs = require('fs')
const Path = require('path')
const {Context} = require('@yodata/transform')
const createViewPlugin = require('@yodata/transform-plugin-view')

/**
 * tags a relative path to a yaml file
 * returns a new Context built from that file
 *
 * @param {string} pathname
 * @returns {Context}
 */
module.exports = function loadContext(pathname) {
    const filePath = Path.resolve(__dirname,pathname)
    return Context.fromYaml(fs.readFileSync(filePath,'utf8')).use(createViewPlugin)
}