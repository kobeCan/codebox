import { NgModule } from '@angular/core';
import { FlexTableComponent } from './flex-table.component';
import { FlexTableHeaderComponent } from './flex-table-header.component';
import { FlexTableColumnComponent } from './flex-table-column.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    FlexTableComponent,
    FlexTableHeaderComponent,
    FlexTableColumnComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  exports: [
    FlexTableComponent,
    FlexTableHeaderComponent,
    FlexTableColumnComponent,
  ],
})
export class FlexTableModule {}
