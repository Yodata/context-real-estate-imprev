module.exports = {
	"$schema": "http://json-schema.org/draft-07/schema",
	"$comment": "https://imprev.dev.yodata.io/public/context-real-estate-imprev/schema",
	"type": "object",
	"additionalProperties": true,
	"definitions": {
		"NameValueObject": {
			"type": "object",
			"properties": {
				"name": {
					"type": "string"
				},
				"value": {
					"type": "string"
				}
			}
		}
	},
	"properties": {
		"externalUserId": {
			"type": "string",
			"description": "user id in the source system",
			"example": "https://batman.dev.yodata.io/profile"
		},
		"source": {
			"type": "string",
			"const": "yodata-realliving",
			"example": "yodata-realliving"
		},
		"meta": {
			"type": "array",
			"item": {
				"$ref": "#/definitions/NameValueObject"
			}
		},
		"metaOrgKeys": {
			"type": "array",
			"item": {
				"type": "string"
			}
		},
		"orgLabel": {
			"type": "string"
		},
		"status": {
			"type": "string",
			"enum": [
				"ACTIVE",
				"DISABLED",
				"CANCELLED"
			]
		},
		"localLanguage": {
			"type": "array",
			"item": {
				"type": "string"
			}
		},
		"localCountry": {
			"type": "string"
		},
		"email": {
			"type": "string",
			"format": "email",
			"example": "batman@example.com"
		},
		"firstName": {
			"type": "string",
			"example": "Bruce"
		},
		"middleInitial": {
			"type": "string",
			"example": "R"
		},
		"lastName": {
			"type": "string",
			"example": "Wayne"
		},
		"street1": {
			"type": "string",
			"example": "1007 Mountain Drive"
		},
		"street2": {
			"type": "string",
			"example": "Cave Entrance"
		},
		"city": {
			"type": "string",
			"example": "Gotham City"
		},
		"state": {
			"type": "string",
			"example": "New Jersey"
		},
		"country": {
			"type": "string",
			"example": "USA"
		},
		"postalCode": {
			"type": "string",
			"example": 71
		},
		"userImageUrl": {
			"type": "string",
			"format": "uri",
			"example": "http://example.com/image/1"
		},
		"companyId": {
			"type": "string",
		},
		"officeId": {
			"type": "string",
			"example": "1234"
		},
		"officeName": {
			"type": "string",
			"example": "Gotham City Real Estate"
		},
		"officeUrl": {
			"$comment": "uri",
			"type": "string",
			"format": "uri",
			"example": "https://example.com"
		},
		"officeEmail": {
			"$comment": "email",
			"type": "string",
			"format": "email"
		},
		"agentProfilePage": {
			"$comment": "url",
			"type": "string",
		},
		"phone1": {
			"type": "string",
			"$comment": "telephone"
		},
		"phone1Type": {
			"type": "string",
			"$comment": "name",
			"example": "Mobile"
		},
		"phone2": {
			"type": "string",
			"$comment": "telephone"
		},
		"phone2Type": {
			"type": "string",
			"$comment": "name",
			"example": "Mobile"
		},
		"phone3": {
			"type": "string",
			"$comment": "telephone"
		},
		"phone3Type": {
			"type": "string",
			"$comment": "name",
			"example": "Mobile"
		},
		"timeZoneId": {
			"type": "null"
		},
		"title": {
			"type": "string",
			"$comment": "jobTitle",
			"example": "Full Time Sales Professional"
		},
		"license": {
			"type": "string",
			"$comment": "permit.identifier",
			"example": "CADRE#12345"
		},
		"facebookUrl": {
			"type": "string",
			"format": "uri",
			"$comment": "uri",
			"comment": "possible match in url/sameAs containing facebook.com"
		},
		"twitterUrl": {
			"type": "string",
			"format": "uri",
			"$comment": "uri",
			"comment": "possible match in url/sameAs containing twitter.com"
		},
		"linkedInUrl": {
			"type": "string",
			"format": "uri",
			"$comment": "uri",
			"comment": "possible match in url/sameAs containing linkedin.com"
		}
	}
}