import { Component, OnInit } from '@angular/core';
import { DataConfig } from 'src/app/modules/query-builder/components/query-builder';
import { LIST_DETAILS, SAMPLE_PROPERTIES } from './mock-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // componentData: DataConfig = {
  //   query: { condition: "must", rules: [] },
  //   config: { query: { "*": { "*": "" } }, condition: "must", shouldHide: true, rules: [
  //     {
  //       "condition": "must",
  //       "source": "Customer",
  //       "isRoot": true,
  //       "counted": 0,
  //       "rules":[{"field":"DateOfBirth","operator":"match","value":""}]
  //     }
  //   ], ruleSetMapping: [{"index":0,"selectedLeft":false,"selectedRight":false,"condition":"must"}] }
  // };
  componentData: DataConfig = {
    query: {},
    config: {}
  };
  data = LIST_DETAILS;
  queryBuilderProperties = SAMPLE_PROPERTIES;

  constructor() { }

  ngOnInit() {
    this.componentData.query = {
      condition: 'and',
      rules: [
        {
          condition: 'and',
          isRoot: true,
          counted: 0,
          source: 'Customer',
          rules: [
            {
              field: 'birthday',
              operator: '=',
              value: '2021-03-31T07:50:46.792Z'
            },
            {
              field: 'gender',
              operator: '=',
              value: 'm'
            },
            {
              field: 'occupation',
              operator: 'in',
              value: [
                'student',
                'teacher'
              ]
            }
          ]
        },
        {
          index: 1,
          source: 'Sale',
          condition: 'and',
          rules: [
            {
              field: 'name',
              operator: '=',
              value: 'Sample campaign'
            }
          ],
          isRoot: true,
          counted: 0
        }
      ],
      ruleSetMapping: [
        {
          index: 0,
          selectedLeft: false,
          selectedRight: false,
          condition: 'and'
        },
        {
          index: 1,
          selectedLeft: false,
          selectedRight: false,
          isLeftDisabled: false,
          isRightDisabled: false,
          condition: 'and'
        }
      ]
    };
    this.componentData.config = {
      age: { name: 'Age', type: 'number' },
      gender: {
        name: 'Gender',
        type: 'category'
      },
      name: { name: 'Name', type: 'string' },
      notes: { name: 'Notes', type: 'textarea', operators: ['=', '!='] },
      educated: { name: 'College Degree?', type: 'boolean' },
      birthday: {
        name: 'Birthday', type: 'date', operators: ['=', '<=', '>'],
        defaultValue: (() => new Date())
      },
      school: { name: 'School', type: 'string', nullable: true },
      occupation: {
        name: 'Occupation',
        type: 'category'
      }
    };

    // if (this.data.UiObj && this.data.EsQuery) {
    //   this.componentData.query = JSON.parse(this.data.EsQuery);
    //   this.componentData.config = JSON.parse(this.data.UiObj);
    // }
  }

  onQueryUpdate(queryData: DataConfig) {
    this.componentData.query = queryData.query;
    this.componentData.config = queryData.config;
  }
}
