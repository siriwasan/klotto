import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LottoTicketPage } from './lotto-ticket.page';

describe('LottoTicketPage', () => {
  let component: LottoTicketPage;
  let fixture: ComponentFixture<LottoTicketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LottoTicketPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LottoTicketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
