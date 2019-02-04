const Configstore = require('configstore')

const defaultValues = {
    host: 'rl.hsfaffiliates.com',
    key: 'your-api-key'
}

const store = new Configstore('context-real-estate-imprev', defaultValues)

module.exports = store