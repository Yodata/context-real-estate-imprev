# `@yodata/context-real-estate-imprev`

> data transformations for @yodata/context-real-estate -> imprev

## Install

`$ git clone yodata/context-real-estate-imprev`

`$ yarn`

## Test

`$ yarn test`

## CLI

Make sure the binary is linked...

`$ yarn link`

Then you can use

```bash
$ imprev transform ./example/real-estate-agent.json

{ externalUserId: 'http://batman.example.com',
  source: 'yodata-real-living',
  meta:
   { '@context': 'https://yodata.io/hsf/reflex/context#',
     AffiliateID: 'AffiliateID',
     OfficeID: 'OfficeID',
     OfficeDBA: 'OfficeDBA',
     BrokerID: 'BrokerID',
     OfficeStatus: 'OfficeStatus',
     Status: 'ACTIVE',
     UserType: 'Full Time Sales Professional' },
  metaOrgKeys:
   { '@context': 'https://yodata.io/hsf/reflex/context#',
     ContactID: '12345',
     ContactGUID: 'contact6-d591-e811-9efd-0a3d083f1533',
     PersonPREAID: '12345' },
  orgLabel: null,
  status: 'ACTIVE',
  localLanguage: 'English',
  email: 'batman@example.com',
  middleInitial: null,
  street1: '1007 Mountain Drive, Cave',
  street2: null,
  city: 'Gotham City',
  state: 'New Jersey',
  country: 'USA',
  postalCode: '11111',
  companyId: 'AffiliateID',
  officeId: 'OfficeID',
  officeName: 'OfficeDBA',
  officeUrl: null,
  officeEmail: null,
  agentProfilePage: '???',
  phone1: '820-549-9959',
  phone1Type: 'Home',
  phone2: '867-5309',
  phone2Type: 'Work',
  timeZoneId: null,
  license: 'CADRE#1234',
  designation: '???',
  facebookUrl: 'https://www.facebook.com/yodaveduran',
  twitterUrl: 'https://twitter.com/daveduran',
  linkedInUrl: 'https://linkedin.com/in/testuser' }`
```

## Usage

```js
const context = require('@yodata/context-real-estate-imprev');
const realEstateAgent = { givenName: 'Bruce', familyName: 'Wayne' }
const externalUser = context.map(realEstateAgent)
console.log(externalUser)
// => { firstName: Bruce, lastName: Wayne }
```
