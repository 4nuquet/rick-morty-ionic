import { ProfileCharacterService } from './profile-character.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-character',
  templateUrl: './profile-character.page.html',
  styleUrls: ['./profile-character.page.scss'],
})
export class ProfileCharacterPage implements OnInit {

  characterId: String;
  characterInfo;

  constructor(private activatedRoute: ActivatedRoute,
    private profileCharacterService: ProfileCharacterService) { }

  ngOnInit() {
    this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
    this.profileCharacterService.getCharacterById(this.characterId).subscribe(res =>{
      console.log(res);
      this.characterInfo = res})
  }

}
