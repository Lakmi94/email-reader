import { Component, OnInit, ViewChild } from '@angular/core';
import { Email } from '../interfaces/email';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EmailService } from '../services/email-service';
import { FormsModule } from '@angular/forms';
import { FilterTextPipe } from '../pipes/filter-text-pipe';
@Component({
  selector: 'app-emails-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, FilterTextPipe],
  templateUrl: './emails-list.html',
  styleUrls: ['./emails-list.css'],
})
export class EmailsList implements OnInit {
  emailList: Email[] = [];
  withBody: boolean = false;
  email: Email | null = null;
  filterTerm: string = '';

  constructor(private emailService: EmailService) {}
  ngOnInit(): void {
    this.emailService.getEmails().subscribe((list) => (this.emailList = list));
  }

  get filteredEmails(): Email[] {
    if (this.withBody) {
      return this.emailList.filter((email) => !!email.body && email.body.trim() !== '');
    }
    return this.emailList;
  }

  getEmailsList() {
    this.emailService.getEmails().subscribe((list) => {
      this.emailList = list;
    });
  }

  remove(email: Email): void {
    this.emailService.deleteEmail(email).subscribe(() => {
      this.getEmailsList();
      this.email = null;
    });
    this.emailList = this.emailList.filter((e) => e.id !== email.id);
  }
}
