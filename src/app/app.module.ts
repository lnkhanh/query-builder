import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QueryBuilderModule } from './modules/query-builder';
import { HomeComponent } from './pages/home/home.component';
import { AngularSplitModule } from 'angular-split';
import { QueryBuilderOptions } from './modules/query-builder/components/query-builder';

const queryBuilderConfig: QueryBuilderOptions = {
  apiEndpoint: 'https://abc.com'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    QueryBuilderModule.forRoot(queryBuilderConfig),
    AngularSplitModule.forChild(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
