import { CharactersService } from './characters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-character',
  templateUrl: './list-character.page.html',
  styleUrls: ['./list-character.page.scss'],
})
export class ListCharacterPage implements OnInit {

  characters = [];

  constructor(private charactersService: CharactersService) { }

  ngOnInit() {
    this.charactersService.getAll().subscribe(res => {
      console.log(res);
      this.characters = res.results;})
  }

}
