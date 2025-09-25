import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private emailList: Array<any>;

  constructor() { 
      this.emailList = [ {
      to: 'john@example.com',
      from: 'jane@example.com',
      subject: 'Hello John',
      body: 'Just wanted to say hello!'
    },
    {
      to: 'alice@example.com',
      from: 'bob@example.com',
      subject: 'Hello Alice',
      body: 'Just wanted to say hello!'
    },
    {
      to: 'charlie@example.com',
      from: 'dave@example.com',
      subject: 'Hello Charlie',
      body: ''
    }]; 
   }

  getEmails(): Array<any> {
    return this.emailList;
  }

  addEmail(email: any): void {
    this.emailList.push(email);
  }

  clearEmails(): void {
    this.emailList = [];
  } 
}
