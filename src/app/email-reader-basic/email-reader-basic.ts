import { Component, ViewChild, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Email } from '../interfaces/email';
import { CommonModule } from '@angular/common';  // 👈 add this
import { log } from 'console';

@Component({
  selector: 'app-email-reader-basic',
  imports: [FormsModule, CommonModule],
  templateUrl: './email-reader-basic.html',
  styleUrl: './email-reader-basic.css',
})
export class EmailReaderBasic implements OnInit {
  email: Email;
  emailList: Email[] = [];
  @ViewChild('emailForm') emailForm: any;
  constructor() {}

  ngOnInit(): void {
    this.email = {
      to: '',
      from: '',
      subject: '',
      body: null,
    };
    this.emailList = [];
  }

  addEmailToList(email: Email): void {
      console.log('email',email);
    this.emailList.push({
      to: email.to,
      from: email.from,
      subject: email.subject,
      body: email.body,
    });
    this.emailForm.resetForm();
    console.log(this.emailList);
    console.log(this.email);
    
  }

  resetEmail(): void {
    this.emailForm.resetForm();
  }
}
