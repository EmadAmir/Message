import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from '../models/message';
import { CreateMessageDto } from '../dto/createMessageDto';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private accessToken = 'xxxxxxxxxxxxxxxxxxxxxx';
  private baseUrl = 'xxxxxxxxxxxxxxxxxxxxxxxxx';
  private http = inject(HttpClient);

  getMessages() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.accessToken}`,
    });

    return this.http.get<Message[]>(this.baseUrl, { headers });
  }

  postMessage(message: CreateMessageDto) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.accessToken}`,
    });

    return this.http.post<Message>(this.baseUrl, message, { headers });
  }
}
