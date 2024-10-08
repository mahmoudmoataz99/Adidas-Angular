import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [MatIconModule,RouterLink],
  
templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {

}
