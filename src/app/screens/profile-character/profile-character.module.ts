import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileCharacterPageRoutingModule } from './profile-character-routing.module';

import { ProfileCharacterPage } from './profile-character.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileCharacterPageRoutingModule
  ],
  declarations: [ProfileCharacterPage]
})
export class ProfileCharacterPageModule {}
