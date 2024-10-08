import { Component } from '@angular/core';
import { HeroComponent } from '../../hero/hero.component';
import { NewArrivalsComponent } from '../../new-arrivals/new-arrivals.component';
import { MembershipComponent } from '../../membership/membership.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent,NewArrivalsComponent,MembershipComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
