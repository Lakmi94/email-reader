import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EmailService } from '../services/email-service';
import { Email } from '../interfaces/email';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-email-viewer',
  imports: [CommonModule, RouterLink],
  templateUrl: './email-viewer.html',
  styleUrl: './email-viewer.css'
})

export class EmailViewer implements OnInit {
  email: Email | undefined;
  emailList: Email[]
  constructor(
    private route: ActivatedRoute,
    private emailService: EmailService
  ) {}

  ngOnInit() {
    this.emailService.getEmails().subscribe((list) => (this.emailList = list));
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const mail = this.emailList.filter((e) => e.id === id);
    this.email = mail[0];
  }
}
