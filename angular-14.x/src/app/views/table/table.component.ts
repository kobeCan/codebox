import { Component, OnInit } from '@angular/core';
import { FlexTableColumnOptions } from 'src/app/flex-table/flex-table.component';
import { faker } from '@faker-js/faker';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  columns: FlexTableColumnOptions[] = [
    {
      label: 'Application Label',
      field: 'application',
    },
    {
      field: 'name',
    },
    {
      field: 'type',
    },
  ];

  headers = [
    {
      application: 'Application',
      name: 'Name',
      type: 'Type',
    },
  ];

  dataSource = [
    {
      application: faker.person.firstName(),
      name: faker.person.firstName(),
      type: faker.lorem.sentence(),
    },
    {
      application: faker.person.firstName(),
      name: faker.person.firstName(),
      type: faker.lorem.sentence(),
    },
    {
      application: faker.person.firstName(),
      name: faker.person.firstName(),
      type: faker.lorem.sentence(),
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
