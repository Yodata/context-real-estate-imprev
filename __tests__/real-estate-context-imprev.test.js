const transform = require('../lib')
const validate = require('../lib/validate-response')

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
});
