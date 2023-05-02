import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styles: [
    `
      .fourPlus {
        color: white;
        border-radius: 5px;
        padding: 5px;
        margin-top: 5px;
        background-color: blue;
      }
    `,
  ],
})
export class Assignment3Component {
  visibility: boolean;
  clicks = [];
  count = 1;

  constructor() {
    let randomNum = Math.random();
    randomNum > 0.5 ? (this.visibility = true) : (this.visibility = false);
  }

  changeVisibility() {
    this.clicks.push(
      `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
    );
    console.log(this.clicks);
    this.count++;
    return (this.visibility = !this.visibility);
  }
}
