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
    const cdef = fs.readFileSync(filePath,'utf8')
    let context
    if (pathname.endsWith('yaml')) { 
        context = Context.fromYaml(cdef)
    } else if (pathname.endsWith('json')) {
        context = new Context(JSON.parse(cdef))
    } else {
        throw new Error('unhandled file type')
    }
    context.use(createViewPlugin)
    return context
}