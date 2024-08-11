import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexTableModule } from './flex-table/flex-table.module';
import { HomeComponent } from './views/home/home.component';
import { TableComponent } from './views/table/table.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'table',
    component: TableComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, TableComponent],
  imports: [FlexTableModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
