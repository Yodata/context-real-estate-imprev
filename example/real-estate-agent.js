module.exports = {
	type: 'RealEstateAgent',
	name: 'agent_Name',
	telephone: 'agent_telephone',
	email: 'agent_email',
	address: {
		type: "PostalAddress",
		streetAddress: "streetAddress",
		postOfficeBoxNumber: "postOfficeBoxNumber",
		addressRegion: "state",
		addressLocality: "city",
		postalCode: "postalCode"
	},
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
			memberId: 'memberId',
			memberOf: {
				type: 'MultipleListingService',
				name: 'mls_name'
			}
		},
		{
			type: 'OrganizationRole',
			roleName: 'role_name',
			memberOf: 'https://AccountID.ds.bhhsresource.com/profile/card#me'
		}
	],
	contactPoint: [
		{
			type: 'ContactPoint',
			name: 'contact_point_1',
			telephone: 'contact_point_1_telephone',
		},
		{
			type: 'ContactPoint',
			name: 'contact_point_2',
			email: 'contact_point_2_email'
		}
	],
	
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
		UserType: 'Full Time Sales Professional',
	},
	url: [
		'https://www.facebook.com/yodaveduran',
		'https://www.linkedin.com/in/daveduran/',
		'https://twitter.com/@RealDonaldTrump'
	]
};
