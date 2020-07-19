import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BoughtPage } from './bought.page';

describe('BoughtPage', () => {
  let component: BoughtPage;
  let fixture: ComponentFixture<BoughtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoughtPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BoughtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
