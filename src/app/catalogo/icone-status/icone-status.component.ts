import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icone-status',
  template: `
  <span class="glyphicon" [class.glyphicon-ok]="status"
    [class.glyphicon-remove]="!status" aria-hidden="true">
  </span>
  `,
  styles: [
    '.glyphicon-remove { color: red; }',
    '.glyphicon-ok { color: green; }'
  ]
})
export class IconeStatusComponent {
  @Input()
  status: boolean;
}
