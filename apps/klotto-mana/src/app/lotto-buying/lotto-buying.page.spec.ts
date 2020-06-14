import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LottoBuyingPage } from './lotto-buying.page';

describe('LottoBuyingPage', () => {
  let component: LottoBuyingPage;
  let fixture: ComponentFixture<LottoBuyingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LottoBuyingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LottoBuyingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
