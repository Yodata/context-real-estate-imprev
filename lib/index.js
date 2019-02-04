const context = require('./context')
const createView = require('./create-view')

module.exports = function(data) {
    return createView(context.map(data))
}
