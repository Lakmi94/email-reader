import { Component, ViewChild, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Email } from '../interfaces/email';
import { CommonModule } from '@angular/common';
import { IconsModule } from '../email-reader-basic/icons.module';
import { EmailService } from '../services/email-service';
import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-email-form',
  standalone: true,
  imports: [FormsModule, CommonModule, IconsModule, BootstrapIconsModule, RouterLink],
  templateUrl: './email-form.html',
  styleUrls: ['./email-form.css'],
})
export class EmailForm implements OnInit {
  email: Email;
  emailList: Array<Email> = [];

  @ViewChild('emailForm') emailForm: any;
  message: string | null = null;
  constructor(private emailService: EmailService) {
    this.emailList = [];
  }

  ngOnInit(): void {
    this.getEmailsList();
    this.email = {
      id: 0,
      to: '',
      from: '',
      subject: '',
      body: null,
    };
  }
  getEmailsList() {
    this.emailService.getEmails().subscribe((list) => {
      this.emailList = list;
    });
  }

  addEmailToList(email: Email): void {
    const addedEmail = {
      id: this.emailList.length + 1,
      to: email.to,
      from: email.from,
      subject: email.subject,
      body: email.body,
    };
    this.emailService.addEmail(addedEmail).subscribe((e) => {});
    this.message = `The email ${email.subject} sent to ${email.to} successfully!`;
    this.emailForm.resetForm();
  }

  resetEmail(): void {
    this.emailForm.resetForm();
  }
}
