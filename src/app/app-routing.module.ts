import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'list-character',
    pathMatch: 'full'
  },
  {
    path: 'character',
    loadChildren: () => import('./screens/character/character.module').then( m => m.CharacterPageModule)
  },
  {
    path: 'list-character',
    loadChildren: () => import('./screens/list-character/list-character.module').then( m => m.ListCharacterPageModule)
  },
  {
    path: 'profile-character/:id',
    loadChildren: () => import('./screens/profile-character/profile-character.module').then( m => m.ProfileCharacterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
