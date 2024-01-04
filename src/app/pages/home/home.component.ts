import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data: any;
  characters: Character[] = [];

  searchTerm: string = '';

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe((res) => {
      this.data = res.results;
      this.characters = this.characters.concat(this.data);
      console.log(this.characters);
    });
  }

  loadMore() {
    this.characterService.loadMore().subscribe((res) => {
      this.data = this.data.concat(res.results);
      this.characters = this.characters.concat(this.data);
    });
  }

  search() {
    this.characterService.searchByName(this.searchTerm).subscribe((res) => {
      this.data = res.results;
    });
  }
}
