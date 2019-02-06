# `@yodata/context-real-estate-imprev`

> data transformations for @yodata/context-real-estate -> imprev

## Install

`$ git clone yodata/context-real-estate-imprev`

`$ npm install`

## Test

`$ npm test`

## CLI

Make sure the binary is linked...

`$ npm link`

Then you can use

```bash
$ imprev transform 3001520


--- RESULT ---

{ externalUserId: 'https://3001520.rl.hsfaffiliates.com/profile/card#me',
  source: 'yodata-real-living',
  meta:
   [ { UserType: 'Full Time Sales Professional' },
     { OfficeDBA: 'Real Living Capital City' },
     { AffiliateID: 'GA204' },
     { OfficeStatus: 'Active' },
     { Status: 'Active' },
     { BrokerID: 'GA204' },
     { OfficeID: 'GA204-001' },
    ],
  metaOrgKeys: [ '3001520', 0, '3001520' ],
  orgLabel: '',
  status: 'ACTIVE',
  email: 'bo.ward@reallivingcc.com',
  firstName: 'Bo',
  middleInitial: null,
  lastName: 'Ward',
  street2: '',
  companyId: 'GA204',
  officeId: 'GA204-001',
  officeName: 'Real Living Capital City',
  officeUrl: null,
  officeEmail: null,
  agentProfilePage: '???',
  phone1: '(404) 376-6375',
  phone1Type: 'BusinessPhone',
  timeZoneId: null,
  designation: '???' }

```

## Usage

```js
const transform = require('@yodata/context-real-estate-imprev');
const realEstateAgent = { givenName: 'Bruce', familyName: 'Wayne' }
const externalUser = transform(realEstateAgent)
console.log(externalUser)
// => { firstName: Bruce, lastName: Wayne }
```
