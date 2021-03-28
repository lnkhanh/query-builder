import { Component, OnInit } from '@angular/core';
import { DataConfig, Dimension } from 'src/app/modules/query-builder/components/query-builder';
import { DIMENSIONS, LIST_DETAILS, SAMPLE_PROPERTIES } from './mock-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  componentData: DataConfig = {
    query: { condition: "must", rules: [] },
    config: { query: { "*": { "*": "" } }, condition: "must", shouldHide: true }
  };
  data = LIST_DETAILS;
  queryBuilderProperties = SAMPLE_PROPERTIES;
  dimensions: Dimension[] = DIMENSIONS;
  
  constructor() { }

  ngOnInit() {
    if (this.data.UiObj && this.data.EsQuery) {
      this.componentData.query = JSON.parse(this.data.EsQuery);
      this.componentData.config = JSON.parse(this.data.UiObj);
    }
  }

  onQueryUpdate(queryData: DataConfig) {
    this.componentData.query = queryData.query;
    this.componentData.config = queryData.config;
  }
}
