module.exports = {
	type: 'RealEstateAgent',
	availableLanguage: [
		{
			type: 'Language',
			name: 'English',
			alternateName: ['en', 'en-US']
		}
	],
	memberOf: [
		{
			type: 'MLSMembership',
			identifier: 'bruce.wayne',
			memberOf: {
				type: 'MultipleListingService',
				name: 'Gotham City MLS'
			}
		},
		{
			type: 'OrganizationRole',
			roleName: 'Relocation Specialist',
			memberOf: 'https://AccountID.ds.bhhsresource.com/profile/card#me'
		}
	],
	contactPoint: [
		{
			type: 'ContactPoint',
			name: 'Office Phone',
			telephone: '820-549-9959',
			email: 'batman@example.com',
			faxNumber: '1-704-912-7169'
		}
	],
	name: 'OfficePhone',
	telephone: '867-5309',
	certification: [
		{
			type: 'Certification',
			name: 'e-Agent Certified',
			validFrom: '1970-01-01T00:00:00.000Z'
		}
	],
	permit: [
		{
			type: 'RealEstateLicense',
			name: 'CA DRE',
			identifier: 'CADRE#1234',
			issuedBy: {
				type: 'State',
				name: 'California',
				additionalName: ['CA']
			},
			issuedThrough: {
				type: 'GovernmentService',
				name: 'California Department of Real Estate'
			}
		}
	],
	identifier: {
		'@context': 'https://yodata.io/hsf/reflex/context#',
		ContactID: '12345',
		ContactGUID: 'contact6-d591-e811-9efd-0a3d083f1533',
		PersonPREAID: '12345'
	},
	additionalProperty: {
		'@context': 'https://yodata.io/hsf/reflex/context#',
		AffiliateID: 'AffiliateID',
		OfficeID: 'OfficeID',
		OfficeDBA: 'OfficeDBA',
		BrokerID: 'BrokerID',
		OfficeStatus: 'OfficeStatus',
		Status: 'Status',
		UserType: 'Full Time Sales Professional'
	}
};
