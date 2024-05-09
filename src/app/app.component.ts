import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NumeralsComponent} from "./components/numerals/numerals.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NumeralsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tdd-workshop';
}
