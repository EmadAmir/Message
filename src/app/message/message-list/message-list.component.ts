import { Component, inject, Input, OnInit } from '@angular/core';
import { AppService } from '../../../service/app.service';
import { Message } from '../../../models/message';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-message-list',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.scss',
})
export class MessageListComponent {
  @Input() message: Message | undefined;
}
