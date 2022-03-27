import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h1>Welcome {{ name }}</h1>
    <h2 [ngClass]="multiClassObj">AES Angular</h2>
    <h2 [style.color]="hasError ? 'red':'green'">Style Binding 1</h2>
    <h2 [style.color]="highlightColor">Style Binding 2</h2>
    <h2 [ngStyle]="titleStyles">Style Binding 3</h2>
  `,
  styles: [
    `
      h2 {
        text-align: center;
        color: red;
        font-size: 2rem;
      }

      .text-danger {
        color: red;
      }

      .text-success {
        color: green;
      }

      .text-special {
        font-style: italic;
      }
    `,
  ],
})
export class TestComponent implements OnInit {
  public name = 'Fardin';
  public myID = 'textID';

  public hasError = false;
  public isSpecial = false;
  public highlightColor = 'orange';

  public multiClassObj = {
    'text-danger': this.hasError,
    'text-success': !this.hasError,
    'text-special': this.isSpecial,
  };

  public titleStyles = {
      color : "blue",
      fontStyle: "italic"
  }

  constructor() {}

  ngOnInit(): void {}
}
