import { Routes } from '@angular/router';
import { EmailForm } from './email-form/email-form';
import { EmailsList } from './emails-list/emails-list';
import { EmailReaderBasic } from './email-reader-basic/email-reader-basic';


export const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: EmailsList },
  { path: 'compose', component: EmailForm },
  { path: 'read', component: EmailReaderBasic },

];
