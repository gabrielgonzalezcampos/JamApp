import { Component, OnInit } from '@angular/core';
import { ToolbarService } from 'src/app/services/toolbar.service';
import { WebsocketsService } from 'src/app/services/websockets.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss'],
})
export class ChatListComponent implements OnInit {

  constructor(private toolbarService: ToolbarService, private websockets: WebsocketsService) { }

  ngOnInit() {
    console.log("buscant xats")
    this.websockets.conversations();
  }

}