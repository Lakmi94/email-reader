import { Component, OnInit, viewChild } from '@angular/core';
import { Email } from '../interfaces/email';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EmailService } from '../services/email-service';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-emails-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './emails-list.html',
  styleUrl: './emails-list.css',
})
export class EmailsList implements OnInit {
  emailList: Array<Email> = [];
  email: Email | null = null;

  constructor(private emailService: EmailService, private cdr: ChangeDetectorRef) {
    this.emailList = [];
  }
  ngOnInit(): void {
    this.getEmailsList();
    
  }

  getEmailsList() {
    this.emailService.getEmails().subscribe((list) => {
      this.emailList = list;
     
    });
  }

  remove(email: Email): void {
    this.emailService.deleteEmail(email).subscribe(() => {
      this.getEmailsList()
      this.email = null;
    });
          this.emailList = this.emailList.filter((e) => e.id !== email.id);
    this.getEmailsList();
  }
}
