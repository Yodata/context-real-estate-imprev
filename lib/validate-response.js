const Ajv = require('ajv')
const ajv = new Ajv()
require('ajv-keywords')(ajv)

const schema = require('./external-user.schema.json')

module.exports = data => {
    const result = {}
    result.isValid = ajv.validate(schema,data)
    result.error = ajv.errors
    return {result}
}