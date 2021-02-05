import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCharacterPageRoutingModule } from './list-character-routing.module';

import { ListCharacterPage } from './list-character.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCharacterPageRoutingModule
  ],
  declarations: [ListCharacterPage]
})
export class ListCharacterPageModule {}
