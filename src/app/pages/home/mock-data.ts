export const SAMPLE_PROPERTIES = {
	"properties": {
		"address1": {
			"type": "text",
			"fields": {
				"keyword": {
					"type": "keyword",
					"ignore_above": 256
				}
			}
		},
		"address2": {
			"type": "text",
			"fields": {
				"keyword": {
					"type": "keyword",
					"ignore_above": 256
				}
			}
		},
		"city": {
			"type": "text",
			"fields": {
				"keyword": {
					"type": "keyword",
					"ignore_above": 256
				}
			}
		},
		"companyId": {
			"type": "text",
			"fields": {
				"keyword": {
					"type": "keyword",
					"ignore_above": 256
				}
			}
		},
		"createDate": {
			"type": "date"
		},
		"email": {
			"type": "text",
			"fields": {
				"keyword": {
					"type": "keyword",
					"ignore_above": 256
				}
			}
		},
		"externalcustomerid": {
			"type": "text",
			"fields": {
				"keyword": {
					"type": "keyword",
					"ignore_above": 256
				}
			}
		},
		"firstDownloadedApp": {
			"type": "date"
		},
		"firstname": {
			"type": "text",
			"fields": {
				"keyword": {
					"type": "keyword",
					"ignore_above": 256
				}
			}
		},
		"fullname": {
			"type": "text",
			"fields": {
				"keyword": {
					"type": "keyword",
					"ignore_above": 256
				}
			}
		},
		"groups": {
			"type": "long"
		},
		"id": {
			"type": "text",
			"fields": {
				"keyword": {
					"type": "keyword",
					"ignore_above": 256
				}
			}
		},
		"indexName": {
			"type": "text",
			"fields": {
				"keyword": {
					"type": "keyword",
					"ignore_above": 256
				}
			}
		},
		"isApproved": {
			"type": "boolean"
		},
		"isLockedOut": {
			"type": "boolean"
		},
		"lastname": {
			"type": "text",
			"fields": {
				"keyword": {
					"type": "keyword",
					"ignore_above": 256
				}
			}
		},
		"middlename": {
			"type": "text",
			"fields": {
				"keyword": {
					"type": "keyword",
					"ignore_above": 256
				}
			}
		},
		"mobilenumber": {
			"type": "text",
			"fields": {
				"keyword": {
					"type": "keyword",
					"ignore_above": 256
				}
			}
		},
		"objectType": {
			"type": "text",
			"fields": {
				"keyword": {
					"type": "keyword",
					"ignore_above": 256
				}
			}
		},
		"phonenumber": {
			"type": "text",
			"fields": {
				"keyword": {
					"type": "keyword",
					"ignore_above": 256
				}
			}
		},
		"photoIdUrl": {
			"type": "text",
			"fields": {
				"keyword": {
					"type": "keyword",
					"ignore_above": 256
				}
			}
		},
		"roleids": {
			"type": "text",
			"fields": {
				"keyword": {
					"type": "keyword",
					"ignore_above": 256
				}
			}
		},
		"state": {
			"type": "text",
			"fields": {
				"keyword": {
					"type": "keyword",
					"ignore_above": 256
				}
			}
		},
		"userId": {
			"type": "text",
			"fields": {
				"keyword": {
					"type": "keyword",
					"ignore_above": 256
				}
			}
		},
		"username": {
			"type": "text",
			"fields": {
				"keyword": {
					"type": "keyword",
					"ignore_above": 256
				}
			}
		},
		"zipCode": {
			"type": "text",
			"fields": {
				"keyword": {
					"type": "keyword",
					"ignore_above": 256
				}
			}
		},
		"zipcode": {
			"type": "text",
			"fields": {
				"keyword": {
					"type": "keyword",
					"ignore_above": 256
				}
			}
		}
	}
};

export const LIST_DETAILS = {
	"Id": "9e838f77-9e06-4d5c-b697-aba4cd629893",
	"Name": "United First App Download",
	"Description": "Testing",
	"CompanyId": "a91f6788-bbe6-4ed3-8bb9-647c10eceeca",
	"ShortName": "AdhocList",
	"IsDynamic": false,
	"IsFinalized": 3,
	"Type": 1,
	"UiObj": `{"query":{"*":{"*":""}},"condition":"must","shouldHide":true,"rules":[{"condition":"must","name": "Sample rule set", "isRoot":true,"counted":12345,"rules":[{"field":"externalcustomerid","operator":"wildcard","value":"*"},{"field":"firstDownloadedApp","operator":"in_range_of_days","value":{"lt":"30"}}]}],"ruleSetMapping":[{"index":0,"selectedLeft":false,"selectedRight":false,"condition":"must"}]}`,
	"EsQuery": "{\"query\":{\"bool\":{\"must\":[{\"bool\":{\"must\":[{\"wildcard\":{\"externalcu" +
		"stomerid\":\"*\"}},{\"range\":{\"firstDownloadedApp\":{\"gte\":\"now-30d/d\"}}}]" +
		"}}]}}}",
	"Count": 3420.0,
	"State": null,
	"ListSchedule": [
		{
			"Id": "183b54d4-6966-4363-a1fd-3118044f0f60",
			"ActiveStartDate": "2020-01-12T00:00:00",
			"ActiveStartTime": null,
			"Enabled": null,
			"FreqType": null,
			"FreqInterval": null,
			"FreqRecurrenceFactor": null,
			"ActiveEndDate": null,
			"ActiveEndTime": null,
			"IsDeleted": null,
			"CreatedDate": null,
			"ModifiedDate": "2020-11-17T02:00:28.997"
		}
	],
	"CreatedDate": "2020-11-16T03:48:18.5903814",
	"CreatedBy": null,
	"ModifiedDate": "2020-11-17T02:00:28.9954862",
	"ModifiedBy": null,
	"DimensionId": "1516354a-7b81-4e9a-b109-9a36a5ed8bc8",
	"TokensExtension": null,
	"SubSetDTOs": null,
	"ListExecutionEsQuery": "{ \"query\":{                                                                   " +
		"                \"bool\": {\"must\": [                                          " +
		"      {                                                    \"term\":            " +
		"                                             {                                  " +
		"                          \"segments\": {                                       " +
		"                       \"value\": \"AdhocList_b0cd5a38-d6e2-49b6-b007-657dce98d7" +
		"f5\"                                                                            " +
		"}                                                        }                      " +
		"                        }                                            ]          " +
		"                            }                                    }}"
};