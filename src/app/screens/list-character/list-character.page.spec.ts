import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListCharacterPage } from './list-character.page';

describe('ListCharacterPage', () => {
  let component: ListCharacterPage;
  let fixture: ComponentFixture<ListCharacterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCharacterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListCharacterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
