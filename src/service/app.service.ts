import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from '../models/message';
import { CreateMessageDto } from '../dto/createMessageDto';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private accessToken =
    'eyJhbGciOiJSUzI1NiIsImtpZCI6IkYxMzU4MjBBNkI3MkU0ODEyNDgzNTc5QjI0QUUzN0FBNENGMEQ3N0MiLCJ4NXQiOiI4VFdDQ210eTVJRWtnMWViSks0M3FrencxM3ciLCJ0eXAiOiJhdCtqd3QifQ.eyJzdWIiOiI0MDM4ZTQ3MS1kMWM4LTRlNjItOGM2MS04Y2M1MmNjYzg3MmYiLCJuYW1lIjoidGVzdHVzZXJfMUBidXltZWRpYWhxLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6InRlc3R1c2VyXzFAYnV5bWVkaWFocS5jb20iLCJyb2xlIjoiQnV5ZXJfQWRtaW4iLCJvaV9wcnN0IjoiOTdkZmUyNDAzOGUwNDg4Y2EzNTMwNzIyZDk0YTM0ZTYiLCJjbGllbnRfaWQiOiI5N2RmZTI0MDM4ZTA0ODhjYTM1MzA3MjJkOTRhMzRlNiIsIm9pX3Rrbl9pZCI6ImY1NTA0MjNkLTkyMWUtNGMyZC1iZDhkLWVjMDVkMDNjMTAxZiIsInNjb3BlIjoib3BlbmlkIGVtYWlsIHByb2ZpbGUgcm9sZXMiLCJleHAiOjE3MzA4NjQwODMsImlzcyI6Imh0dHBzOi8vYm0tY2FtcGFpZ24tc3RhZ2luZy1hcGkuYXp1cmV3ZWJzaXRlcy5uZXQvIiwiaWF0IjoxNzMwODM1MjgzfQ.aDuv21mT_6IZzeUKZBtREvac1ZGQLrIE-_PgPiGjgoK2nZ79Mn5JjZmAhRz4EAGWbaQzjUdWOMTw_B7op6_zxkjEegsS6nEgqG6Mq9qGPafPlcxjPkgUnDmIpdY7RJj6WzX5X64vUFA651O10fAoPoUnjBJrHDVZ3sAOqX1Yns0_qmlGzBhChxe5a6UhUEKz-6jnW9_QaYsLHCKX23Cp1ai6SD_TJ1eJcj1uNW66e90KE5Vlf3qH4SjmhZAcSjIsO9ynzmKH3e5IqXsHTBX74CeJLBo9j7LwssgfHR_Fdj3H9v_OjtnQGxR2AE7qoEuYQ8TYTHn_sFzlY-jSfbE-ww';
  private baseUrl =
    'https://bm-campaign-staging-api.azurewebsites.net/api/MessageTopics';
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
