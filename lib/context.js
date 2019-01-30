const {Context} = require('@yodata/transform')
const cdef = require('./external-user.cdef')
const context = new Context(cdef)
module.exports = context
