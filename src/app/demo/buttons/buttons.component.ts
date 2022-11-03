import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
   <button mat-button>

  <mat-icon aria-hidden="false" aria-label="Example home icon" fontIcon="add_circle"></mat-icon>

  </button>

  <mat-checkbox class="example-margin">Check me!</mat-checkbox>
  `,
  styles: [
  ]
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
