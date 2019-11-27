import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-iconestatus',
  template: `
  <span class="glyphicon" 
  [class.glyphicon-ok]="status"
  [class.glyphicon-remove]="!status"></span>
  `,
  styles: [
    '.glyphicon-ok{ color: green; }', 
    '.glyphicon-remove { color: red;}']
})
export class IconestatusComponent {

  @Input()
  status: boolean = false;
  
}
