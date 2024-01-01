import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent {
  @Input()
  src!: string;
  @Input()
  name!: string;
  @Input()
  status!: string;
  @Input()
  gender!: string;
  @Input()
  location!: string;
}
