import { Component, signal } from '@angular/core';
import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { EmailForm } from './email-form/email-form';
import { EmailsList } from './emails-list/emails-list';
@Component({
  selector: 'app-root',
  imports: [EmailForm, BootstrapIconsModule, EmailsList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('email-reader');
}
