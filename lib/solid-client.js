//@ts-check
const got = require('got')
const config = require('./config-store')
const defaults = require('lodash/defaults')
const logger = console
const DEFAULT_CLIENT_CONFIG = {
     headers: {}
 }

exports.createClient = createClient
exports.getObject = getObject
exports.getData = getData

/**
 * @typedef SolidClientConfig
 * @property {object} [headers]
 */

/**
 * create a client
 * @param {SolidClientConfig} [clientConfig]
 * @returns {object} - solid.client interface
 */
function createClient(clientConfig = {}) {
	let options = defaults(clientConfig, DEFAULT_CLIENT_CONFIG )
	return got.extend(options)
}

function getData(hsfid) {
    const id = toURL(hsfid)
    return getObject({id})
}

/**
 * http GETs the object.id url
 * @param {object} object
 * @param {string} object.id - the url to get
 * @param {SolidClientConfig} [clientConfig] 
 */
async function getObject(object, clientConfig) {
	const client = createClient(clientConfig)
	return client.get(object.id,{json:true}).then(res => res.body)
}

function toURL(id) {
    const HOST = config.get('host')
    return `https://${id}.${HOST}/profile/card`
}