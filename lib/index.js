const context = require('./context')
const createView = require('./create-view')

module.exports = data => {
    return createView(context.map(data))
}
