import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h1>Welcome {{ name }}</h1>
    <h2 [ngClass]="multiClassObj">AES Angular</h2>
    <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding 1</h2>
    <h2 [style.color]="highlightColor">Style Binding 2</h2>
    <h2 [ngStyle]="titleStyles">Style Binding 3</h2>

    <!-- Event Binding -->
    <button (click)="onClick($event)">Greet</button>
    <h3>{{ greetings }}</h3>

    <!-- Template Reference Variables -->
    <div class="temp-ref-vars">
        <input #myInput type="text">
        <button (click)="LogInfo(myInput.value)" >Log</button>
    </div>
  `,
  styles: [
    `
      h2 {
        text-align: center;
        color: red;
        font-size: 2rem;
      }

      .temp-ref-vars{
          padding: 5px;
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

  public greetings = '';

  public multiClassObj = {
    'text-danger': this.hasError,
    'text-success': !this.hasError,
    'text-special': this.isSpecial,
  };

  public titleStyles = {
    color: 'blue',
    fontStyle: 'italic',
  };

  constructor() {}

  ngOnInit(): void {}

  onClick(event: any) {
    console.log('Event Binding');
    this.greetings = 'Welcome to AES';
    console.log(event);
  }

  LogInfo(str:any){
    console.log(str)
  }
}
