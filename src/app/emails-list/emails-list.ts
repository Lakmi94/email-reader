import { Component, OnInit, ViewChild } from '@angular/core';
import { Email } from '../interfaces/email';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EmailService } from '../services/email-service';
@Component({
  selector: 'app-emails-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './emails-list.html',
  styleUrls: ['./emails-list.css'],
})
export class EmailsList implements OnInit {
  emailList: Array<Email> = [];
  email: Email | null = null;

  constructor(private emailService: EmailService) {}
  ngOnInit(): void {
    this.emailService.getEmails().subscribe((list) => (this.emailList = list));
  }

  getEmailsList() {
    this.emailService.getEmails().subscribe((list) => {
      this.emailList = list;
    });
  }

  remove(email: Email): void {
    this.emailService.deleteEmail(email).subscribe(() => {
      this.emailList = this.emailList.filter((e) => e.id !== email.id);
      this.email = null;
    });
    this.emailList = this.emailList.filter((e) => e.id !== email.id);
  }
}