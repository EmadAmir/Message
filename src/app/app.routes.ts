import { Routes } from '@angular/router';
import { MessageListComponent } from './message/message-list/message-list.component';
import { MessageComponent } from './message/message.component';
import { AppComponent } from './app.component';
import { CreateMessageComponent } from './create-message/create-message.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./message/message.component').then((m) => m.MessageComponent),
  },
  {
    path: 'Message',
    loadComponent: () =>
      import('./message/message.component').then((m) => m.MessageComponent),
  },
  {
    path: 'Create-Message',
    loadComponent: () =>
      import('./create-message/create-message.component').then(
        (m) => m.CreateMessageComponent
      ),
  },
  { path: '**', redirectTo: '' },
];
