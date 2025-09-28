import { inject, Pipe, PipeTransform, Injectable } from '@angular/core';
import { Email } from '../interfaces/email';
@Pipe({
  name: 'filterText',
  pure: false,
  standalone: true,  
})
@Injectable()
export class FilterTextPipe implements PipeTransform {
  transform(items: Email[] | null | undefined, term: string): Email[] {
    if (!items) return [];
    if (!term) return items;
    return items.filter(email => this.checkEmail(email, term));
  }

  private checkEmail(item: Email, term: string): boolean {
    const lowerTerm = term.toLowerCase();

    // check string properties of Email
    return ['to', 'from', 'subject', 'body'].some(key => {
      const value = item[key as keyof Email];
      if (!value) return false;
      return value.toString().toLowerCase().includes(lowerTerm);
    });
  }
}
