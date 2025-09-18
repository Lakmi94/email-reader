import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailReaderBasic } from './email-reader-basic';

describe('EmailReaderBasic', () => {
  let component: EmailReaderBasic;
  let fixture: ComponentFixture<EmailReaderBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailReaderBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailReaderBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
