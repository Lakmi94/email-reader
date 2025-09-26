import { Component, ViewChild, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Email } from '../interfaces/email';
import { CommonModule } from '@angular/common';
import { IconsModule } from './icons.module';
import { EmailService } from '../services/email-service';
@Component({
  selector: 'app-email-reader-basic',
  imports: [FormsModule, CommonModule, IconsModule],
  templateUrl: './email-reader-basic.html',
  styleUrl: './email-reader-basic.css',
})
export class EmailReaderBasic implements OnInit {
  email: Email;
  emailList: Array<Email> = [];
  @ViewChild('emailForm') emailForm: any;
  message: string | null = null;
  constructor(private emailService: EmailService) {
    this.emailList = [];
  }

  ngOnInit(): void {
    this.emailList = [];
    this.email = {
      id: 0,
      to: '',
      from: '',
      subject: '',
      body: null,
    };
  }

  addEmailToList(email: Email): void {
    this.emailList.push({
      id: email.id,
      to: email.to,
      from: email.from,
      subject: email.subject,
      body: email.body,
    });

    this.message = `The email ${email.subject} sent to ${email.to} successfully!`;
    this.emailForm.resetForm();
  }

  resetEmail(): void {
    this.emailForm.resetForm();
  }
}
