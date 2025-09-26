import { Component, OnInit, viewChild } from '@angular/core';
import { Email } from '../interfaces/email';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EmailService } from '../services/email-service';
import { get } from 'http';
@Component({
  selector: 'app-emails-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './emails-list.html',
  styleUrl: './emails-list.css',
})
export class EmailsList implements OnInit {
  emailList: Array<Email> = [];
  email: Email | null = null;

  constructor(private emailService: EmailService) {}
  ngOnInit(): void {
    this.getEmailsList();
  }

  getEmailsList() {
    this.emailService.getEmails().subscribe((list) => (this.emailList = list));
  }
}
