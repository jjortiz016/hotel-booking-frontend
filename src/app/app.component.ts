import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopheaderComponent } from "./components/common/topheader/topheader.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopheaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'reservahotelera';
}
