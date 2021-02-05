import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileCharacterPage } from './profile-character.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileCharacterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileCharacterPageRoutingModule {}
