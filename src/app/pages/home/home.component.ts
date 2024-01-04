import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data: any[] = [];
  searchData: any[] = [];
  searchTerm: string = '';

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe((res) => {
      this.data = this.data.concat(res.results);
    });
  }

  loadMore() {
    this.characterService.loadMore().subscribe((res) => {
      this.data = this.data.concat(res.results);
    });
  }

  searchByName() {
    this.searchData = this.data.filter((character) => {
      return character.name
        .toLowerCase()
        .includes(this.searchTerm.toLowerCase());
    });
  }

  resetSearch() {
    this.searchTerm = '';
    this.searchData = [];
  }
}
