import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
} from '@angular/core';
import { FlexTableColumnComponent } from './flex-table-column.component';
import { FlexTableHeaderComponent } from './flex-table-header.component';

export interface FlexTableColumnOptions {
  /* Required props */

  /**
   * Field
   */
  field: string;

  /* Optional props */

  /**
   * 如果为空, 将降级使用 field 值表示.
   */
  label?: string;

  width?: string;
}

export interface FlexTableOptions<T> {
  dataSource?: T[];
}

@Component({
  selector: 'flex-table',
  templateUrl: './flex-table.component.html',
  styleUrls: ['./flex-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlexTableComponent<T extends Record<string, any> = any>
  implements OnInit, AfterContentInit
{
  @Input() dataSource: T[] = [];

  @Input() columns: FlexTableColumnOptions[] = [];

  @Input() headers?: T[];

  @ContentChildren(FlexTableColumnComponent)
  columnRefs: QueryList<FlexTableColumnComponent>;

  @ContentChildren(FlexTableHeaderComponent)
  headerRefs: QueryList<FlexTableHeaderComponent<T>>;

  constructor() {}

  ngOnInit(): void {}

  get columnComponents() {
    return (
      this.columnRefs?.reduce((accum, columnRef) => {
        accum.set(columnRef.slot, columnRef);
        return accum;
      }, new Map<string, FlexTableColumnComponent>()) || new Map()
    );
  }

  get headerComponents() {
    return (
      this.headerRefs?.reduce((accum, headerRef) => {
        accum.set(headerRef.slot, headerRef);
        return accum;
      }, new Map<string, FlexTableHeaderComponent>()) || new Map()
    );
  }

  get normalizeHeaders() {
    if (this.headers === undefined) {
      return [
        this.columns.reduce((accum, col) => {
          accum[col.field] = col.label ?? col.field;
          return accum;
        }, {} as Record<string, any>),
      ];
    }

    return this.headers;
  }

  ngAfterContentInit(): void {
    console.log(this.headerComponents);
    console.log(this.columnComponents);
  }
}
