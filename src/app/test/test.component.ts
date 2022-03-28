import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>{{ txtFromParent }}</h2>
    <button (click)="sendToParent()">Send To Parent</button>
  `,
  styles: [
    `
      h2 {
        text-align: center;
        color: red;
        font-size: 2rem;
      }

      .temp-ref-vars {
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
  constructor() {}
  ngOnInit(): void {}

  // receiving text from parent
  @Input('parentText') public txtFromParent: any;

  // to send data from parent
  // we need to create an eventEmitter
  @Output() public childEvent = new EventEmitter();

  // we need to fire the event on button click
  // it means when the btn us been clicked
  // data will send to parent html component
  sendToParent() {
    this.childEvent.emit('sending text from child');
  }
}
