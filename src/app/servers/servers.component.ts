import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = '';
  serverCreated = false;
  servers = ['TestServer', 'TestServer2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = `Server ${this.serverName} was Created`;

    this.servers.push(this.serverName);

    this.onServerCreated();
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onServerCreated() {
    this.serverCreated = true;
  }
}
