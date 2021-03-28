import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { AngularSplitModule } from 'angular-split';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { NgxMaskModule } from 'ngx-mask';
import {
    QueryInputDirective,
    QueryFieldDirective,
    QueryEntityDirective,
    QueryOperatorDirective,
    QueryButtonGroupDirective,
    QuerySwitchGroupDirective,
    QueryRemoveButtonDirective,
    QueryEmptyWarningDirective,
    QueryArrowIconDirective,
} from './components/query-builder';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

// import { PartialsModule } from '../../partials/partials.module';
import { JsonEditorModule } from '../json-editor/json-editor.module';
import { QueryBuilderComponent } from './components/query-builder/query-builder.component';
import { ElsQueryBuilderComponent } from './components/els-query-builder/els-query-builder.component';
import { QueryEditorModalComponent } from './components/query-editor-modal/query-editor-modal.component';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatSelectModule,
  MatMenuModule,
  MatProgressBarModule,
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatTabsModule,
  MatNativeDateModule,
  MatCardModule,
  MatRadioModule,
  MatIconModule,
  MatDatepickerModule,
  MatSlideToggleModule,
  MatExpansionModule,
  MatAutocompleteModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatDividerModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
  MAT_DIALOG_DATA
} from "@angular/material";
import { NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { FunnelChartComponent } from './components/funnel-chart/funnel-chart.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    // Material
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatSelectModule,
    MatMenuModule,
    MatProgressBarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatTabsModule,
    MatNativeDateModule,
    MatCardModule,
    MatRadioModule,
    MatIconModule,
    MatDatepickerModule,
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    NgxMatTimepickerModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatDividerModule,
    MatDatepickerModule,
    NgxMatDatetimePickerModule,
    NgxDaterangepickerMd,
    DragDropModule,

    // PartialsModule.forRoot(),
    AngularSplitModule.forChild(),
    JsonEditorModule,
    NgxMatSelectSearchModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  declarations: [
    QueryBuilderComponent,
    ElsQueryBuilderComponent,
    QueryInputDirective,
    QueryOperatorDirective,
    QueryFieldDirective,
    QueryEntityDirective,
    QueryButtonGroupDirective,
    QuerySwitchGroupDirective,
    QueryRemoveButtonDirective,
    QueryEmptyWarningDirective,
    QueryArrowIconDirective,
    QueryEditorModalComponent,
    FunnelChartComponent
  ],
  exports: [
    QueryBuilderComponent,
    ElsQueryBuilderComponent,
    QueryInputDirective,
    QueryOperatorDirective,
    QueryFieldDirective,
    QueryEntityDirective,
    QueryButtonGroupDirective,
    QuerySwitchGroupDirective,
    QueryRemoveButtonDirective,
    QueryEmptyWarningDirective,
    QueryArrowIconDirective,

    // Material
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatSelectModule,
    MatMenuModule,
    MatProgressBarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatTabsModule,
    MatNativeDateModule,
    MatCardModule,
    MatRadioModule,
    MatIconModule,
    MatDatepickerModule,
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    NgxMatTimepickerModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatDividerModule,
    MatDatepickerModule,
    NgxMatDatetimePickerModule,
  ],
  providers: [
  ],
  entryComponents: [
    QueryEditorModalComponent
  ]
})
export class QueryBuilderModule { }
