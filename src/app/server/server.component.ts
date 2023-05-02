import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      .online {
        color: white;
      }

      offline {
        color: gray;
      }
    `,
  ],
})
export class ServerComponent {
  serverId = '';
  serverStatus = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';

    this.serverId = (Math.floor(Math.random() * 10) + 1).toString();
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
