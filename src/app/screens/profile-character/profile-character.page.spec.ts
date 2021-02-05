import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileCharacterPage } from './profile-character.page';

describe('ProfileCharacterPage', () => {
  let component: ProfileCharacterPage;
  let fixture: ComponentFixture<ProfileCharacterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileCharacterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileCharacterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
