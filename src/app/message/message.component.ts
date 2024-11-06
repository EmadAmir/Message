import { Component, inject, OnInit } from '@angular/core';
import { AppService } from '../../service/app.service';
import { Message } from '../../models/message';
import { MessageListComponent } from './message-list/message-list.component';
import { NgFor } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule, NgModel } from '@angular/forms';
import { FilterMessageComponent } from './filter-message/filter-message.component';
import { JsonpInterceptor } from '@angular/common/http';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [
    MessageListComponent,
    NgFor,
    MatButton,
    MatIcon,
    FormsModule,
    FilterMessageComponent,
  ],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent implements OnInit {
  private _appService = inject(AppService);

  messages: Message[] = [];
  filteredMessageList: Message[] = [];
  filterTopicName: string = '';

  ngOnInit(): void {
    this.getFilterFromLocalStorage();
    this.getMessages();
  }

  getMessages() {
    this._appService.getMessages().subscribe({
      next: (data) => {
        this.messages = data;
        this.filterMessagesByTopicName();
      },
      error: (error) => console.log(error),
    });
  }

  getFilterFromLocalStorage() {
    const filter = localStorage.getItem('filteredTerm');
    this.filterTopicName = filter || '';
  }

  updateLocalStorage() {
    localStorage.setItem('filteredTerm', this.filterTopicName);
  }

  onFilterTopicName(filterTerm: string) {
    this.filterTopicName = filterTerm;
    this.updateLocalStorage();
    this.filterMessagesByTopicName();
  }

  filterMessagesByTopicName() {
    const tempStoreArray = [];

    if (this.filterTopicName.trim() === '') {
      localStorage.removeItem('filteredMessage');
      this.filteredMessageList = this.messages;
    } else {
      this.updateLocalStorage();
      this.messages.filter((message) => {
        const messageName = message.name.trim().toLowerCase();

        if (messageName === this.filterTopicName.toLowerCase()) {
          tempStoreArray.push(message);
        }
      });
      this.filteredMessageList = tempStoreArray;
    }
  }
}
