import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  providers: []
})
export class HeroComponent {
alertFunc = () => alert("I'm 7ooozaaa");
}
