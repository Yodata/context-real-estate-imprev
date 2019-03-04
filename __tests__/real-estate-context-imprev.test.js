const transform = require('../lib')
const validate = require('../lib/validate-response')
const target = require('../example/external-user')

describe('context', () => {
	it('response schema is valid', () => {
		const source = require('../example/real-estate-agent')
		const data = transform(source)
		const validation = validate(data)
		expect(validation).toHaveProperty('result')
		expect(validation.result).toHaveProperty('isValid')
		console.log(validation.result)
		expect(validation.result.isValid).toBeTruthy()
	});


	it('transform.map', () => {
		const source = require('../example/real-estate-agent')
		const result = transform(source)
		expect(result).toEqual(target)
	});
});
