import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <input [(ngModel)] = "name" value="Fardin" type="text" />
    {{ name }}
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
  public name = 'Fardin';

  constructor() {}

  ngOnInit(): void {}
}
