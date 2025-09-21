import { Component, signal } from '@angular/core';
import { EmailReaderBasic } from './email-reader-basic/email-reader-basic';
import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { allIcons } from 'ng-bootstrap-icons/icons';

@Component({
  selector: 'app-root',
  imports: [EmailReaderBasic, BootstrapIconsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('email-reader');
}
