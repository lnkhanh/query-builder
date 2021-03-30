export const SAMPLE_PROPERTIES = [
	{
		"FIELD": "DateOfBirth",
		"ATTRIBUTENAME": "Date of Birth",
		"TYPE": "Date",
		"SOURCE": "Customer",
		"OPERATOR": "<,<=,=,>,>=",
		"VALUESELECTED": "",
		"QUERYCLAUSE": ""
	},
	{
		"FIELD": "STATEPROVINCE",
		"ATTRIBUTENAME": "State/Province",
		"TYPE": "text",
		"SOURCE": "Customer",
		"OPERATOR": "in",
		"VALUESELECTED": "",
		"QUERYCLAUSE": "select STATEPROVINCE from customer group by STATEPROVINCE"
	},
	{
		"FIELD": "POSTALCODE",
		"ATTRIBUTENAME": "Postal Code ",
		"TYPE": "text",
		"SOURCE": "Customer",
		"OPERATOR": "in",
		"VALUESELECTED": "",
		"QUERYCLAUSE": "select POSTALCODE from customer group by POSTALCODE"
	},
	{
		"FIELD": "PRIMARYSTORE",
		"ATTRIBUTENAME": "Primary Store",
		"TYPE": "text",
		"SOURCE": "Sale",
		"OPERATOR": "in",
		"VALUESELECTED": "",
		"QUERYCLAUSE": "select PRIMARYSTORE from customer group by PRIMARYSTORE"
	}
];

export const LIST_DETAILS = {
	"Id": "9e838f77-9e06-4d5c-b697-aba4cd629893",
	"Name": "United First App Download",
	"Description": "Testing",
	"CompanyId": "a91f6788-bbe6-4ed3-8bb9-647c10eceeca",
	"ShortName": "AdhocList",
	"IsDynamic": false,
	"IsFinalized": 3,
	"Type": 1,
	// "UiObj": `{"query":{"*":{"*":""}},"condition":"must","shouldHide":true,"rules":[{"condition":"must","dimensionId": "4055361d-7d78-447d-b35f-12d25453ab97", "isRoot":true,"counted":12345,"rules":[{"field":"externalcustomerid","operator":"wildcard","value":"*"},{"field":"firstDownloadedApp","operator":"in_range_of_days","value":{"lt":"30"}}]}],"ruleSetMapping":[{"index":0,"selectedLeft":false,"selectedRight":false,"condition":"must"}]}`,
	"UiObj": ``,
	// "EsQuery": "{\"query\":{\"bool\":{\"must\":[{\"bool\":{\"must\":[{\"wildcard\":{\"externalcu" +
	// 	"stomerid\":\"*\"}},{\"range\":{\"firstDownloadedApp\":{\"gte\":\"now-30d/d\"}}}]" +
	// 	"}}]}}}",
	"EsQuery": ``,
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