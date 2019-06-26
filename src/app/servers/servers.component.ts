import { Component, OnInit, Directive } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: "./servers.component.html",
  styleUrls: ['./servers.component.scss']
})


export class ServersComponent implements OnInit {

  allowNewServer = true;
  serverCreationStatus = ''
  serverName = "Test Server"
  serverCreated = false;

  constructor() { }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = "Server was created! Name is " + this.serverName
  }

  onUpdateServerName(e: any) {
    this.serverName = (<HTMLInputElement>e.target).value
  }
}
