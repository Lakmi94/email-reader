import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EmailService } from '../services/email-service';
import { Email } from '../interfaces/email';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-email-viewer',
  imports: [CommonModule],
  templateUrl: './email-viewer.html',
  styleUrl: './email-viewer.css'
})

export class EmailViewer implements OnInit {
  email: Email | undefined;

  constructor(
    private route: ActivatedRoute,
    private emailService: EmailService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.emailService.getEmailById(id).subscribe(email => {
      this.email = email;
    });
  }
}
