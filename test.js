
module.exports = {
  "object": {
    "object": {
      "type": "RealEstateAgent",
      "id": "http://batman.example.com",
      "address": [
        {
          "type": "PostalAddress",
          "streetAddress": [
            "1007 Mountain Drive",
            "Cave"
          ],
          "addressLocality": "Gotham City",
          "addressRegion": "New Jersey",
          "postalCode": "11111",
          "addressCountry": "USA"
        }
      ],
      "availableLanguage": [
        {
          "type": "Language",
          "name": "English",
          "alternateName": [
            "en",
            "en-US"
          ]
        }
      ],
      "memberOf": [
        {
          "type": "MLSMembership",
          "identifier": "bruce.wayne",
          "memberOf": {
            "type": "MultipleListingService",
            "name": "Gotham City MLS"
          }
        },
        {
          "type": "OrganizationRole",
          "roleName": "Relocation Specialist",
          "memberOf": "https://AccountID.ds.bhhsresource.com/profile/card#me"
        }
      ],
      "contactPoint": [
        {
          "type": "ContactPoint",
          "name": "Home",
          "telephone": "820-549-9959",
          "email": "batman@example.com"
        },
        {
          "type": "ContactPoint",
          "name": "Work",
          "telephone": "867-5309",
          "faxNumber": "1-704-912-7169"
        }
      ],
      "certification": [
        {
          "type": "Certification",
          "name": "e-Agent Certified",
          "validFrom": "1970-01-01T00:00:00.000Z"
        }
      ],
      "permit": [
        {
          "type": "RealEstateLicense",
          "name": "CA DRE",
          "identifier": "CADRE#1234",
          "issuedBy": {
            "type": "State",
            "name": "California",
            "additionalName": [
              "CA"
            ]
          },
          "issuedThrough": {
            "type": "GovernmentService",
            "name": "California Department of Real Estate"
          }
        }
      ],
      "identifier": {
        "@context": "https://yodata.io/hsf/reflex/context#",
        "ContactID": "12345",
        "ContactGUID": "contact6-d591-e811-9efd-0a3d083f1533",
        "PersonPREAID": "12345"
      },
      "additionalProperty": {
        "@context": "https://yodata.io/hsf/reflex/context#",
        "AffiliateID": "AffiliateID",
        "OfficeID": "OfficeID",
        "OfficeDBA": "OfficeDBA",
        "BrokerID": "BrokerID",
        "OfficeStatus": "OfficeStatus",
        "Status": "Active",
        "UserType": "Full Time Sales Professional"
      },
      "url": [
        "http://mywebsite.com",
        "https://linkedin.com/in/testuser",
        "https://twitter.com/daveduran",
        "https://www.facebook.com/yodaveduran"
      ]
    }
  },
  "context": {
    "@view": `{
      “externalUserId”: id,
      “source”: ‘yodata-real-living’,
      “meta”: additionalProperty,
      “metaOrgKeys”: identifier,
      “orgLabel”: null,
      “status”: additionalProperty.Status,
      “localLanguage”: availableLanguage.name,
      “localCountry”: address[country][0].country,
      “email”: **.email,
      “firstName”: givenName,
      “middleInitial”: null,
      “lastName”: familyName,
      “street1”: $join(address[0].streetAddress,‘, ‘),
      “street2": null,
      “city”: address[0].addressLocality,
      “state”: address[0].addressRegion,
      “country”: address[0].addressCountry,
      “postalCode”: address[0].postalCode,
      “userImageUrl”: image.url,
      “companyId”: additionalProperty.AffiliateID,
      “officeId”: additionalProperty.OfficeID,
      “officeName”: additionalProperty.OfficeDBA,
      “officeUrl”: null,
      “officeEmail”: null,
      “agentProfilePage”: ‘???‘,
      “phone1": contactPoint[telephone][0].telephone,
      “phone1Type”: contactPoint[telephone][0].name,
      “phone2": contactPoint[telephone][1].telephone,
      “phone2Type”: contactPoint[telephone][1].name,
      “phone3": contactPoint[telephone][2].telephone,
      “phone3Type”: contactPoint[telephone][2].name,
      “timeZoneId”: null,
      “title”: jobTitle,
      “license”: permit.identifier,
      “designation”: ‘???’,
      “facebookUrl”: url[$contains(“facebook”)],
      “twitterUrl”: url[$contains(“twitter”)],
      “linkedInUrl”: url[$contains(“linkedin”)]
   }`
  }
}