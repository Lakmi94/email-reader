import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Email } from '../interfaces/email';

@Injectable({
  providedIn: 'root',
})
export class HttpServerEmailsSimulatorService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const emails: Email[] = [
      {
        id: 1,
        to: 'user1@example.com',
        from: 'user2@example.com',
        subject: 'Hello',
        body: 'This is a test email.',
      },
      {
        id: 2,
        to: 'user3@example.com',
        from: 'user4@example.com',
        subject: 'Hi',
        body: 'This is another test email.',
      },
      {
        id: 3,
        to: 'lakmi@example.com',
        from: 'user4@example.com',
        subject: 'Hi',
        body: '',
      },
    ];
    return { emails };
  }

  genId(emails: Email[]): number {
    return emails.length > 0 ? Math.max(...emails.map((emails) => emails.id)) + 1 : 1;
  }
}
