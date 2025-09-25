import { Component, OnInit, viewChild } from '@angular/core';
import { EmailService } from '../services/email-service';
import { Email } from '../interfaces/email';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-emails-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './emails-list.html',
  styleUrl: './emails-list.css',
})
export class EmailsList implements OnInit {
  emailList: Array<Email> = [];
  constructor(private emailService: EmailService) {
    this.emailList = [];
  }
  ngOnInit(): void {
    this.emailList = this.emailService.getEmails();
  }
}
