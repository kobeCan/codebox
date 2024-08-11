import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { type FlexTableColumnOptions } from './flex-table.component';
@Component({
  selector: 'flex-table-header',
  template: ``,
})
export class FlexTableHeaderComponent<T extends Record<string, any> = any> {
  @Input() slot: string;

  @ContentChild(TemplateRef)
  templateRef: TemplateRef<{ $implicit: T; column: FlexTableColumnOptions }> =
    null;
}
