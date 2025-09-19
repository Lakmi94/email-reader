import { Component, ViewChild, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Email } from '../interfaces/email';

@Component({
  selector: 'app-email-reader-basic',
  imports: [FormsModule],
  templateUrl: './email-reader-basic.html',
  styleUrl: './email-reader-basic.css',
})
export class EmailReaderBasic implements OnInit {
  email: Email 
  @ViewChild('emailForm') emailForm: any;
  constructor() {}

  ngOnInit(): void {
    this.email = {
      to: '',
      from: '',
      subject: '',
      body: null,
    };
  }
}
