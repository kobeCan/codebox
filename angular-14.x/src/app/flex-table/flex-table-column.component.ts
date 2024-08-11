import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  Input,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { type FlexTableColumnOptions } from './flex-table.component';

@Component({
  selector: 'flex-table-column',
  template: ``,
})
export class FlexTableColumnComponent implements AfterContentInit {
  @Input() slot: string;

  @ContentChild(TemplateRef)
  templateRef: TemplateRef<{ $implicit: FlexTableColumnOptions }> = null;

  constructor() {}

  ngAfterContentInit(): void {}
}
